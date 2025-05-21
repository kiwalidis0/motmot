import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

export default function LetterPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-soft"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
     
    {showConfetti && <Confetti />}

    <h1 className="text-2xl font-semibold mb-6 text-header">
        Happy Motmottt❤️
    </h1>
    
    { /* 
    <div className="w-full max-w-md mb-10">
        <Swiper spaceBetween={20} slidesPerView={1} loop>
            <SwiperSlide>
            <img src="/gunther.png" alt="Memory 1" className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="/your-photo-2.jpg" alt="Memory 2" className="rounded-xl shadow-lg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="/your-photo-3.jpg" alt="Memory 3" className="rounded-xl shadow-lg" />
            </SwiperSlide>
        </Swiper>
    </div>
    */}

    <p className="text-lg max-w-xl mb-8 text-white leading-relaxed">
        <Typewriter
            words={[
            "Good Morning Babi!❤️",
            "Happy Motmot!!!",
            "You will probably read this kagising mo later or kauwi mo nyehehe\nNonetheless, I'm super proud of you!",
            "For doing your very best!\nFor taking your time to talk and update me despite your super super stressful schedule",
            "Kaya yan Babi!! You can do thissss!!!🌟",
            "Thank you so much Babi!\nI love you very very much❤️❤️",
            "Hehehehehehe diko mahanap papel ko kaya ito nalang ginawa ko as an alternative sa letter NYAHAHAHA\nDo you want to grab Jabi or McDo kauwi mo or sa Sun nalang? Me craving fries en all"
            ]}
            loop={false}
            cursor
            typeSpeed={65}
            deleteSpeed={0}
        />
    </p>

    <p className="text-xl font-semibold mt-8 animate-bounce">
     Jabi or McDo?
    </p>
    <div className="mt-4 flex gap-4">
    <button
        onClick={() => alert("Yay! Let's get Jabi! 🍗")}
        className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-header transition"
    >
        Jabi 🍗
    </button>
    <button
        onClick={() => alert("McDo it is! 🍔")}
        className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-header transition"
    >
        McDo 🍔
    </button>
    </div>

    </motion.div>
  );
}