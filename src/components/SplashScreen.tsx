// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "../assets/styles/SplashScreen.css";

// const SplashScreen = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("Girl");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const userName = urlParams.get("name") || "Girl";
//     setName(userName);

//     setTimeout(() => {
//       navigate("/love-question");
//     }, 3000);
//   }, [navigate]);

//   return (
//     <div className="splash-screen flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-red-500 overflow-hidden">
//       <motion.h1
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="text-white text-5xl md:text-7xl font-extrabold z-10"
//       >
//         Hi {name}! ❤️
//       </motion.h1>

//       <div className="floating-hearts"></div>
//     </div>
//   );
// };

// export default SplashScreen;
