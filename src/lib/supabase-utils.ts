
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export async function uploadFile(file: File, bucketName: string = 'notes') {
  try {
    // Check if bucket exists and create it if not
    const { data: buckets } = await supabase.storage.listBuckets();
    if (!buckets?.some(b => b.name === bucketName)) {
      await supabase.storage.createBucket(bucketName, {
        public: true,
        fileSizeLimit: 50000000 // 50MB limit
      });
    }
    
    // Upload the file
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) throw error;
    if (!data) throw new Error("Upload failed with no data returned");
    
    return data.path;
  } catch (error: any) {
    console.error("Upload file error:", error);
    throw new Error(`File upload failed: ${error.message || "Unknown error"}`);
  }
}

export async function downloadFile(path: string, bucketName: string = 'notes') {
  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .download(path);

    if (error) throw error;
    if (!data) throw new Error("Download failed with no data returned");
    
    return data;
  } catch (error: any) {
    console.error("Download file error:", error);
    throw new Error(`File download failed: ${error.message || "Unknown error"}`);
  }
}

export async function getNotes() {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    console.error("Get notes error:", error);
    throw new Error(`Failed to fetch notes: ${error.message || "Unknown error"}`);
  }
}

export async function incrementNoteDownloads(noteId: string) {
  try {
    const { error } = await supabase.rpc('increment_downloads', { note_id: noteId });
    if (error) throw error;
  } catch (error: any) {
    console.error("Increment downloads error:", error);
    // Don't throw here as this is not critical for user experience
  }
}
