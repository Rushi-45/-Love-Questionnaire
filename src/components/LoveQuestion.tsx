import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../assets/styles/LoveHearts.css";
import yesSound from "../assets/sounds/yes-sound.wav";

const LoveQuestion = () => {
  const [question, setQuestion] = useState("Do you love me ?");
  const [showEffects, setShowEffects] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [loveTheme, setLoveTheme] = useState(false);
  const [emoji, setEmoji] = useState("❓");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    const audio = new Audio(yesSound);
    audio.play();
    setQuestion("I Love You Too :)");
    setShowEffects(true);
    setLoveTheme(true);
    setEmoji("😍");
    createHeartConfetti();
    setTimeout(() => setShowEffects(false), 4000);
  };

  const handleNoHover = () => {
    if (wrapperRef.current && noBtnRef.current) {
      if (!loveTheme) setEmoji("🥺");
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const noBtnRect = noBtnRef.current.getBoundingClientRect();
      const i = Math.floor(
        Math.random() * (wrapperRect.width - noBtnRect.width)
      );
      const j = Math.floor(
        Math.random() * (wrapperRect.height - noBtnRect.height)
      );
      setNoBtnPosition({ x: i, y: j });
    }
  };
  const handleYesHover = () => {
    if (wrapperRef.current && noBtnRef.current) {
      if (!loveTheme) setEmoji("🤩");
    }
  };

  const createHeartConfetti = () => {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }, i * 100);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex items-center justify-center min-h-screen transition-all duration-700 ${
        loveTheme
          ? "bg-gradient-to-r from-red-300 to-pink-500"
          : "bg-purple-600"
      }`}
    >
      <motion.div
        ref={wrapperRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[600px] h-[280px] bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-7xl text-purple-600 border-4 border-transparent outline outline-2 outline-purple-600 rounded-full p-4"
        >
          {emoji}
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ scale: showEffects ? 1.3 : 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.6,
            ease: "easeOut",
          }}
          className={`text-3xl mt-4 transition-all duration-700 ${
            loveTheme ? "text-red-600" : "text-purple-600"
          }`}
        >
          {question}
        </motion.h2>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          className="relative w-full flex justify-center mt-4"
        >
          <motion.button
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0px 0px 0px rgba(255, 0, 127, 0.0)",
                "0px 0px 15px rgba(255, 0, 127, 0.8)",
                "0px 0px 0px rgba(255, 0, 127, 0.0)",
              ],
            }}
            transition={{
              duration: 1.5, // Time for one cycle
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Smooth back and forth
            }}
            onClick={handleYesClick}
            onMouseOver={handleYesHover}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 0px 20px rgba(255, 0, 127, 1)",
            }}
            whileTap={{ scale: 0.9 }}
            className="w-36 h-10 text-lg font-semibold bg-purple-600 text-white rounded-full border-2 border-purple-600 shadow-md mr-12 transition-all"
          >
            Yes
          </motion.button>

          <motion.button
            ref={noBtnRef}
            onMouseOver={handleNoHover}
            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-36 h-10 text-lg font-semibold text-purple-600 bg-white rounded-full border-2 border-purple-600 shadow-md"
          >
            No
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoveQuestion;
