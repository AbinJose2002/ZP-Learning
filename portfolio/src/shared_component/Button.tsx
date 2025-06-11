import React, { type CSSProperties } from 'react'

type Props = {
    classname?:string;
    value?:string;
    style?:React.CSSProperties;
}

const Button = (props: Props) => {
  return (
    <div>
        <button className={props.classname} style={props.style} >{props.value}</button>
    </div>
  )
}

export default Button