// import "@/styles/global.css";
import React from "react";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
import Homescreen from "./homescreen";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Homescreen/>
    </>
  )
}
