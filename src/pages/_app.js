import "@/styles/globals.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

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
  return (
    <>
      {isLoading && <LoadingScreen className={isLoading ? "logoLoading" : ""} />}
      <ToastContainer stacked />
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      {/* <WhatsAppButton /> */}
      <Footer />
    </>
  )
}
