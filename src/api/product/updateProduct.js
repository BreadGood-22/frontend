import { axiosPrivate } from '../apiController';

export async function updateProduct(productId, itemName, price, link, itemImage) {
  try {
    const res = await axiosPrivate.put(`/product/${productId}`, {
      product: {
        itemName,
        price,
        link,
        itemImage,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
}
