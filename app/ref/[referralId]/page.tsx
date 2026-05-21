"use client";

import { useParams } from "next/navigation";
import { useAppRedirect } from "@/lib/hooks/useAppRedirect";

/**
 * Referral Redirect Page
 * Web: /ref/[referralId]
 * Mobile Deep Link: shopam://register?referral={referralId}
 * Mobile Screen: /(auth)/register?referral={referralId}
 */
export default function ReferralPage() {
  const params = useParams();
  const referralId = Array.isArray(params.referralId)
    ? params.referralId[0]
    : params.referralId;

  const { status, storeLink } = useAppRedirect(
    `shopam://register?referral=${referralId}`,
    !referralId
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
