import { axiosPrivate } from '../apiController';

export async function addProduct(itemName, price, link, itemImage) {
  try {
    await axiosPrivate.post('/product', {
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
