import React from 'react';
import Rectangle from "./Rectangle";
import Block from "./Block";
import Colorblock from "./Colorblock";



function App(){
    return <div>
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>

      <Block borderColor={"pink"} backgroundColor={"red"}/>
      <Block borderColor={"red"} backgroundColor={"pink"}/>
      <Block borderColor={"grey"} backgroundColor={"purple"}/>

      <Colorblock/>
      <Colorblock/>
      <Colorblock/>
    </div>
}

export default App;
