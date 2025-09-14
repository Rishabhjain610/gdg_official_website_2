// 'use client';

// import { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Loader from "./Loader";

// export default function ClientLayoutWrapper({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3700);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Navbar />
//           {children}
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import { GridBackground } from "./GridBackground";

export default function ClientLayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <GridBackground>
        <div className="relative z-10 flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </GridBackground>
      <Footer />
    </>
  );
}
