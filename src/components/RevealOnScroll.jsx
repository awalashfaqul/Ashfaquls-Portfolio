// import React, { useEffect, useRef, useState } from "react";


// export const RevealOnScroll = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   const handleScroll = () => {
//     if (ref.current) {
//       const { top } = ref.current.getBoundingClientRect();
//       if (top < window.innerHeight) {
//         setIsVisible(true);
//         window.removeEventListener("scroll", handleScroll);
//       }
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           ref.current.classList.add("visible");
//         }
//     }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
    
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => observer.disconnect();
//   },);

//   return (
//     <div
//       ref={ref}
//       className= "reveal"
//     >
//       {children}
//     </div>
//   );
// };


import React, { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the class when element enters viewport
          ref.current.classList.add("visible");
        } else {
          // Remove the class when element leaves viewport
          ref.current.classList.remove("visible");
        }
      },
      {
        threshold: 0.2,        // 20% of element must be visible
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
