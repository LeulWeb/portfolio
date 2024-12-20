"use client";

import * as React from "react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
 
  { name: "Works", href: "#work" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const  Navbar =()=> {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[10vh]  z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          Leul Webshet
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-gold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="link" className="md:hidden text-gold">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-black text-white">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
