import { useEffect } from "react";
import "../styles/globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Suppress React DevTools message
    const originalInfo = console.info;
    console.info = (...args) => {
      const message = args.join(" ");
      if (message.includes("Download the React DevTools") || message.includes("react.dev/link/react-devtools")) {
        return;
      }
      originalInfo.apply(console, args);
    };

    return () => {
      console.info = originalInfo;
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}