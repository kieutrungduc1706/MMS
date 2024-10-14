import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../Header/Header.css';
import React, { useEffect, useState } from 'react';
import listApi from '../../services/api';
import { Button, Checkbox, Form, Input } from 'antd';
import DetailsSearch from '../DetailsSearch/DetailsSearch';
import InfoNumber from '../DetailsSearch/InfoNumber';
import fileDownload from 'js-file-download'
import Feedback from '../Feedback/Feedback';

const logo = require('../../../src/images/logo/logo.png');
const exportPDF = require('../../../src/assets/exportPDF.png')

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
        <div className='item-congiap'>
            <Link to={{
                pathname: `${href}`,
                state: { id: 1, name: 'sabaoon', shirt: 'green' } // your data array of objects
            }}>
                <img style={{ maxWidth: "100%" }} src={img} alt={title} title={title} width="80px" height="83px" />
            </Link>
        </div>
    )
}

const HeaderMenu = ({ name, href, id, onClick }) => {
    return (
        <div className='header-menu header-menu2'>
            <a id={id} onClick={onClick} href={href} >{name}</a>
        </div>
    )
}


const RenderListTuTruong = ({ data, state }) => {
    // console.log("check state", state)
    return (
        <div>
            <InfoNumber key={4} title="Loại từ trường: " value={data.TUTRUONGDAYDU} />
            {
                state === "HOME"
                ?
                <InfoNumber key={5} title="Đặc điểm: " value={data.dac_diem} />
                :
                null
            }
            <InfoNumber key={7} title="Đặc thù: " value={data.dac_thu} />
            <InfoNumber key={8} title="Hành: " value={data.hanh} />
            <InfoNumber key={9} title="Kết hôn: " value={data.ket_hon} />
            <InfoNumber key={10} title="Năng lượng hỗ trợ: " value={data.nang_luong_ho_tro} />
            <InfoNumber key={11} title="Năng lượng học tập: " value={data.nang_luong_hoc_tap} />
            <InfoNumber key={12} title="Nhân cách: " value={data.nhan_cach} />
            <InfoNumber key={13} title="Nhược điểm: " value={data.nhuoc_diem} />
            <InfoNumber key={14} title="Quý nhân: " value={data.quy_nhan} />
            <InfoNumber key={15} title="Sự nghiệp: " value={data.su_nghiep} />
            <InfoNumber key={16} title="Sức khỏe: " value={data.suc_khoe} />
            <InfoNumber key={17} title="Tài sản: " value={data.tai_san} />
            <InfoNumber key={18} title="Tài vận: " value={data.tai_van} />
            <InfoNumber key={19} title="Tình cảm: " value={data.tinh_cam} />
            <InfoNumber key={20} title="=> Tổng kết: " value={data.tong_ket} />
            <InfoNumber key={21} title="Ưu điểm: " value={data.uu_diem} />
        </div>
    )
}

const Header = ({ route, props, data, user }) => {
    const navigate = useNavigate();
    const linkURL = useSearchParams();
    const [tel, setTel] = useState("");
    const [dataSearch, setDataSearch] = useState([]);
    const [dataInfoNumber, setDataInfoNumber] = useState([])
    const [dataGiaiMa, setDataGiaiMa] = useState([])
    const [dataTuTruong, setDataTuTruong] = useState([])
    const [checked, setChecked] = useState(true)
    const [stateCheck, setStateCheck] = useState('')
    const [checkType, setCheckType] = useState(5)
    const [cccd, setCCCD] = useState('');
    const [name, setName] = useState('');
    const [sessionID, setSessionID] = useState(data);
    const [linkPDF, setLinkPDF] = useState('');
    const [day, setDay] = useState('1');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const dataSex = [
        {
            id: 0,
            name: 'Giới tính'
        },
        {
            id: 1,
            name: 'Nam'
        },
        {
            id: 2,
            name: 'Nữ'
        }
    ]

    useEffect(() => {
        if(data === undefined){
            navigate('/');
        }else{
            return;
        }

    }, [])
    



    const [sex, setSex] = useState(dataSex[0]);

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }

    async function headleExportPDF(url, query) {
        // console.log('check tel---------> ',query)
        if (user == 2) {
            await fetch(`${url}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        { ...query }
                    )
                }).then((response) => response.json()
                ).then((response) => {
                    // console.log("Check res------>", response)
                    if (response.code == 200) {
                        // console.log(response)
                        const url = response.link_pdf;
                        // window.open(response.link_pdf, '_blank');
                        setLinkPDF(url)
                        // const randomFileName = 'ktđ-MMS-' + generateRandomString(8) + '.pdf'; 
                        // fetch(url)
                        // .then(response => response.blob())
                        // .then(blob => {
                        //     console.log(blob, randomFileName);
                        //   fileDownload(blob, randomFileName);  // Tạo tên tệp ngẫu nhiên với độ dài 10 ký tự
                        // })
                        // .catch(error => console.error('Error downloading PDF:', error));               
   
                    } else {
                        alert(response.desc)
                    }
                }).catch((error) => {
                    console.log(error)
                });
        } else {
            console.log("None")
        }



    }

    async function handleSearch({ tel }) {
        // console.log(stateCheck)
        if (stateCheck == '') {
            alert('Vui lòng chọn thông tin để tra cứu')
        } else {
            console.log("check", tel)
            if (stateCheck === 'TEL') {
                // console.log("check sex--------->", sex)
                await fetch(listApi.checkNumber,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "tel_number": tel,
                            "session_id": sessionID,
                            "sex_id": sex
                        })
                    }).then((response) => response.json()

                    ).then((response) => {
                        // console.log("check Tel: ", response);
                        if (response.code == 200) {
                            headleExportPDF(listApi.exportPDF, { "tel_number": tel ,   "session_id": sessionID})
                            setDataSearch(response)
                            setDataInfoNumber(response.info_number)
                            setDataGiaiMa(response.giai_ma)
                            setDataTuTruong(response.tu_truong_score)
                            alert("Tra cứu thành công")
                        } else {
                            alert(response.desc)
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
            }
            if (stateCheck === 'BSX') {
                fetch(listApi.checkCarNumber,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "car_number": tel,
                            "session_id": sessionID
                        })
                    }).then((response) => response.json()

                    ).then((response) => {
                        // console.log("check: ", response);
                        if (response.code == 200) {
                            headleExportPDF(listApi.carPDF, { "car_number": tel,   "session_id": sessionID })
                            setDataSearch(response)
                            setDataInfoNumber(response.info_number)
                            setDataGiaiMa(response.giai_ma)
                            setDataTuTruong(response.tu_truong_score)
                            alert("Tra cứu thành công")
                        } else {
                            alert(response.desc)
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
            }
            if (stateCheck === 'BANK') {
                fetch(listApi.checkBanking,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "bank_account": tel,
                            "session_id": sessionID
                        })
                    }).then((response) => response.json()

                    ).then((response) => {
                        // console.log("check: ", response);
                        if (response.code == 200) {
                            headleExportPDF(listApi.stkPDF, { "bank_account": tel ,   "session_id": sessionID})
                            setDataSearch(response)
                            setDataInfoNumber(response.info_number)
                            setDataGiaiMa(response.giai_ma)
                            setDataTuTruong(response.tu_truong_score)
                            alert("Tra cứu thành công")
                        } else {
                            alert(response.desc)
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
            }
            // if (stateCheck === 'CCCD') {
            //     fetch(listApi.checkCCCD,
            //         {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify({
            //                 "personal_id": tel,
            //             })
            //         }).then((response) => response.json()

            //         ).then((response) => {
            //             console.log("check: ", response);
            //             if (response.code == 200) {
            //                 setDataSearch(response)

            //                 setDataInfoNumber(response.info_number)
            //                 setDataGiaiMa(response.giai_ma)
            //                 setDataTuTruong(response.tu_truong_score)
            //                 alert("Tra cứu thành công")
            //             } else {
            //                 alert(response.desc)
            //             }
            //         }).catch((error) => {
            //             console.log(error)
            //         });
            // }
            if (stateCheck === 'GPKD') {
                fetch(listApi.checkGPKD,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "gpkd": tel,
                            "session_id": sessionID,
                        })
                    }).then((response) => response.json()

                    ).then((response) => {
                        // console.log("check: ", response);
                        if (response.code == 200) {
                            setDataSearch(response)
                            headleExportPDF(listApi.gplxPDF, { "gpkd": tel,   "session_id": sessionID })
                            setDataInfoNumber(response.info_number)
                            setDataGiaiMa(response.giai_ma)
                            setDataTuTruong(response.tu_truong_score)
                            alert("Tra cứu thành công")
                        } else {
                            alert(response.desc)
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
            }
            if (stateCheck === 'HOME') {
                fetch(listApi.checkAddress,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "address": tel,
                            "session_id": sessionID
                        })
                    }).then((response) => response.json()

                    ).then((response) => {
                        // console.log("check: ", response);
                        if (response.code == 200) {
                            setDataSearch(response)
                            // headleExportPDF( listApi.gplxPDF, {"gpkd": tel})
                            setDataInfoNumber(response.info_number)
                            setDataGiaiMa(response.giai_ma)
                            setDataTuTruong(response.tu_truong_score)
                            alert("Tra cứu thành công")
                        } else {
                            alert(response.desc)
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
            }
        }
    }

    const FuncMenu = (id) => {
        console.log(id)
        if (id === 1) {
            setCheckType(1);
            setDataSearch([])
            setDataGiaiMa([])
            setDataTuTruong([])
        } if (id === 5) {
            setCheckType(5);
            setDataSearch([])
            setDataGiaiMa([])
            setDataTuTruong([])
            // console.log(dataSearch)
        }
    }


    function handleSubmitCCCD(e) {
        e.preventDefault();
        // console.log(day, month, year, name, sex, cccd)
        // Prevent the browser from reloading the page
        fetch(listApi.checkCCCD,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "personal_id": cccd,
                    "name": name,
                    "sex": sex,
                    "day": day,
                    "month": month,
                    "year": year,
                    "session_id": sessionID
                })
            }).then((response) => response.json()
            ).then((response) => {
                if (response.code == 200) {
                    // console.log("check: ", response);
                    headleExportPDF(listApi.cccdPDF, {
                        "personal_id": cccd,
                        "name": name,
                        "sex": sex,
                        "day": day,
                        "month": month,
                        "year": year,
                        "session_id": sessionID
                    })
                    setDataSearch(response.info_number)
                    setDataGiaiMa(response.giai_ma)
                    alert("Tra cứu thành công")
                } else {
                    alert(response.desc)
                }
            }).catch((error) => {
                console.log(error)
            });

    }

    const handleDownloadPDF = (link) => {
        console.log("Check link",link)
        const randomFileName = 'ktđ-MMS-' + generateRandomString(8) + '.pdf'; 
        fetch(link)
        .then(response => response.blob())
        .then(blob => {
          fileDownload(blob, randomFileName);  // Tạo tên tệp ngẫu nhiên với độ dài 10 ký tự
        })
        .catch(error => console.error('Error downloading PDF:', error));              
    }

    return (
        <div className="header">
            <div className="header-container">
                {/* zalo */}
                <div class="zalo-container left">
                    <a id="zalo-btn" href="https://zalo.me/0964345934" target="_blank" rel="noopener nofollow">
                        <div class="animated_zalo infinite zoomIn_zalo cmoz-alo-circle"></div>
                        <div class="animated_zalo infinite pulse_zalo cmoz-alo-circle-fill"></div>
                        <span><img src="https://vutruso.com/wp-content/uploads/2024/05/zalo-2.png" alt="Contact Me on Zalo"/></span>
                    </a>
                    </div>

                <div className="topHeader">
                    <div style={{ marginTop: 80 }}>
                        {/* <a href="" aria-label="Sim phong thủy - khai thông khí vận, sức khỏe, tài lộc" className="d-flex justify-content-center">
                            <img src={logo} alt="Sim phong thủy - khai thông khí vận, sức khỏe, tài lộc" className="d-none d-md-block" width="441px" height="83px" />
                        </a> */}
                    </div>
                    <div className="header-slogan">
                        <h1>Sim số phong thủy</h1>
                        <h3>Hợp mệnh - Kích tài - Danh Lợi</h3>
                        <h4>Như Ý - Cát tường</h4>
                        {/* <span onClick={()=>setStateCheck('SĐT')}>-------Số điện thoại------</span>
                        <span onClick={()=>setStateCheck('BSX')}>Biển số xe-----</span>
                        <span onClick={()=>setStateCheck('CCCD')}>CCCD------</span> */}
                    </div>
                </div>
                <div className='menuContainer'>
                    <div className="menu"  >
                        {/* <HeaderMenu onClick={() => FuncMenu(1)} id={1} name="Tra cứu bằng CCCD" /> */}
                        <HeaderMenu onClick={() => FuncMenu(2)} id={2} name="Sim chiêu quý nhân - may mắn" />
                        <HeaderMenu onClick={() => FuncMenu(3)} id={3} name="Sim lợi học hành" />
                        <HeaderMenu onClick={() => FuncMenu(4)} id={4} name="Sim lợi sức khỏe" />
                    </div>
                    {
                        checkType == 5
                            ?
                            (<div className="formCenter" >
                                <div className="titleForm">
                                    <p className='txtTren'>Nhập Thông Tin</p>
                                    <div className='choose-search'>
                                        <div>
                                            <label>
                                                <input
                                                    onChange={() => {
                                                        setStateCheck("TEL");
                                                    }}
                                                    type="radio" name="myRadio" value="tel" />
                                                Số điện thoại
                                            </label>
                                            <label>
                                                <input
                                                    onChange={() => {
                                                        setStateCheck("BSX");
                                                    }}
                                                    type="radio" name="myRadio" value="moto" />
                                                Biển số xe
                                            </label>
                                            <label>
                                                <input
                                                    onChange={() => {
                                                        setStateCheck("HOME");
                                                       
                                                    }}
                                                    type="radio" name="myRadio" value="home" />
                                                Số nhà
                                            </label>
                                        </div>
                                        <div>
                                        <label>
                                                <input onChange={() => {
                                                    setStateCheck("GPKD");
                                                }}
                                                    type="radio"
                                                    name="myRadio"
                                                    value="GPKD"
                                                />
                                                Giấy phép kinh doanh
                                            </label>
                                            <label>
                                                <input
                                                    onChange={() => {
                                                        setStateCheck("BANK");
                                                    }}
                                                    type="radio" name="myRadio" value="BANK" />
                                                Số tài khoản
                                            </label>
                                        </div>
                                    </div>
                                    {
                                            stateCheck == 'TEL' 
                                            && 
                                            <div className="chooseValue">
                                            <div>
                                                <p>Giới tính</p>
                                            </div>
                                            <div>
                                                <select name={dataSex} onChange={e =>{ setSex(e.target.value); console.log(e.target.value)}} value={sex} id={sex} aria-label="GIới tính" class="header-form-select">
                                                    {dataSex.map(item => (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        }
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
                                                            message: 'Vui lòng nhập thông tin để tra cứu',
                                                        },
                                                    ]}
                                                >
                                                    <input value={tel} onChange={e => setTel(e.target.value)} style={{ border: 'none', outline: 'none', height: '30px', width: '200px', padding: 10 }} placeholder="Nhập số..." />
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
                            </div>)
                            :
                            checkType == 1
                                ?
                                <form method="POST" className='formCenter' onSubmit={handleSubmitCCCD}>
                                    <div>
                                        <div className="titleForm">
                                            <div className="chooseValue" >
                                                <p>Họ tên</p>
                                                <input placeholder='Nhập tên..' onChange={e => setName(e.target.value)} />

                                            </div>
                                            <div className="chooseValue">
                                                <div>
                                                    <p>Giới tính</p>
                                                </div>
                                                <div>
                                                    <select name={dataSex} onChange={e =>{ setSex(e.target.value); console.log(e.target.value)}} value={sex} id={sex} aria-label="GIới tính" class="header-form-select">
                                                        {dataSex.map(item => (
                                                            <option key={item.id} value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="chooseValue">
                                                <p>Số CCCD </p>
                                                <input placeholder="Nhập số CCCD" onChange={e => setCCCD(e.target.value)} />
                                            </div>
                                            <div className='chooseValue'>
                                                <div>
                                                    <p>Ngày sinh</p>
                                                </div>
                                                <div>
                                                    <select onChange={e => setDay(e.target.value)} value={day} id="ngay_sinh" aria-label="Ngày Sinh" class="header-form-select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10" selected="">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                                                </div>
                                                <div>
                                                    <select onChange={e => setMonth(e.target.value)} value={month} id="thang_sinh" aria-label="Tháng Sinh" class="header-form-select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10" selected="">10</option><option value="11">11</option><option value="12">12</option></select>
                                                </div>
                                                <div >
                                                    <select onChange={e => setYear(e.target.value)} value={year} id="nam_sinh" aria-label="Năm Sinh" class="header-form-select"><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990" selected="">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option></select>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit">Tra cứu thông tin</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                :
                                null
                    }
                    <div className="menu" >
                        {/* <HeaderMenu onClick={() => FuncMenu(5)} id={5} name="Tra cứu thông tin khác" /> */}
                        <HeaderMenu onClick={() => FuncMenu(6)} id={6} name="Sim thăng quan tiến chức - định sự nghiệp" />
                        <HeaderMenu onClick={() => FuncMenu(7)} id={7} name="Sim kích tài lộc" />
                        <HeaderMenu onClick={() => FuncMenu(8)} id={8} name="Sim chiêu tình duyên hôn nhân" />
                    </div>

                </div>
            </div>
            <div className="congiap">
                <div className="row">
                    <HeaderMenu onClick={() => FuncMenu(1)} id={1} name="Tra cứu bằng CCCD" />
                    {
                        linkPDF !== '' && checkType == 5
                        ?
                        <div onClick={()=>handleDownloadPDF(linkPDF)}   style={{width: 15, cursor:'pointer'}}>
                            <img src={exportPDF} className="PDF" />
                        </div>
                        :
                        null
                    
                    }
                    <HeaderMenu onClick={() => FuncMenu(5)} id={5} name="Tra cứu thông tin khác" />
            
                </div>
            </div>
            {
                checkType == 1
                    ?
                    <div className='body'>
                        {
                            dataSearch == 0
                                ?
                                null
                                :
                                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{ textAlign: 'center', color: "#fff" }}>Giải mã</h2>
                                    <h2 style={{ textAlign: 'center', color: "#fff" }}>Các giai đoạn độ tuổi trong cuộc đời</h2>
                                </div>
                        }
                        {dataGiaiMa.map((item, index) => (
                            <div className='list-giaima'>
                                {/* <InfoNumber key={index} value={item.bo_kh} /> */}
                                <InfoNumber key={index + 1} value={<p style={{ fontWeight: '700' }}>{item.info}</p>} />
                                <InfoNumber key={index + 2} value={item.desc} />
                            </div>
                        )
                        )}
                        {dataSearch.map((item, index) => (
                            
                            <div className="list-giaima">
                                <div style={{ 'background': item.state == 1 ? "red" : '' }} className="list-giaimaCCCD">
                                    <InfoNumber key={index} title="" value={item.start_age + "-" + item.end_age} />
                                </div>
                                <InfoNumber key={index} title="Cặp số: " value={item.number} />
                                <RenderListTuTruong data={item.tu_truong_info} />
                            </div>
                        )
                        )}
                    </div>
                    :
                    checkType == 5
                        ?
                        <div className="body">
                            <div>
                                {
                                    dataSearch == 0
                                        ?
                                        null
                                        :
                                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                            <h2 style={{ textAlign: 'center', color: '#fff' }}>Giải mã</h2>
                                            <audio style={{ width: '45vw', margin: "0 auto", marginRight: 0, marginLeft: 0 }} controls>
                                                <source src={dataSearch.link} type="audio/ogg" />
                                            </audio>
                                        </div>
                                }
                                {dataGiaiMa.map((item, index) => (
                                    <div className='list-giaima'>
                                        {/* <InfoNumber key={index} value={item.bo_kh} /> */}
                                        <InfoNumber key={index + 1} value={<p style={{ fontWeight: '700' }}>{item.info}</p>} />
                                        <InfoNumber key={index + 2} value={item.desc} />
                                    </div>
                                )
                                )}
                            </div>
                            <div>
                                {
                                    dataSearch == 0
                                        ?
                                        null
                                        :
                                        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                            <h2 style={{ textAlign: 'center', color: "#fff" }}>Thông tin số</h2>
                                        </div>
                                }
                                {dataTuTruong.map((item, index) => (
                                    <div className="list-giaima">
                                        <InfoNumber key={index} title="Danh sách số: " value={item.list_number.toString()} />
                                        <InfoNumber key={index + 1} title="Điểm: " value={item.score} />
                                        <RenderListTuTruong state={stateCheck} data={item.tu_truong_info} />
                                    </div>
                                )

                                )}
                                {
                                    dataSearch.number_state 
                                    &&
                                    <>
                                    <h2 style={{ textAlign: 'center', color: '#fff' }}>Kết luận</h2>
                                    <div className="list-giaima"> 
                                    <h3 style={{color: dataSearch.cat_tinh_score < dataSearch.hung_tinh_score ? "red" : "green" }}> {dataSearch.number_state}</h3>
                                    <h3 style={{color:"#fff"}}> {dataSearch.result_conclusion}</h3>
                                        {/* <InfoNumber key={'3131'} title="Số của bạn là: " value= />  */}
                                </div>
                                    </>
                                }
                            </div>
                        </div>
                        :
                        null
            }
        </div>
    )
}


export default Header