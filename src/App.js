import { BrowserRouter} from "react-router-dom";
import React, { lazy, Suspense } from "react";
const LazyComponent = lazy(() => import("./Component"));
const MemoizedComponent = React.memo(LazyComponent);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-[#fff] w-[100vh] h-[100vh] flex justify-center items-center text-[25px]">Loading...</div>}>
          <MemoizedComponent />
        </Suspense>
    </BrowserRouter>
    
  )
}