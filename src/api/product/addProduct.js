import { axiosPrivate } from '../apiController';

export async function addProduct(itemName, price, link, itemImage) {
  try {
    const { data } = await axiosPrivate.post('/product', {
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
