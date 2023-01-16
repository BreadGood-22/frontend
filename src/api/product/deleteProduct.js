import { axiosPrivate } from '../apiController';

export async function deleteProduct(productId) {
  try {
    const { data } = await axiosPrivate.delete(`/product/${productId}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}
