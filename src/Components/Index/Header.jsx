import { FacebookOutlined, YoutubeOutlined, } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from 'react-router-dom';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Input } from "antd";
import "../CSSs/Index1.css";
import React, { useState, } from 'react';
function Header() {
    const [toggle, settoggle] = useState(false);
    const handleclick = () => {
        window.location.href = "/frontend";
    }
    const handletoggle = () => {
        settoggle(!toggle);
    };
    return (
        <header>
            <div className="headerindextop">
                <div className='headericonleft'>
                    <div className='headericon1'>
                        <div className='viewicon'>
                            <FacebookOutlined />
                        </div>
                        <div className='viewicon'>
                            <h3>in</h3>
                        </div>
                        <div className='viewicon'>
                            <YoutubeOutlined />
                        </div>
                    </div>
                    <div className='headericon2'>
                        <div className='viewheader'>
                            <img className="icon" src={gmail} alt="" />
                            <p> admin@bsmart.edu.vn</p>
                        </div>
                        <div className='viewheader'>
                            <img className='icon' src={phone} alt="" />
                            <p>  028 9999 79 39</p>
                        </div>
                    </div>
                    <div className='headericonright'>
                        <Input className='input' type="text" placeholder='Tìm kiếm khoá học' />
                        <div className='viewlogin'>
                            <div className='login'>
                                <p>Đăng nhập</p>
                            </div>
                            <div>
                                |
                            </div>
                            <div className='login'>
                                <p>Đăng ký </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='headerindexbottom'>
                <img className='logo' src={logo} alt="" />
                <ul className='menu'>
                    <li className='menu2'>Trang chủ</li>
                    <li className='menu1'>Về chúng tôi</li>
                    <li className='menu1'>Khoá học STEM</li>
                    <li className='menu1'>Khoá Học
                        <ul className='submenu'>
                            <li className='submenu1'>
                                <Link className='link' onClick={handleclick}>
                                    Frontend</Link>
                            </li>
                            <li className='submenu1'>
                                Back-End</li>
                            <li className='submenu1'>Database</li>
                            <li className='submenu1'>Cấp tốc</li>
                            <li className='submenu1'>Other</li>
                            <li className='submenu1'>System</li>
                        </ul>
                    </li>
                    <li className='menu1'>Mentor</li>
                    <li className='menu1'>Blog</li>
                </ul>
                <div className='soping'>
                    <img className='shopingcard' src={shoping} alt="" />
                    <p className='so'>0</p>
                </div>

                <label className="mobile-menu-icon" onClick={handletoggle}>
                    ☰
                </label>
                {/* Phần menu di động */}
                <div class="mobile-menu" style={{ display: toggle ? 'block' : 'none' }}>
                    <ul className='toggle'>
                        <div className='toggleindex'>
                            <img className='shopingcard1' src={'https://bsmart.edu.vn/files/icon-logo-mobile.webp'} alt="" />
                            <h1 className='shopingcard1' onClick={handletoggle}>x</h1>
                        </div>
                        <div>
                            <img className='shopingcard' src={shoping} alt="" />
                        </div>
                        <div style={{ margin: 10 }}>
                            <li className='menu3'>Trang chủ</li>
                            <li className='menu3'>Về chúng tôi</li>
                            <li className='menu3'>Khoá Học</li>
                            <li className='menu3'>Khoá học STEM</li>
                            <li className='menu3'>Mentor</li>
                            <li className='menu3'>Blog</li>
                            <Input className='input1' type="text" placeholder='Tìm kiếm khoá học' />
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
