'use client'

import { CSSProperties, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Letter({isOpen}: { isOpen: boolean }) {
  const [openFlaps, setOpenFlaps] = useState(false);
  const [openSeal, setOpenSeal] = useState(false);
  const [openedSeal, setOpenedSeal] = useState(false);

  useEffect(() => {
    if(isOpen && !openSeal) {
      setTimeout(() => {
        setOpenSeal(true);
      }, 0);

      setTimeout(() => {
        setOpenedSeal(true);
      }, 2000);
    }
  }, [setOpenSeal, setOpenedSeal, isOpen, openSeal]);

  useEffect(() => {
    if(isOpen) {
      setTimeout(() => {
          setOpenFlaps(true);
        }, openedSeal ? 0 : 1000);
    } else {
      setTimeout(() => {
          setOpenFlaps(false);
        }, 0);
    }
  }, [setOpenFlaps, openedSeal,  isOpen]);

  return (
      <div style={styles.envelopeWrapper}>
        <motion.img
          src="/seal.png"
          style={styles.seal}
          animate={{ left: openSeal ? 2000 : 205 }}
          transition={{ duration: 2 , ease: "easeInOut" }}
        /> 
        
        <motion.div
          style={styles.flapTop}
          animate={{ rotateX: openFlaps ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
          initial={false}
          style={{...styles.flapTopInside, ...styles.padding, paddingTop: 30}}
          animate={{ rotateX: openFlaps ? 0 : 180 }}
          transition={{ duration: 0.5 , ease: "easeInOut" }}
        >
            <p>
              Eu não escrevo<br/>
              Malgrado tudo que vivi,<br/>
              nunca escrevi,<br/>
              nunca registrei o que senti<br/>
            </p>

            <p style={{marginTop: 10}}>
              As ondas que castigaram meu casco<br/>
              Os ventos que ameaçaram meu mastro<br/>
            </p>
        </motion.div>

        <div style={{...styles.content, ...styles.padding}}>
            <p>
              Mensagens de um destino escasso<br/>
              Adornos para meu embaraço<br/>
            </p>

            <p style={{marginTop: 10}}>
              Falta-me poesia, eu pensava<br/>
              E nada que me ocorria me bastava<br/>
              Resignado, eu aguardava<br/>
              Cansado, eu sonhava<br/>
            </p>

            <p style={{marginTop: 10}}>
              Mas esses mesmos ventos<br/>
              Nada queriam do meu sofrimento<br/>
              Impetuosos e indecifráveis<br/>
              Carregavam-me para destinos mais amáveis<br/>
              Mares inexplorados<br/>
              Sentimentos nunca observados!<br/>
              De minha parte?<br/>
              Coragem!<br/>
            </p>
            
            <p style={{marginTop: 10}}>
              Se nunca escrevi<br/>
            </p>
        </div>

        <motion.div
          initial={false}
          style={{...styles.flapBottomInside, ...styles.padding}}
          animate={{ rotateX: openFlaps ? 0 : 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p>
            Hoje entendi<br/>
            Nao faltava-me poesia,<br/>
            coragem ou energia<br/>
            Foi meu coração quem me disse<br/>
            A mim, só faltava Clarice<br/>
            Faço, então, a pergunta mais esperada:<br/>
            Quer ser minha namorada?<br/>
          </p>
        </motion.div>

        <motion.div
          style={styles.flapBottom}
          animate={{ rotateX: openFlaps ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  seal: {
    position: 'absolute',
    top: 100,
    width: 100,
    zIndex: 2
  },
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    cursor: "pointer"
  },
  padding: {
    paddingLeft: 132
  },
  envelopeWrapper: {
    position: "relative",
    width: "500px",
    height: "300px",
    fontSize: 12
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'justify',
    overflow: 'hidden',
    backgroundImage: "url(/letter-center.png)",
    backgroundSize: "cover",
  },
  flapTop: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundImage: "url(/letter-bottom.png)",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    transformOrigin: "top",
    top: 0,
    backfaceVisibility: 'hidden',
    zIndex: 1
  },
  flapTopInside: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundImage: "url(/letter-top.png)",
    backgroundSize: "cover",
    transformOrigin: "bottom",
    top: '-50%',
    backfaceVisibility: 'hidden',
    zIndex: 1
  },
  flapBottom: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundImage: "url(/letter-top.png)",
    backgroundSize: "cover",
    transformOrigin: "bottom",
    bottom: 0,
    backfaceVisibility: 'hidden',
    zIndex: 1
  },
  flapBottomInside: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundImage: "url(/letter-bottom.png)",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    transformOrigin: "top",
    bottom: '-50%',
    backfaceVisibility: 'hidden',
    zIndex: 1
  }
};