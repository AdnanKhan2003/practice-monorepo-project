import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-slate-200">
      <nav className="max-w-[1440px] mx-auto w-full flex justify-center items-center py-4 px-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="m-0 p-0"
        />
        <NavigationMenu className="">
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

        <Button variant="outline">Contact Us</Button>
      </nav>
    </header>
  );
}

export default Navbar;
