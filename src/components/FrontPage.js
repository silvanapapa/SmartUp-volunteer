import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Wrapper from './Wrapper';
import Video_back from './video/smartup_abc.mp4';

export default function FrontPage() {
  return (
    <>
    <video autoPlay loop muted 
    style={{
      position: "absolute", 
      width: "100%", 
      left: "50%", 
      top: "50%", 
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"}}>
      <source src={Video_back} type="video/mp4"/>
    </video>
    <a class="btn-mobile" href="/despre">
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
    </>
  );
}