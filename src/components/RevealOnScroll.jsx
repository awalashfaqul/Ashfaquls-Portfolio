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


// import React, { useEffect, useRef } from "react";

// export const RevealOnScroll = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Add the class when element enters viewport
//           ref.current.classList.add("visible");
//         } else {
//           // Remove the class when element leaves viewport
//           ref.current.classList.remove("visible");
//         }
//       },
//       {
//         threshold: 0.2,        // 20% of element must be visible
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   );
// };

// import React, { useEffect, useRef, useState } from "react";

// export const RevealOnScroll = ({ children }) => {
//   const ref = useRef(null);
//   const [hasIntersected, setHasIntersected] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // add once and remember
//           node.classList.add("visible");
//           setHasIntersected(true);
//         } else {
//           // optional: remove if you want it to fade when leaving
//           // node.classList.remove("visible");
//         }
//       },
//       {
//         threshold: 0.1,           // fire earlier
//         rootMargin: "0px 0px -10% 0px", // less aggressive bottom margin
//       }
//     );

//     observer.observe(node);

//     return () => observer.disconnect();
//   }, []);

//   // ✅ If user lands mid-page (mobile deep-link) ensure it shows
//   useEffect(() => {
//     if (!hasIntersected && ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom > 0) {
//         ref.current.classList.add("visible");
//       }
//     }
//   }, [hasIntersected]);

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        } else {
          node.classList.remove("visible");
        }
      },
      {
        threshold: 0.1,                 // reveal as soon as 10% is visible
        rootMargin: "0px 0px -10% 0px",  // small bottom margin so it triggers early
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // ✅ initial check so it’s correct if already in view at page load
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add("visible");
    } else {
      node.classList.remove("visible");
    }
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
