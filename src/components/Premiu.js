import React from 'react';

export default function Premiu(props) {
  return (
    <>
      <div
        class="col-md-12 col-lg-4 premii"
        style={{
          marginBottom: '40px',
        }}
      >
        <img src="img/prize.png" class="prize" />
        {props.content}
      </div>
    </>
  );
}
