import imageCompression from 'browser-image-compression';

export async function imageResize(file) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    const newFile = new File([compressedFile], `${compressedFile.name}`, {
      type: compressedFile.type,
    });

    return newFile;
  } catch (e) {
    console.log(e);
  }
}
