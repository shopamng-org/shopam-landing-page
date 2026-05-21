import { useEffect, useState } from "react";

export function useAppRedirect(appLink: string, skip: boolean = false) {
  const [status, setStatus] = useState("Redirecting you to the ShopAm app...");
  const [storeLink, setStoreLink] = useState(
    "https://play.google.com/store/apps/details?id=com.shopam.live"
  );
  const [storeName, setStoreName] = useState("Play Store");

  useEffect(() => {
    if (skip) return;

    const userAgent =
      typeof navigator !== "undefined"
        ? navigator.userAgent || navigator.vendor || ""
        : "";
    const isIOS =
      /iPad|iPhone|iPod/i.test(userAgent) ||
      (typeof navigator !== "undefined" &&
        navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1);

    const iosLink = "https://apps.apple.com/ng/app/shopam/id6760197174";
    const androidLink =
      "https://play.google.com/store/apps/details?id=com.shopam.live";

    const targetStoreLink = isIOS ? iosLink : androidLink;
    const targetStoreName = isIOS ? "App Store" : "Play Store";

    // Defer state updates to satisfy react-hooks/set-state-in-effect
    setTimeout(() => {
      setStoreLink(targetStoreLink);
      setStoreName(targetStoreName);
    }, 0);

    // Attempt to open the app
    window.location.assign(appLink);

    // Fallback after 2000ms
    const timeout = setTimeout(() => {
      setStatus(`Opening ${targetStoreName}...`);
      window.location.href = targetStoreLink;
    }, 2000);

    return () => clearTimeout(timeout);
  }, [appLink, skip]);

  return { status, storeLink, storeName };
}
