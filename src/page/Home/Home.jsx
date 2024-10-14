import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import '../Home/Home.css';
import TopBar from "../../components/TopBar/Navbar";
import { useLocation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";

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

const Home = () => {
    const location = useLocation();
    const { session_id, user_fullname, user_type } = location.state || {}; // 

    // console.log(user_fullname)

    return (

        <div className="container">
            <header style={{ zIndex: 100 }}>
                <TopBar data={user_fullname} />
            </header>
            <div className="main-container">
                <Header data={session_id} user={user_type} />
                <div style={{position: 'fixed', zIndex:20}}>
                    <Feedback/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}


export default Home;