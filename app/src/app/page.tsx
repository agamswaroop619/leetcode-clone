// import "@/styles/global.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    Hello
    </>
  )
}
