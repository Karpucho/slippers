import React, { useState } from 'react';
import {Button } from "@material-ui/core";


function ChooseSize({size, count, setSize}) {


  const chooseSize = (event) => {
    event.preventDefault();
    const btn = event.target.closest('button');
    setSize(btn.textContent);
    btn.style.color = 'green';
  
  }

  return (
    <>
    
    {(+count > 0) && <Button onClick={chooseSize} style={{padding: '0px'}} variant="outlined" color="default">{size}</Button>}

   </>

  );
}

export default ChooseSize;
