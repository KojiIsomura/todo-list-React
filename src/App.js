import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">aaaaa</ColorfulMessage>
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
