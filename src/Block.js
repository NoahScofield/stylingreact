import React from 'react';

function Block(props) {
    const [borderColor] = React.useState(props.borderColor)
    const [backgroundColor] = React.useState(props.backgroundColor)

    return <div style={{
        height: "100px",
        width: "100px",
        borderColor: borderColor,
        borderStyle: "solid",
        borderweight: "2px",
        backgroundColor: backgroundColor
    }}>
    </div>
}
export default Block;