import { axiosPrivate } from '../apiController';

export async function getProducts(accountname) {
  try {
    const {
      data: { product },
    } = await axiosPrivate.get(`/product/${accountname}`);

    return product;
  } catch (e) {
    console.log(e);
  }
}
