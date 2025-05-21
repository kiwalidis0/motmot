import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GreetingPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-light text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">
        Happy Monthsary my Babii! 💖
      </h1>

      <button
        onClick={() => navigate('/letter')}
        className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-soft hover:text-primary transition-all"
      >
        Tap to Read My Letter
      </button>
    </motion.div>
  );
}