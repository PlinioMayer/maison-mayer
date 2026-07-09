'use client'

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react"

const bookAudio = new Audio('/book.mp3');
const ligthingAudio = new Audio('/lighting.wav');

export const Introducao = ({ children }: { children: ReactNode }) => {
  const [introduzido, setIntroduzido] = useState(false);
  const [iluminado, setIluminado] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      bookAudio.play();
    }, 500);

    setTimeout(() => {
      ligthingAudio.play();
    }, 1500);

    setTimeout(() => {
      setIluminado(true);
    }, 5500);

    setTimeout(() => {
      setIntroduzido(true);
    }, 6500);
  }, [setIluminado, setIntroduzido]);

  if (!introduzido) {
    
  }

  return (
      <>
        {!introduzido && <motion.div
          style={{ position: 'absolute', inset: 0, backgroundColor: 'black', zIndex: 1 }}
          animate={{ opacity: iluminado ? 0 : 1 }}
          transition={{ duration: 1 , ease: "easeInOut" }}
        />}

        {children}
      </>
    )

  return ;
}