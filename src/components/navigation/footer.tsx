import Link from 'next/link';

import Icons from '../global/icons';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t border-border px-6 pb-8 pt-16 lg:px-8 lg:pt-32">
      <div className="absolute -right-1/4 -top-1/3 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[14rem] lg:block"></div>
      <div className="absolute -left-1/4 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[14rem] lg:block"></div>

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="h-7 w-7" />
          </div>
          <p className="mt-4 text-start text-sm text-muted-foreground">
            A decentralized, sustainable coins trading platform.
          </p>
          <span className="mt-4 flex items-center text-sm text-neutral-200">
            Made in India with
            <Heart className="ml-1 h-3.5 w-3.5 fill-primary text-primary" />
          </span>
        </div>
      </div>

      <div className="mt-8 w-full border-t border-border/40 pt-4 md:flex md:items-center md:justify-between md:pt-8">
        <p className="mt-8 text-sm text-muted-foreground md:mt-0">
          &copy; {new Date().getFullYear()} AlgoVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
