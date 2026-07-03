'use client'
import HTMLFlipBook from "react-pageflip";
import Image from "next/image"; 
import { Page } from "./page";
import "./book.css";

export const Book = () => (
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
        <Image src="/invitation.png" fill={true} />
      </Page>
      <Page>Teste</Page>
      <Page>Teste</Page>
      <Page>Teste</Page>
  </HTMLFlipBook>
)
