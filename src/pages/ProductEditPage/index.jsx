import { useState } from 'react';
import { ProductForm } from '../../components';

export function ProductEditPage() {
  const [isProductEdit, setIsProductEdit] = useState(true);

  return <ProductForm isProductEdit={isProductEdit} />;
}
