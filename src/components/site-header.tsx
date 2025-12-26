"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 bg-background px-4">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-4 text-primary">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6 md:space-x-8">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-8" />
              ) : (
                <AlignLeft className="size-8" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
