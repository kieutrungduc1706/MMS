import React, { useRef, useState, useEffect, useContext } from "react";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import '../Home/Home.css';
import TopBar from "../../components/TopBar/Navbar";
import { useLocation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import { AuthContext } from "../../AuthContext";

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
    const { userData } = useContext(AuthContext);
    // console.log(user_fullname)

    return (
        <div className="container">
            {/* <header style={{ zIndex: 100 }}> */}
                <TopBar />
            {/* </header> */}
            <div className="main-container">
                <Header data={userData?.session_id} user={userData?.user_type} />
                <div style={{position: 'fixed', zIndex:20}}>
                    <Feedback/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}


export default Home;