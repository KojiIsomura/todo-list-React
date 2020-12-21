/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowflag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowflag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowflag(true);
    } else {
      faceShowFlag && setFaceShowflag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">aaaaa</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(´・ω・｀)</p>}
    </>
  );
};

export default App;
