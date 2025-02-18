import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import { useLocation } from "react-router-dom";
import TopBar from "../../components/TopBar/Navbar";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #ddd',
    boxShadow: 24,
    p: 4,
};

export const Details = (props) => {
  console.log(props)
    const state = useLocation();
  console.log(state.state);
    return (
      <div>
        <TopBar/>
        <Header/>
        <div>
            <p>Chi tiết</p>
        </div>
      </div>
    )
}


export default Details;