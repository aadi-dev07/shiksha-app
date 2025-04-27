
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export async function uploadFile(file: File, bucketName: string = 'notes') {
  try {
    if (!file) {
      throw new Error("No file selected");
    }

    // Check if bucket exists and create it if not
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(b => b.name === bucketName);
    
    if (!bucketExists) {
      console.log(`Bucket ${bucketName} not found, creating it...`);
      const { error: createError } = await supabase.storage.createBucket(bucketName, {
        public: true,
        fileSizeLimit: 50000000 // 50MB limit
      });
      
      if (createError) {
        console.error("Error creating bucket:", createError);
        throw new Error(`Failed to create storage bucket: ${createError.message}`);
      }
      
      // Wait a moment for bucket creation to propagate
      await new Promise(resolve => setTimeout(resolve, 1000));
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
