import { useEffect, useState } from "react";
import "@/styles/globals.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "@/components/ScrollToTop";
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-loading-skeleton/dist/skeleton.css'

const GA_MEASUREMENT_ID = 'G-KS4PTC6RGY';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true) 
      document.body.classList.add("no-scroll")
    }
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.classList.remove("no-scroll")
      }, 500)
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events])

  // Google Analytic
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {isLoading && <LoadingScreen className={isLoading ? "logoLoading" : ""} />}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ToastContainer stacked />
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      {/* <WhatsAppButton /> */}
      <Footer />
    </>
  )
}
