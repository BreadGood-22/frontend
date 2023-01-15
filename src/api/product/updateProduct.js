import { axiosPrivate } from '../apiController';

export async function updateProduct(productId, itemName, price, link, itemImage) {
  try {
    await axiosPrivate.put(`/product/${productId}`, {
      product: {
        itemName,
        price,
        link,
        itemImage,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
