
import React from 'react'

function InfoNumber(props) {
    return (
    <li style={{display: props.value == "" || props.value == " " || props.value == null ? 'none' : 'block', textAlign: 'justify'}}>
        <span style={{fontWeight:'700', color:"#fff"}}>{props.title}</span>
        <span style={{whiteSpace: 'pre-line', color:"#fff"}}>{props.value}</span>
    </li>
)}

export default InfoNumber