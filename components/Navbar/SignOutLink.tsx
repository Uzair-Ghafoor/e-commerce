'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logout Successful' });
  };
  return (
    <SignOutButton>
      <Link
        href={'/'}
        onClick={handleLogout}
        className=' w-full text-sm ml-2.5'
      >
        logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
