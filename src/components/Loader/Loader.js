import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//     position: fixed; 
//     top: 50%;
//      left: 50%;
//      transform: translate(-50%, -50%);
// `;

function Loader() {
 
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
     
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader color={color}  css={css`
    position: fixed; 
    top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
`} size={300} />
    </div>
  );
}

export default Loader;
