"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <PawPrint size={64} className="text-blue-600 mb-6" />
      </motion.div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-medium text-gray-600"
      >
        Select a dog breed to begin exploring
      </motion.span>
    </motion.main>
  );
}