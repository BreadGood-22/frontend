import { axiosPrivate } from '../apiController';

export async function getProductDetail({ productId }) {
  try {
    const {
      data: {
        product: { itemName, price, link, itemImage },
      },
    } = await axiosPrivate.get(`/product/detail/${productId}`);

    return { itemName, price, link, itemImage };
  } catch (e) {
    console.log(e);
  }
}
