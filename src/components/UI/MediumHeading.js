import React from "react";
 const MediumHeading = ({text,style}) => {
    return(
        <p 
            style={style}
               className='font-25 capitalize ls-1 textColor bold-500 text-center'>{text}
        </p>
    )
 }
 export default MediumHeading