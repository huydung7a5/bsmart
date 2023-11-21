import { FacebookOutlined, YoutubeOutlined, RightOutlined, ArrowDownOutlined, CheckCircleOutlined, SettingOutlined, DatabaseOutlined, FireOutlined, TeamOutlined, QrcodeOutlined, TrophyOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, Link } from 'react-router-dom';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import { Input } from 'antd';

function DetailItem() {
    const header = document.querySelector('.headerindextop');
    let lastScrollPosition = window.scrollY;
    function handleScroll() {
        try {
            const currentScrollPosition = window.scrollY;
            // Check the scroll direction
            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down
                header.classList.add('hidden-header');
                header.classList.remove('visible-header');
            } else {
                // Scrolling up
                header.classList.remove('hidden-header');
                header.classList.add('visible-header');

            }
            // Update the last scroll position
            lastScrollPosition = currentScrollPosition;
        } catch {
        }
    }

    window.addEventListener('scroll', handleScroll);
    const handleindex = () => {
        window.location.href = "/";
    }
    const handlereload = () => {
        window.location.reload();
    }
    return (
        <body>
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
                        <li className='menu2'>
                            <Link className='link' onClick={handleindex}>
                                Trang chủ</Link>
                        </li>
                        <li className='menu1'>Về chúng tôi</li>
                        <li className='menu1'>Khoá học STEM</li>
                        <li className='menu1' style={{ color: '#ff630e' }}>Khoá Học
                            <ul className='submenu'>
                                <li className='submenu1'>
                                    <Link className='link' onClick={handlereload}>
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
                        <p className='so'>123</p>
                    </div>


                    {/* Thêm checkbox và icon cho menu di động */}
                    <input type="checkbox" id="mobileMenuToggle" class="mobile-menu-toggle" />
                    <label for="mobileMenuToggle" class="mobile-menu-icon">☰</label>
                    {/* Phần menu di động */}
                    <div class="mobile-menu">
                        {/* Thêm các mục menu di động của bạn ở đây */}
                        <ul>
                            <li className='menu2'>
                                <Link className='link' onClick={handleindex}>
                                    Trang chủ</Link>
                            </li>
                            <li>Về chúng tôi</li>
                            <li>Khoá học STEM</li>
                            <li>Khoá Học
                                <ul>
                                    <li>
                                        <Link onClick={handlereload}>
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
            <nav>
                <div className='fetitle3'>
                    <div className='viewtitle1'>
                        <h1 className='viewfetitle1'>HTML & CSS Foundation</h1>
                        <div className='index2'>
                            <p className='itemfe1'>Trang chủ</p>
                            <p><RightOutlined /></p>
                            <p className='itemfe'>Khoá học</p>
                        </div>
                    </div>
                </div>
            </nav>
        </body>

    )
}

export default DetailItem
