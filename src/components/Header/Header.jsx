import { Link } from 'react-router-dom';
import '../Header/Header.css';
import React, { useState } from 'react';
import listApi from '../../services/api';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const logo = require('../../../src/images/logo/logo.png');

const icon1 = 'https://simphongthuy.vn/images/congiap/1.png.webp'
const icon2 = 'https://simphongthuy.vn/images/congiap/2.png.webp'
const icon3 = 'https://simphongthuy.vn/images/congiap/3.png.webp'
const icon4 = 'https://simphongthuy.vn/images/congiap/4.png.webp'
const icon5 = 'https://simphongthuy.vn/images/congiap/5.png.webp'
const icon6 = 'https://simphongthuy.vn/images/congiap/6.png.webp'
const icon7 = 'https://simphongthuy.vn/images/congiap/7.png.webp'
const icon8 = 'https://simphongthuy.vn/images/congiap/8.png.webp'
const icon9 = 'https://simphongthuy.vn/images/congiap/9.png.webp'
const icon10 = 'https://simphongthuy.vn/images/congiap/10.png.webp'
const icon11 = 'https://simphongthuy.vn/images/congiap/11.png.webp'
const icon12 = 'https://simphongthuy.vn/images/congiap/12.png.webp'


const ItemConGiap = ({ href, title, img, data, onClick }) => {
    return (
        <div className='item-congiap' style={{ display: 'flex', flex: "0 0 auto", justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <Link to={{
                pathname: `${href}`,
                state: { id: 1, name: 'sabaoon', shirt: 'green' } // your data array of objects
            }}>
                <img style={{ maxWidth: "100%" }} src={img} alt={title} title={title} width="80px" height="83px" />
            </Link>
        </div>
    )
}

const HeaderMenu = ({ name, href }) => {
    return (
        <div className='header-menu'>
            <a href={href} >{name}</a>
        </div>
    )
}

const styleMenu = {
    display: 'block',
    width: "25%"
}



const Header = ({ onClick }) => {
    const [tel, setTel] = useState("")

    function handleSearch({ tel }) {
        console.log("check", tel)
        fetch(listApi.checkNumber,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "tel_number": tel,
                })
            }).then((response) => response.json()

            ).then((response) => {
                console.log("check: ", response);
                if (response.code == 200) {
                    console.log(response)
                }else{
                    alert(response.desc)
                }
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="topHeader">
                    <div>
                        <a href="/" aria-label="Sim phong thủy - khai thông khí vận, sức khỏe, tài lộc" className="d-flex justify-content-center">
                            <img src={logo} alt="Sim phong thủy - khai thông khí vận, sức khỏe, tài lộc" className="d-none d-md-block" width="441px" height="83px" />
                        </a>
                    </div>
                    <div className="header-slogan">
                        <h4>SIM PHONG THỦY - HỢP MỆNH KÍCH TÀI DANH LỢI ĐỀ HUỀ - CÁT TƯỜNG, NHƯ Ý</h4>
                    </div>
                </div>
                <div className='menuContainer' style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <div className="menu" style={styleMenu} >
                        <HeaderMenu name="Sim thăng quan tiến chức" />
                        <HeaderMenu name="Sim phong thủy tài lộc" />
                        <HeaderMenu name="Sim kích gia đạo tình duyên" />
                        <HeaderMenu name="Sim hóa giải vận hạn" />
                        <HeaderMenu name="Chấm điểm sim phong thủy" />
                    </div>
                    <div className="formCenter" style={{ width: '50%' }} >
                        <div className="titleForm">
                            <p style={{ fontSize: '40px', margin: '10px 0 -10px' }}>Nhập Thông Tin</p>
                            <p style={{ fontSize: '30px', margin: '0 0 10px' }}> bất kì để tra cứu</p>
                            <p>( CCCD, SĐT, Biển số xe, ...)</p>
                            <p>
                                {/* Chọn : */}
                                <label>
                                    <input type="radio" name="myRadio" value="tel" />
                                    Số điện thoại
                                </label>
                                <label>
                                    <input type="radio" name="myRadio" value="CCCD" />
                                    CCCD
                                </label>
                                <label>
                                    <input type="radio" name="myRadio" value="moto" />
                                    Biển số xe
                                </label>
                            </p>
                        </div>
                        <Form
                            name="tel_search"
                            className="search-form"
                            onFinish={handleSearch}
                        >
                            <div className="inputValue">
                                <div className="formDetails">
                                <Form.Item
                                name="tel"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại',
                                    },
                                ]}
                            >
                                <Input style={{ border: 'none', outline: 'none', height: '30px', width: '200px', padding: 10 }} placeholder="Số điện thoại" />
                            </Form.Item>
                                </div>
                                <Form.Item>
                                <div className="text-center">
                                    <button value="Submit" type="submit">Tra cứu thông tin</button>
                                </div>
                            </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div className="menu" style={styleMenu} >
                        <HeaderMenu name="Sim hợp mệnh Kim" />
                        <HeaderMenu name="Sim hợp mệnh Mộc" />
                        <HeaderMenu name="Sim hợp mệnh Thủy" />
                        <HeaderMenu name="Sim hợp mệnh Hỏa" />
                        <HeaderMenu name="Sim hợp mệnh Thổ" />
                    </div>
                </div>
            </div>
            <div className="congiap">
                <div className="container">
                    <div className="row">
                        <ItemConGiap href='/Details' data="1" title="Tý" img={icon1} />
                        <ItemConGiap title="Sửu" img={icon2} />
                        <ItemConGiap title="Dần" img={icon3} />
                        <ItemConGiap title="Mão" img={icon4} />
                        <ItemConGiap title="Thìn" img={icon5} />
                        <ItemConGiap title="Tị" img={icon6} />
                        <ItemConGiap title="Ngọ" img={icon7} />
                        <ItemConGiap title="Mùi" img={icon8} />
                        <ItemConGiap title="Thân" img={icon9} />
                        <ItemConGiap title="Dậu" img={icon10} />
                        <ItemConGiap title="Tuất" img={icon11} />
                        <ItemConGiap title="Hợi" img={icon12} />
                    </div>
                </div>
            </div>
            <div className="body">
                <p>HHH</p>
            </div>
        </div>
    )
}


export default Header