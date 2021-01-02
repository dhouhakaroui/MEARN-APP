import React from "react";
import spinner from '../res/spinner.gif'
const Spinner = () => {
  return (
    <>
      <img src={spinner}
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt="Loading..."
      />
      <h2 style={{textAlign:"center"}}>loading...</h2>
    </>
  );
}

export default Spinner;