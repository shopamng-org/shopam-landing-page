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
  };

  return (
    <div className="max-w-4xl mx-auto p-8 pt-28">
      <h1 className="text-3xl font-bold mb-6">Deep Link Test Page</h1>
      <p className="mb-8 text-gray-600">
        Use the buttons below to test the redirection pages. These will attempt
        to open the Shopam mobile app or fallback to the Play Store.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Seller Profile Test */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">
            Seller Profile
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Path:{" "}
            <code className="bg-gray-100 p-1">
              /profile/{testData.sellerId}
            </code>
          </p>
          <Link
            href={`/profile/${testData.sellerId}`}
            className="block w-full py-2 px-4 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
          >
            Test Profile Link
          </Link>
          <div className="mt-4 text-xs text-gray-400">
            Maps to:{" "}
            <code className="break-all">
              shopam://seller-profile/{testData.sellerId}
            </code>
          </div>
        </div>

        {/* Referral Test */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">
            Referral
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Path:{" "}
            <code className="bg-gray-100 p-1">/ref/{testData.referralId}</code>
          </p>
          <Link
            href={`/ref/${testData.referralId}`}
            className="block w-full py-2 px-4 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
          >
            Test Referral Link
          </Link>
          <div className="mt-4 text-xs text-gray-400">
            Maps to:{" "}
            <code className="break-all">
              shopam://register?referral={testData.referralId}
            </code>
          </div>
        </div>

        {/* Product Test */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">
            Product
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Path:{" "}
            <code className="bg-gray-100 p-1">
              /product/{testData.productId}
            </code>
          </p>
          <Link
            href={`/product/${testData.productId}`}
            className="block w-full py-2 px-4 bg-orange-500 text-white text-center rounded-lg hover:bg-orange-600 transition-colors"
          >
            Test Product Link
          </Link>
          <div className="mt-4 text-xs text-gray-400">
            Maps to:{" "}
            <code className="break-all">
              shopam://product/{testData.productId}
            </code>
          </div>
        </div>
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
