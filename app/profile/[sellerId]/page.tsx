"use client";

import { useParams } from "next/navigation";
import { useAppRedirect } from "@/lib/hooks/useAppRedirect";

/**
 * Seller Profile Redirect Page
 * Web: /profile/[sellerId]
 * Mobile Deep Link: shopam://seller-profile/{sellerId}
 * Mobile Screen: /(root)/seller-profile/{sellerId}
 */
export default function ProfileRedirectPage() {
  const params = useParams();
  const sellerId = Array.isArray(params.sellerId)
    ? params.sellerId[0]
    : params.sellerId;

  const { status, storeLink } = useAppRedirect(
    `shopam://seller-profile/${sellerId}`,
    !sellerId
  );

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
