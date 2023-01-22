import { axiosPrivate } from '../apiController';

export async function updateProduct(productId, itemName, price, link, itemImage) {
  try {
    const { data } = await axiosPrivate.put(`/product/${productId}`, {
      product: {
        itemName,
        price,
        link,
        itemImage,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}
