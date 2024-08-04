import BreadCrumbs from '@/components/product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/product/AddToCart';
import ProductRating from '@/components/product/ProductRating';

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  return <div>page</div>;
};

export default SingleProduct;
