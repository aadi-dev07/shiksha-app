import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export async function uploadFile(file: File, bucketName: string = 'notes') {
  try {
    if (!file) {
      throw new Error("No file selected");
    }

    // Instead of creating a bucket, first check if it exists
    // and if not, we'll handle that case differently
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    
    if (bucketsError) {
      console.error("Error checking buckets:", bucketsError);
      throw new Error(`Failed to check storage buckets: ${bucketsError.message}`);
    }
    
    const bucketExists = buckets?.some(b => b.name === bucketName);
    
    if (!bucketExists) {
      // If bucket doesn't exist, we need to inform the user
      // because client-side bucket creation might be blocked by RLS
      console.log(`Bucket ${bucketName} not found`);
      toast.error(`Storage bucket "${bucketName}" not found. Please contact an administrator.`);
      throw new Error(`Storage bucket "${bucketName}" does not exist and could not be created automatically due to permissions.`);
    }
    
    // Generate a clean file path
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = fileName; // Simple path without extra slashes

    // Determine content type
    const contentType = file.type || `application/${fileExt}`;
    console.log(`Uploading file ${filePath} with content type ${contentType}`);
    
    // Upload the file with explicit content type
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        contentType: contentType,
        cacheControl: '3600'
      });

    if (error) {
      console.error("Upload error details:", error);
      throw error;
    }
    
    if (!data) {
      throw new Error("Upload failed with no data returned");
    }
    
    // Get the public URL for the uploaded file
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(data.path);
      
    console.log("Upload successful, path:", data.path);
    console.log("Public URL:", publicUrlData?.publicUrl);
    
    return data.path;
  } catch (error: any) {
    console.error("Upload file error:", error);
    toast.error(`Upload failed: ${error.message || "Unknown error"}`);
    throw new Error(`File upload failed: ${error.message || "Unknown error"}`);
  }
}

export async function downloadFile(path: string, bucketName: string = 'notes') {
  try {
    console.log(`Downloading file from path: ${path} in bucket: ${bucketName}`);
    const { data, error } = await supabase.storage
      .from(bucketName)
      .download(path);

    if (error) {
      console.error("Download error details:", error);
      throw error;
    }
    
    if (!data) {
      throw new Error("Download failed with no data returned");
    }
    
    return data;
  } catch (error: any) {
    console.error("Download file error:", error);
    toast.error(`Download failed: ${error.message || "Unknown error"}`);
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
