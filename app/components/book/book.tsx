'use client'
import HTMLFlipBook from "react-pageflip";
import "./book.css";
import React from "react";

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });

export const Book = () => (
  <HTMLFlipBook
    width={350}
    height={500}
    maxShadowOpacity={0.5}
    showCover={true}
  >
      <PageCover>BOOK TITLE</PageCover>
      <Page number={1}>Lorem ipsum...</Page>
      <Page number={2}>Lorem ipsum...</Page>
      <Page number={3}>Lorem ipsum...</Page>
      <Page number={4}>Lorem ipsum...</Page>
      <Page number={5}>Lorem ipsum...</Page>
      <PageCover>THE END</PageCover>
  </HTMLFlipBook>
)
