import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, Link } from 'react-router-dom';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import { Input } from "antd";
import { data4 } from '../Database/Data';
import { useEffect, useState } from 'react';
const HeaderFE = () => {
    const [number1, setnumber1] = useState('0');
    useEffect(() => {
        setnumber1(data4[0].number)
    }, [number1])
    return (
        <header >
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
                            <div> admin@bsmart.edu.vn</div>
                        </div>
                        <div className='viewheader'>
                            <img className='icon' src={phone} alt="" />
                            <div> 028 9999 79 39</div>
                        </div>
                    </div>
                    <div className='headericonright'>
                        <Input className='input' type="text" placeholder='Tìm kiếm khoá học' />
                        <div className='viewlogin'>
                            <div className='login'>
                                <div>Đăng nhập</div>
                            </div>
                            <div>
                                |
                            </div>
                            <div className='login'>
                                <div>Đăng ký </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='headerindexbottom'>
                <img className='logo' src={logo} alt="" />
                <ul className='menu'>
                    <li className='menu2'>
                        <Link className='link' to={'/'}>
                            Trang chủ</Link>
                    </li>
                    <li className='menu1'>Về chúng tôi</li>
                    <li className='menu1'>Khoá học STEM</li>
                    <li className='menu1' style={{ color: '#ff630e' }}>Khoá Học
                        <ul className='submenu'>
                            <li className='submenu1'>
                                <Link className='link' to={'/frontend'}>
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
                    <div className='so'>{data4[0].number}</div>
                </div>


                {/* Thêm checkbox và icon cho menu di động */}
                <input type="checkbox" id="mobileMenuToggle" class="mobile-menu-toggle" />
                <label for="mobileMenuToggle" class="mobile-menu-icon">☰</label>
                {/* Phần menu di động */}
                <div class="mobile-menu">
                    {/* Thêm các mục menu di động của bạn ở đây */}
                    <ul>
                        <li className='menu2'>
                            <Link className='link' to={'/'}>
                                Trang chủ</Link>
                        </li>
                        <li>Về chúng tôi</li>
                        <li>Khoá học STEM</li>
                        <li>Khoá Học
                            <ul>
                                <li>
                                    <Link to={'/frontend'}>
                                        Frontend</Link>
                                </li>
                                <li>Back-End</li>
                                <li>Database</li>
                                <li>Cấp tốc</li>
                                <li>Other</li>
                                <li>System</li>
                            </ul>
                        </li>
                        <li>Mentor</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderFE