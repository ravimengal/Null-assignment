import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    position: fixed; 
    top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
`;

function Loader() {
 
 const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="sweet-loading">
      <ClipLoader isLoading={isLoading}  css={override} size={200} />
    </div>
  );
}

export default Loader;
