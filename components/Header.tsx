import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

const navigationItems = [{ label: "Blog", href: "#" }];

export function Header(): JSX.Element {
  return (
    <header className="bg-white border-b [border-bottom-style:solid] border-[#0f4f4880] w-full">
      <div className="relative w-full max-w-[1152px] h-[79px] mx-auto px-4 lg:px-[136px]">
        <div className="flex items-center justify-between w-full h-full">
          {/* LEFT: Logo + Blog */}
          <div className="flex items-center gap-8">
            <img className="w-36 h-8" alt="Comulate logo" src="" />

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-center gap-6">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="relative overflow-hidden group"
                    >
                      <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#0f4f48] text-[14.9px] tracking-[0] leading-5 whitespace-nowrap">
                        {item.label}
                      </div>
                      <div className="absolute w-full h-0.5 -bottom-1 -left-full bg-[#0f4f48] group-hover:left-0 transition-all duration-300" />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* RIGHT: Log in + See a demo */}
          <div className="flex items-center gap-4 lg:gap-[67px]">
            <div className="relative overflow-hidden group cursor-pointer hidden md:block">
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#0f4f48] text-[14.9px] tracking-[0] leading-5 whitespace-nowrap">
                Log in
              </div>
              <div className="absolute w-full h-0.5 -bottom-1 -left-full bg-[#0f4f48] group-hover:left-0 transition-all duration-300" />
            </div>

            <Button className="bg-[#4adf7d] hover:bg-[#4adf7d]/90 text-[#0f4f48] shadow-[0px_1px_2px_#1018280d] h-11 px-5 rounded [font-family:'Inter-Medium',Helvetica] font-medium text-[14.9px] tracking-[0] leading-6">
              See a demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
