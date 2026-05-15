"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="hidden md:block pb-6 md:py-8 bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 mx-auto leading-tight">
          Ready to Experience the Future of Shopping in Nigeria?
        </h2>

        <Button 
          onClick={() => window.open("https://apps.apple.com/ng/app/shopam/id6760197174", "_blank")}
          className="bg-[#ED8123] hover:bg-[#ED8123]/90 text-white font-bold text-sm px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Download Free App
        </Button>
      </div>
    </section>
  );
}
