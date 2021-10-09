import "../components/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

function Website({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("QXIMCIGI", {
      includedDomains: ["georgemaine.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default Website;
