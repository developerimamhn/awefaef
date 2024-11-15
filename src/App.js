import { BrowserRouter} from "react-router-dom";
// import React, { lazy, Suspense } from "react";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
// const LazyComponent = lazy(() => import("./Component"));
// const MemoizedComponent = React.memo(LazyComponent);

export default function App() {
  return (
    <BrowserRouter>
    <div className="">
      <div className="bg-black">
        <Navbar/>
      </div>
    </div>
      {/* <Suspense fallback={<div className="text-[#fff] w-[100vh] h-[100vh] flex justify-center items-center text-[25px]">Loading...</div>}>
          <MemoizedComponent />
        </Suspense> */}
        <Footer/>
    </BrowserRouter>
    
  )
}