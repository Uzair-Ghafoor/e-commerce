'use server';

import prisma from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    redirect('/');
  }
  return user;
};
const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};
export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect('/products');
  return product;
};

export const createProductAction = async (
  prevstate: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const price = Number(formData.get('price') as string);
    //temp
    const image = formData.get('image') as File;
    const description = formData.get('description') as string;
    const featured = Boolean(formData.get('featured') as string);
    await prisma.product.create({
      data: {
        name,
        company,
        price,
        image: '/images/img2.jpg',
        description,
        featured,
        clerkId: user.id,
      },
    });
    return { message: 'Product created' };
  } catch (error) {
    return renderError(error);
  }
};
