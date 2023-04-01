import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <nav
        id="ribbon"
        style={{
          background: 'rgba(255,255,255,.95)',
          backdropFilter: 'blur(10px)',
          lineHeight: '80px',
          textAlign: 'right',
          padding: '0px 30px',
        }}
      >
        <Link to='/'>
          <img src="Logo SMARTUP1.png" id="logo" style={{ height: 50, float: 'left' }}/>
        </Link>
        <Link to='/despre'>
          <button type="button" class="btn btn-md btn-primary" style={{margin:"0 10px"}}>Despre noi</button>
        </Link>
        <Link to='/sectiuni'>
          <button type="button" class="btn btn-md btn-primary" style={{margin:"0 10px"}}>Secțiuni SmartUP</button>
        </Link>
        <Link to='/oportunitati'>
          <button type="button" class="btn btn-md btn-primary" style={{margin:"0 10px"}}>Oportunitati</button>
        </Link>
        <a href="https://www.bursabinelui.ro/BursaBinelui/Proiecte/Abecedarul-Carierei"> 
          <button type="button" class="btn btn-md btn-primary" style={{margin:"0 10px"}}>Susține profesioniștii de mâine </button>
        </a>
      </nav>
    </>
  );
}
