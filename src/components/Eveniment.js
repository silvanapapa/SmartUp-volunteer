import React from 'react';

export default function Eveniment(props) {
  return (
    <>
      <div class="col-lg-12">
        <div
          class="evenimente"
          style={{
            padding: '25px 0px',
            borderBottom: '1px solid #ddd',
            overflow: 'hidden',
          }}
        >
          <div className="poza-om">
            <img
              src={props.poza}
              style={{ width: '100%', borderRadius: '2%', textAlign:"center", verticalAlign:"middle"}}
            />
          </div>
          <p style={{ fontSize: '.9rem' }}>{props.descriere1} </p>
                 
          </div>
        </div>
    </>
  );
}
