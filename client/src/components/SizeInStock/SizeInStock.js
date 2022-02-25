import React, { useEffect } from 'react';

function ChooseSize({size, count}) {

  return (
    <div>
      {count > 0 ? <div>
        <span>размеры: {size}</span>
    <br />
    <span>осталось: {count}</span>
    <br />
    <br />
      </div> : <></>}
    
    </div>

    
  );
}

export default ChooseSize;
