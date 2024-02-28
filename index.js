import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Main from "./src/Main";


const container = document.getElementById('app');
const root = createRoot(container);

const Index = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Index

root.render(<Index/>)
