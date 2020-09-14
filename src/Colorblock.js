import React from 'react';

function Colorblock() {
   const [backgroundColor,setBackground]=React.useState("red")
   const [borderColor,setBorder]=React.useState("blue")

    const colorSwitch = ()=> {
        if(backgroundColor === "red") {
            setBackground("blue")
            setBorder("green")
        }
        if (backgroundColor === "blue") {
            setBackground("green")
            setBorder("red")
        }
        if (backgroundColor === "green") {
            setBackground("red")
            setBorder("blue")

        }
    }

    return <div style = {{ height:"100px", width:"120px", backgroundColor:backgroundColor, borderColor:borderColor}} onClick={()=>colorSwitch()}>
        </div>


    }

    export default Colorblock;
