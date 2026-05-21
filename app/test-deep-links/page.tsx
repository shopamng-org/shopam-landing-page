"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Test Deep Links Page
 * Allows manual testing of deep linking redirection logic.
 */
export default function TestDeepLinksPage() {
  const [debugInfo, setDebugInfo] = useState<{
    userAgent: string;
    platform: string;
    maxTouchPoints: number;
    detectedOS: string;
    fallbackStore: string;
  } | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || "";
    const platform = navigator.platform || "";
    const maxTouchPoints = navigator.maxTouchPoints || 0;

    const isIOS =
      /iPad|iPhone|iPod/i.test(userAgent) ||
      (platform === "MacIntel" && maxTouchPoints > 1);

    const isAndroid = /Android/i.test(userAgent);

    const detectedOS = isIOS ? "iOS" : isAndroid ? "Android" : "Desktop/Other";
    const fallbackStore = isIOS
      ? "https://apps.apple.com/ng/app/shopam/id6760197174 (App Store)"
      : "https://play.google.com/store/apps/details?id=com.shopam.live (Play Store)";

    setTimeout(() => {
      setDebugInfo({
        userAgent,
        platform,
        maxTouchPoints,
        detectedOS,
        fallbackStore,
      });
    }, 0);
  }, []);

  const testData = {
    sellerId: "8392",
    referralId: "7c89f5",
    productId: "9901",
    orderId: "ord-12345",
  };

  const links = [
    { title: "Seller Profile", path: `/profile/${testData.sellerId}`, appLink: `shopam://seller-profile/${testData.sellerId}` },
    { title: "Referral", path: `/ref/${testData.referralId}`, appLink: `shopam://register?referral=${testData.referralId}` },
    { title: "Product", path: `/product/${testData.productId}`, appLink: `shopam://profile/product/${testData.productId}` },
    { title: "Home Dashboard", path: "/home", appLink: "shopam://" },
    { title: "Buyer Order", path: `/order/buyer/${testData.orderId}`, appLink: `shopam://orders/purchaseOrder/${testData.orderId}` },
    { title: "Seller Order", path: `/order/seller/${testData.orderId}`, appLink: `shopam://orders/soldOrder/${testData.orderId}` },
    { title: "Account", path: "/account", appLink: "shopam://account" },
    { title: "Wallet", path: "/wallet", appLink: "shopam://profile/wallet" },
    { title: "Products List", path: "/products", appLink: "shopam://profile/product" },
    { title: "Seller Products", path: "/seller/products", appLink: "shopam://profile/seller/products" },
    { title: "Create Seller Product", path: "/seller/products/new", appLink: "shopam://profile/seller/createProduct" },
    { title: "Edit Seller Product", path: `/seller/products/edit/${testData.productId}`, appLink: `shopam://profile/seller/updateProduct?productId=${testData.productId}` },
    { title: "Seller Guidelines", path: "/seller/guidelines", appLink: "shopam://seller/guidelines" },
    { title: "Seller Guidelines (Category 12)", path: "/seller/guidelines?categoryId=12", appLink: "shopam://seller/guidelines?categoryId=12" },
    { title: "Support", path: "/support", appLink: "shopam://support" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 pt-28">
      <h1 className="text-3xl font-bold mb-6">Deep Link Test Page</h1>
      <p className="mb-8 text-gray-600">
        Use the buttons below to test the redirection pages. These will attempt
        to open the Shopam mobile app or fallback to the App Store (iOS) or Play Store (Android).
      </p>

      {debugInfo && (
        <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-3.5 w-3.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <h3 className="text-lg font-bold text-orange-950">
              Live Device Diagnostics
            </h3>
          </div>
          <div className="grid gap-3 text-sm md:grid-cols-2 text-gray-700">
            <div className="bg-white/60 p-3 rounded-lg border border-orange-100">
              <span className="block font-semibold text-orange-900 mb-1">Detected OS:</span>
              <span className={`px-2 py-0.5 rounded font-mono text-xs font-semibold ${
                debugInfo.detectedOS === "iOS" 
                  ? "bg-blue-100 text-blue-800" 
                  : debugInfo.detectedOS === "Android" 
                    ? "bg-emerald-100 text-emerald-800" 
                    : "bg-gray-100 text-gray-800"
              }`}>
                {debugInfo.detectedOS}
              </span>
            </div>
            <div className="bg-white/60 p-3 rounded-lg border border-orange-100">
              <span className="block font-semibold text-orange-900 mb-1">Target Fallback Link:</span>
              <code className="text-xs break-all bg-gray-50 p-1 rounded border border-gray-100 block">
                {debugInfo.fallbackStore}
              </code>
            </div>
            <div className="bg-white/60 p-3 rounded-lg border border-orange-100 md:col-span-2">
              <span className="block font-semibold text-orange-900 mb-1">User Agent:</span>
              <code className="text-xs break-all bg-gray-50 p-1 rounded border border-gray-100 block">
                {debugInfo.userAgent}
              </code>
            </div>
            <div className="bg-white/60 p-3 rounded-lg border border-orange-100">
              <span className="block font-semibold text-orange-900 mb-1">Platform:</span>
              <code className="text-xs">{debugInfo.platform}</code>
            </div>
            <div className="bg-white/60 p-3 rounded-lg border border-orange-100">
              <span className="block font-semibold text-orange-900 mb-1">Max Touch Points:</span>
              <code className="text-xs">{debugInfo.maxTouchPoints}</code>
            </div>
          </div>
          <div className="mt-4 text-xs text-orange-800/70 border-t border-orange-100 pt-3">
            <strong>Diagnostic Version:</strong> v1.1.0 (Enhanced iOS & iPadOS Detection)
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {links.map((link, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-orange-600 truncate" title={link.title}>
              {link.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 truncate">
              Path:{" "}
              <code className="bg-gray-100 p-1">
                {link.path}
              </code>
            </p>
            <Link
              href={link.path}
              className="block w-full py-2 px-4 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
            >
              Test Link
            </Link>
            <div className="mt-4 text-xs text-gray-400">
              Maps to:{" "}
              <code className="break-all">
                {link.appLink}
              </code>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <h3 className="text-lg font-medium mb-2">Instructions</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Open this page on a mobile device where the Shopam app is installed.
          </li>
          <li>Click a button to test the redirection.</li>
          <li>
            If the app is installed, it should open directly to the
            corresponding screen.
          </li>
          <li>
            If the app is NOT installed, the page will show "Redirecting..." for
            2 seconds and then navigate to the dynamic store fallback (App Store for iOS, Play Store for Android).
          </li>
        </ul>
      </div>
    </div>
  );
}
