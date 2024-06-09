import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Initialize Firebase Storage
const storage = getStorage();

// Function to upload a resume to Firebase Storage
export const uploadResume = async (resumeFile) => {
  try {
    // Create a reference to the storage location
    const storageRef = ref(storage, 'resumes/' + resumeFile.name);
    
    // Upload the resume file
    const snapshot = await uploadBytes(storageRef, resumeFile);
    
    // Get the download URL for the uploaded file
    const downloadURL = await snapshot.ref.getDownloadURL();
    
    // Optionally return the download URL
    return downloadURL;
  } catch (error) {
    console.error('Error uploading resume:', error);
    throw error;
  }
};
