import React from "react";
import './style.css';


export const SchemeColor = ({colorName}) => {
return (
<div className = 'scheme-color'>
    <div className = 'color__name' style={{ backgroundColor: {colorName} }} >{colorName}</div>
</div>
)
}