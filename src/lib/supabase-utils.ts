
import { supabase } from "@/integrations/supabase/client";

export async function uploadFile(file: File, bucketName: string = 'notes') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file);

  if (error) throw error;
  return data.path;
}

export async function downloadFile(path: string, bucketName: string = 'notes') {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(path);

  if (error) throw error;
  return data;
}

export async function getNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function incrementNoteDownloads(noteId: string) {
  const { error } = await supabase.rpc('increment_downloads', { note_id: noteId });
  if (error) throw error;
}
