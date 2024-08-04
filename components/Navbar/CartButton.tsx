import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
const CartButton = () => {
  const cartItems = 9;
  return (
    <Button
      asChild
      variant={'outline'}
      size={'icon'}
      className=' relative flex items-center justify-center
      '
    >
      <Link href={'/cart'}>
        <LuShoppingCart />
        <span className=' absolute bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center -top-3 -right-3 text-xs'>
          {cartItems}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
