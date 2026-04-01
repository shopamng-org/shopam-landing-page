"use client";

import Link from "next/link";

/**
 * Test Deep Links Page
 * Allows manual testing of deep linking redirection logic.
 */
export default function TestDeepLinksPage() {
  const testData = {
    sellerId: "8392",
    referralId: "7c89f5",
    productId: "9901",
    orderId: "ord-12345",
  };

  const links = [
    { title: "Seller Profile", path: `/profile/${testData.sellerId}`, appLink: `shopam://seller-profile/${testData.sellerId}` },
    { title: "Referral", path: `/ref/${testData.referralId}`, appLink: `shopam://register?referral=${testData.referralId}` },
    { title: "Product", path: `/product/${testData.productId}`, appLink: `shopam://product/${testData.productId}` },
    { title: "Home Dashboard", path: "/home", appLink: "shopam://home" },
    { title: "Buyer Order", path: `/order/buyer/${testData.orderId}`, appLink: `shopam://order/buyer/${testData.orderId}` },
    { title: "Seller Order", path: `/order/seller/${testData.orderId}`, appLink: `shopam://order/seller/${testData.orderId}` },
    { title: "Account", path: "/account", appLink: "shopam://account" },
    { title: "Wallet", path: "/wallet", appLink: "shopam://wallet" },
    { title: "Products List", path: "/products", appLink: "shopam://products" },
    { title: "Seller Products", path: "/seller/products", appLink: "shopam://seller/products" },
    { title: "Create Seller Product", path: "/seller/products/new", appLink: "shopam://seller/products/new" },
    { title: "Edit Seller Product", path: `/seller/products/edit/${testData.productId}`, appLink: `shopam://seller/products/edit/${testData.productId}` },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 pt-28">
      <h1 className="text-3xl font-bold mb-6">Deep Link Test Page</h1>
      <p className="mb-8 text-gray-600">
        Use the buttons below to test the redirection pages. These will attempt
        to open the Shopam mobile app or fallback to the Play Store.
      </p>

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
            2 seconds and then navigate to the Google Play Store.
          </li>
        </ul>
      </div>
    </div>
  );
}
