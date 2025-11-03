import React, { useState } from 'react';
import parrot from './download.jpeg'; 

function ImageManipulation() {
  const [parrotHeight, setParrotHeight] = useState(200);
  const [parrotWidth, setParrotWidth] = useState(300);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      <h2>Image Manipulation</h2>

      <div>
        <img 
          src={parrot}  
          height={parrotHeight}  
          width={parrotWidth}  
          alt="Parrot"
          style={{ border: '2px solid green' }}
        />
      </div>

      <div>
        <button onClick={() => setParrotHeight(parrotHeight + 50)}>Increase Height</button>
        <button onClick={() => setParrotHeight(parrotHeight - 50)}>Decrease Height</button>
        <button onClick={() => setParrotWidth(parrotWidth + 50)}>Increase Width</button>
        <button onClick={() => setParrotWidth(parrotWidth - 50)}>Decrease Width</button>
        <button onClick={setColor}>Change Background Color</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
