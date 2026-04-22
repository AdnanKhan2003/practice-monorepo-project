"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function Navbar() {
  const [ open, setOpen ] = useState(false);
  const router = useRouter();

  const handleClickLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push('/login')
      }
    });
  };

  return (
    <header className="bg-slate-200">
      <nav className="flex max-w-[1440px] mx-auto w-full justify-center items-center py-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="m-0 p-0"
        />
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blogs">Blogs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="items-center gap-2 hidden md:inline-flex">
        <Button onClick={handleClickLogout}>Log Out</Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="px-5 bg-slate-300 py-4 w-73">
            <SheetTitle className="mb-4">Menu</SheetTitle>

            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/blog">Blog</Link>
            
        <Button onClick={handleClickLogout}>Log Out</Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Navbar;
