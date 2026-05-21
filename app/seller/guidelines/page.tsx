"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAppRedirect } from "@/lib/hooks/useAppRedirect";

/**
 * SellerGuidelinesRedirectPage
 * Web: /seller/guidelines?categoryId={categoryId}
 * Mobile Deep Link: shopam://seller/guidelines?categoryId={categoryId}
 */
function GuidelinesRedirectContent() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId") || searchParams.get("category");
  const baseLink = "shopam://seller/guidelines";
  const appLink = categoryId ? `${baseLink}?categoryId=${categoryId}` : baseLink;

  const { status, storeLink } = useAppRedirect(appLink);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center font-sans">
      <div className="w-10 h-10 mb-4 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
      <h1 className="text-lg font-medium text-gray-800">{status}</h1>
      <p className="mt-2 text-sm text-gray-500">
        If you are not redirected,{" "}
        <a
          href={storeLink}
          className="text-orange-600 underline"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}

export default function SellerGuidelinesRedirectPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center font-sans">
        <div className="w-10 h-10 mb-4 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
        <h1 className="text-lg font-medium text-gray-800">Loading...</h1>
      </div>
    }>
      <GuidelinesRedirectContent />
    </Suspense>
  );
}
