import React from 'react'

const Boxes = ({styleArr}) => {
    console.log(styleArr);
  return(
    <div>
        {styleArr.map((style, index) => (
            <div
            key={index}
            style={{
                width: style.widht,
                height: style.height,
                backgroundColor: style.backgroungColor,
            }}
            ></div>
        ))}
    </div>
  )
        
}

export default Boxes
