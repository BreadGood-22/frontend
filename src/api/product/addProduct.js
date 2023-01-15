import { axiosPrivate } from '../apiController';

export async function addProduct(itemName, price, link, itemImage) {
  try {
    const res = await axiosPrivate.post('/product', {
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
