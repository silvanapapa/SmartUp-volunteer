import React from "react";

export default function Membru(props) {
  return (
    <>
        <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="om">
                <img src={props.poza} class="persoana-echipa p2" />
                <a href={props.profil}>
                <h4>{props.nume}</h4></a>
                   {props.functie}
                
            </div>
        </div>
    </>
  );
}
