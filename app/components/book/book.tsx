'use client'
import HTMLFlipBook from "react-pageflip";
import Image from "next/image"; 
import { Page } from "./page";
import "./book.css";
import Letter from "../letter/letter";
import { motion } from "framer-motion";
import { useState } from "react";

export const Book = () => {
  const [readingLetter, setReadingLetter] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <HTMLFlipBook
      width={350}
      height={500}
      maxShadowOpacity={0.5}
      showCover={true}
    >
        <Image fill={true} src="/cover.png" />
        <Page>
          <div style={{ padding: 50 }}>
            <h2 className="title" style={{ textAlign: 'center' }}>Bem-vinda.</h2>
            <p className="content" style={{marginTop: 50, textAlign: 'center'}}>Por favor, entre.</p>
            <p className="content" style={{marginTop: 20, textAlign: 'center'}}>O frio pertence ao lado de fora desta porta.</p>
            <p className="content" style={{marginTop: 20, textAlign: 'center'}}>Considere-se, desde já, minha mais estimada convidada.</p>
            <p className="content" style={{marginTop: 20, textAlign: 'center'}}>Enquanto permanecer nesta casa, nenhum mal a alcançará.</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/invitation.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-5 h-full">
            <p>Há muito tempo esta casa aguarda por alguém capaz de trazer calor a estas frias paredes.</p>
            <p>Anos de trabalho e de espera puseram à prova minha determinação, mas jamais foram capazes de diminuir o afeto que, silenciosamente, conservei.</p>
            <p>Venha comigo.</p>
            <p>Permita-me mostrar-lhe como cada cômodo desta residência foi preparado com o único propósito de lhe proporcionar conforto e acolhimento. E, se me for permitido confessar uma pequena esperança, desejo que tais esforços sejam suficientes para prolongar sua estadia pelo maior tempo possível.</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/hall.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-2 h-full">
            <p>Que doce ironia.</p>
            <p>Passei anos dedicado à leitura das histórias que compõem estas prateleiras, sonhando com aventuras capazes de escapar de suas páginas e conduzir-me, enfim, ao meu destino.</p>
            <p>E hoje...</p>
            <p>Disponho estas mesmas histórias com a esperança de que possam encantá-la e oferecer-nos abrigo durante as longas e frias noites de inverno.</p>
            <p>Aqui poderemos passar horas na companhia um do outro, repousando entre poesias e romances, enquanto lemos, conversamos e, talvez, descobrimos que algumas das mais belas histórias não foram escritas por grandes autores, mas vividas por aqueles que tiveram a coragem de escrevê-las juntos.</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/library.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-2 h-full">
            <p>Aqui, seu sono encontrará refúgio e aconchego.</p>
            <p>Seu repouso será sempre acompanhado de doces sonhos, e suas manhãs nascerão com a promessa de um dia mais feliz do que o anterior.</p>
            <p>Sob estes lençóis, poderemos compartilhar todo o nosso amor. Aqui confidenciaremos nossos medos, celebraremos nossas conquistas e imaginaremos, juntos, o futuro que desejamos construir.</p>
            <p>Pois este cômodo será o nosso templo; esta cama, nosso altar.</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/bed.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-2 h-full">
            <p>Neste jardim cultivaremos todas as ervas e temperos de que algum dia poderemos precisar.</p>
            <p>Sálvia, alecrim, funcho, rosas, beladona... basta dizer-me do que necessitas. Seja para a cozinha ou para uma antiga poção, encontrarás sempre os ingredientes mais frescos à tua disposição.</p>
            <p>Entre estas roseiras e sob a companhia da mesma lua, poderemos caminhar sem pressa, permitindo que o tempo cumpra seu único propósito verdadeiramente nobre: conceder-nos mais alguns instantes na presença um do outro.</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/garden.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-2 h-full">
            <p>Há, contudo, uma última parte desta casa que ainda não lhe mostrei.</p>
            <p>Confesso que adiei este momento o quanto pude.</p>
            <p>Durante todo este percurso procurei apresentar-lhe esta casa sob sua melhor luz.</p>
            <p>Cuidei para que cada cômodo estivesse em ordem, para que cada palavra encontrasse seu devido lugar e para que nada perturbasse sua visita.</p>
            <p>A verdade é que jamais fui aquilo que esta casa, à primeira vista, parecia prometer.</p>
            <p>Eu nasci sob outra lua.</p>
            <p>Mas se ainda conseguires ver beleza através dessas imperfeições, eu tenho uma última página que eu gostaria que visses...</p>
          </div>
        </Page>
        <Page>
          <div className="image">
            <Image src="/tower.png" fill={true} />
          </div>
        </Page>
        <Page>
          <div className="flex flex-col content px-12 justify-center gap-2 h-full">
            <p>Veja, meu amor.</p>
            <p>Eu não sou um artista.</p>
            <p>Não sou um poeta.</p>
            <p>Sou só um programador apaixonado tentando dar vazão aos sentimentos que você fez florescer em mim</p>
            <p>Espero que goste do pequeno poema que te escrevi ^^</p>
          </div>
        </Page>
        <Page>
          <motion.div
            initial={false}
            style={{
              transform: 'rotateZ(90deg)',
              position: 'absolute',
              top: 100,
              cursor: 'pointer'
            }}
            onClick={() => {
              if (!readingLetter) {
                setReadingLetter(true);
                setTimeout(() => {
                  setOpenLetter(true);
                }, 500);
              } else {
                setOpenLetter(false);
                setTimeout(() => {
                  setReadingLetter(false);
                }, 500);
              }
              
            }}
            animate={{
              rotateZ: readingLetter ? 0 : 90,
              left: readingLetter ? -250 : -70
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Letter isOpen={openLetter} />
          </motion.div>
        </Page>
    </HTMLFlipBook>
  ) 
}
