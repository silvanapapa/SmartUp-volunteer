import React from "react";
import Membru from "./Membru";

export default function Team() {
  return (
    <>
        <div className="echipa">
          <div class="container">
            <h1 style={{textAlign: "center", margin:"80px 0px"}}>Echipa de management</h1>
              <div class="row">
              <Membru profil="https://www.facebook.com/argeseanu.andreea.9" poza="./echipa/Andreea.png" nume="Andreea Argeșeanu" functie="Președinte OSUT" /> 
              <Membru profil="https://www.facebook.com/nitu.denisa.7" poza="./echipa/Denisa.png" nume="Denisa Nițu" functie="Secretar General" /> 
              <Membru profil="https://www.facebook.com/alex.alexuta.39" poza="./echipa/Alexandra.png" nume="Alexandra Gomoi" functie="Responsabil PR" /> 
              <Membru profil="https://www.facebook.com/andreeasilvana.papa" poza="./echipa/Silvana.png" nume="Silvana Papa" functie="Responsabil IT" />
              <center>
                <Membru profil="https://www.facebook.com/profile.php?id=100007027607264" poza="./echipa/Stefan.png" nume="Ștefan Plăcintă" functie="Responsabil Imagine" /> 
              </center>
              </div>
          </div>
        </div>
    </>
  );
}
