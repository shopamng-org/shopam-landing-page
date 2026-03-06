"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ComingSoonModal from "./ComingSoonModal";

// Navigation items - memoized for performance
const navItems = [
  { label: "About", href: "/about", isPageLink: true },
  { label: "Features", href: "#features", isPageLink: false },
  { label: "How it Works", href: "#how-it-works", isPageLink: false },
  { label: "FAQs", href: "#faqs", isPageLink: false },
] as const;

export default function ShopAmHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToHash } = useSmoothScroll();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Memoized navigation items to prevent unnecessary re-renders
  const memoizedNavItems = useMemo(() => navItems, []);

  // Optimized handlers with useCallback
  const handleMenuToggle = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const handleNavClick = useCallback(
    (href: string, isPageLink: boolean) => {
      if (isPageLink) {
        // Handle page navigation
        router.push(href);
      } else {
        // Handle hash links with two-step navigation for non-home pages
        if (pathname !== "/") {
          // We're on a non-home page, navigate to home with query parameter
          const sectionId = href.replace("#", "");
          router.push(`/?section=${sectionId}`);
        } else {
          // We're on home page, just scroll to section
          scrollToHash(href);
        }
      }
      setIsOpen(false);
    },
    [scrollToHash, router, pathname],
  );

  const handleDownloadAppClick = useCallback(() => {
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Handle scrolling to section after navigation from non-home pages
  useEffect(() => {
    if (pathname === "/") {
      const section = searchParams.get("section");
      if (section) {
        // Add a small delay to ensure the page has fully loaded
        const timer = setTimeout(() => {
          scrollToHash(`#${section}`);
          // Clean up the URL by removing the query parameter
          window.history.replaceState({}, "", "/");
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname, searchParams, scrollToHash]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/90 bg-[#F0F8FF]/50 backdrop-blur supports-[backdrop-filter]:bg-[#F0F8FF]/50">
      <div className="md:container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-18 lg:h-22">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/shopAm_logo.png"
              width={300}
              height={100}
              alt="shopAm Logo"
              className="w-22 h-6 md:w-52 md:h-14"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-10 xl:gap-12"
            aria-label="Main navigation"
          >
            {memoizedNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isPageLink)}
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded bg-transparent"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Button
            onClick={handleDownloadAppClick}
            className="hidden lg:flex bg-[#ED8123] hover:bg-[#ED8123]/90 text-white font-bold px-8 py-6 rounded-lg text-sm shadow-lg shadow-[#ED8123]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ED8123]/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ED8123] focus:ring-opacity-50"
            aria-label="Download the ShopAm app"
          >
            Download App
          </Button>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <Sheet open={isOpen} onOpenChange={handleMenuToggle}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  ) : (
                    <Menu
                      className="h-6 w-6 text-gray-800"
                      aria-hidden="true"
                    />
                  )}
                </Button>
              </SheetTrigger>

              {/* Mobile Menu Sheet Content - slides from top to bottom */}
              <SheetContent
                side="top"
                className="h-auto min-h-screen w-full bg-white/95 backdrop-blur-md border-b border-gray-200/90 p-0"
              >
                <div className="container mx-auto  pb-8">
                  {/* Mobile Logo */}
                  <div className="flex justify-between p-4 border-b">
                    <Image
                      src="/images/shopAm_logo.png"
                      width={200}
                      height={67}
                      alt="shopAm Logo"
                      className="w-22 h-6"
                      loading="lazy"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav
                    className="flex flex-col px-2"
                    aria-label="Mobile navigation"
                  >
                    {memoizedNavItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() =>
                          handleNavClick(item.href, item.isPageLink)
                        }
                        className="text-lg font-semibold  text-gray-800 hover:text-green-600 transition-colors duration-200 py-4 px-4  hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 font-sans border-b border-gray-300 bg-transparent text-left"
                        aria-label={`Navigate to ${item.label}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Download App Button - Mobile */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50 px-4">
                    <Button
                      onClick={handleDownloadAppClick}
                      className="w-full bg-[#ED8123] hover:bg-[#ED8123]/90 text-white font-bold py-6 rounded-lg text-xs shadow-lg shadow-[#ED8123]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ED8123]/40 focus:outline-none focus:ring-2 focus:ring-[#ED8123] focus:ring-opacity-50 font-sans"
                      aria-label="Download the ShopAm app"
                    >
                      <span className="text-sm">Download App</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
}
