import { axiosImg, BASE_URL } from '../apiController';
import { imageResize } from './imageResize';

export async function addImage(file) {
  try {
    const newFile = await imageResize(file);

    const formData = new FormData();

    formData.append('image', newFile);

    const {
      data: { filename },
    } = await axiosImg.post('/image/uploadfile', formData);

    return `${BASE_URL}/${filename}`;
  } catch (e) {
    console.log(e);
  }
}
