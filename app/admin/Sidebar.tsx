'use client';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

function sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        const variant = isActive ? 'secondary' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            className={`${
              isActive && 'bg-primary text-white hover:text-black'
            } w-full capitalize font-normal mb-1 justify-start`}
            variant={variant}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default sidebar;
