// import { createRef, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
// import {
//   Geography_Title,
//   Geography_Description,
//   Alphabet_Title,
//   Alphabet_Description,
//   Culture_Title,
//   Culture_Description,
// } from "../constants";

// gsap.registerPlugin(TextPlugin);

// const AnimatedTextGroup = () => {
//   const texts = [
//     Geography_Title,
//     Geography_Description,
//     Alphabet_Title,
//     Alphabet_Description,
//     Culture_Title,
//     Culture_Description,
//   ];

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const textRefs = useRef([]);

//   useEffect(() => {
//     textRefs.current.forEach((textRef, index) => {
//       if (inView) {
//         gsap.to(textRef, {
//           stagger: 0.02,
//           duration: 3,
//           delay: 1,
//           ease: "power3.inOut",
//           opacity: 1,
//           text: {
//             value: textRef.textContent,
//             delimiter: " ",
//           },
//         });
//       }
//     });
//   }, [inView]);

//   const textConstants = Object.values(texts);
//   if (!textConstants || textConstants.length === 0) {
//     return null;
//   }

//   return (
//     <div ref={ref}>
//       {texts.map((text, index) => {
//         textRefs.current[index] = textRefs.current[index] || createRef();
//         return (
//           <motion.div
//             key={index}
//             ref={(el) => (textRefs.current[index] = el)}
//             initial={{ opacity: 0 }}
//             style={{ marginBottom: "20px" }}
//           >
//             <p ref={ref}>{text}</p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default AnimatedTextGroup;
