import { axiosImg, BASE_URL } from '../apiController';

export async function addImage(file) {
  const formData = new FormData();

  formData.append('image', file);

  try {
    const {
      data: { filename },
    } = await axiosImg.post('/image/uploadfile', formData);

    return `${BASE_URL}/${filename}`;
  } catch (e) {
    console.log(e);
  }
}
