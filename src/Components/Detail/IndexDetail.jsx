import { FacebookOutlined, YoutubeOutlined, RightOutlined, LeftOutlined, DatabaseOutlined, TeamOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, Link } from 'react-router-dom';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import Bottom from '../Index/Bottom';
import Asideitem from './Asideitem';
import { data3, data4 } from '../Database/Data';
import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
function DetailItem() {
    const [number, setnumber] = useState('0');
    const [data, setdata] = useState([]);
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
    useEffect(() => {
        const id = parseInt(window.location.pathname.split('/')[2])
        const newData = data3.filter(item => item.id === id)
        setdata(newData)
    }, [])
    useEffect(() => {
        setnumber(data4[0].number)
    }, [number])
    const handleclick = () => {
        // Tìm kiếm phần tử có id là 1 trong mảng và cập nhật giá trị number
        const updatedData = data4.find(item => item.id === 1);
        data4[0].number = data4[0].number + 1;
        setnumber(updatedData);
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
                                <div> admin@bsmart.edu.vn</div>
                            </div>
                            <div className='viewheader'>
                                <img className='icon' src={phone} alt="" />
                                <div>  028 9999 79 39</div>
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
                        <li className='menu1'>
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
                            <div className='itemfe1'>Trang chủ</div>
                            <div><RightOutlined /></div>
                            <div className='itemfe'>Khoá học</div>
                            <div><RightOutlined /></div>
                            <div className='itemfe'>Chi tiết</div>
                        </div>
                    </div>
                </div>
            </nav>
            <footer>
                <div className='itemdetail'>
                    <div className='itemdetailleft'>
                        {data.map((item, index) => (
                            <div key={index}>
                                <div className='itemcondetailmentor'>
                                    <div className='mentor'>
                                        <img className='imgmentor' src={item.khoa_hoc.mentor.avatar} width={50} height={50} />
                                        <div style={{ color: "#999999" }}>
                                            bởi
                                        </div>
                                        <div className='namementor'>
                                            {item.khoa_hoc.mentor.name}
                                        </div>
                                    </div>
                                    <div className='linhvuc'>
                                        <div className='linhvuc1'>
                                            <div>
                                                Lĩnh Vực:
                                            </div>
                                            <div className='job'>
                                                {item.khoa_hoc.mentor.job}
                                            </div>
                                        </div>
                                        <div>Cấp độ: {item.khoa_hoc.mentor.level}
                                        </div>
                                    </div>
                                    <div className='form'>
                                        <div className='itemformdetail'>Số lượng học viên đăng ký: {item.khoa_hoc.mentor.soluong}
                                        </div>
                                        <div className='itemformdetail'>Số lượng lớp đang mở: {item.khoa_hoc.mentor.lop}
                                        </div>
                                        <div className='itemformdetail'>Ngày khai giảng lớp học mới: {item.khoa_hoc.mentor.ngaykhaigiang}
                                        </div>
                                    </div>
                                </div>
                                <div className='itemcondetail'>
                                    <div className='titledetail1'>
                                        Miêu tả khoá học
                                    </div>
                                    <div>{item.khoa_hoc.gioi_thieu.html}</div>
                                    <div>
                                        {item.khoa_hoc.gioi_thieu.css}
                                    </div>
                                </div>
                                <div className='itemcondetail'>
                                    <div className='titledetail1'>
                                        Lộ trình khoá học
                                    </div>

                                </div>
                                <div className='itemcondetail'>
                                    <i className='titledetail'>
                                        {item.khoa_hoc.lo_trinh_khoa_hoc.ten}
                                    </i>
                                    {item.khoa_hoc.lo_trinh_khoa_hoc.module_1.map((item, index) => (
                                        <div key={index} className='margin'>
                                            <div>{item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='itemcondetail'>
                                    <i className='titledetail'>
                                        {item.khoa_hoc.lo_trinh_khoa_hoc.ten1}
                                    </i>
                                    {item.khoa_hoc.lo_trinh_khoa_hoc.module_2.map((item, index) => (
                                        <div key={index} className='margin'>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='itemcondetail'>
                                    <i className='titledetail'>
                                        {item.khoa_hoc.lo_trinh_khoa_hoc.ten2}
                                    </i>
                                    {item.khoa_hoc.lo_trinh_khoa_hoc.module_3.map((item, index) => (
                                        <div key={index} className='margin'>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='itemcondetail'>
                                    <i className='titledetail'>
                                        {item.khoa_hoc.lo_trinh_khoa_hoc.ten3}
                                    </i>
                                    {item.khoa_hoc.lo_trinh_khoa_hoc.module_4.map((item, index) => (
                                        <div key={index} className='margin'>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='itemcondetail'>
                                    <i className='titledetail'>
                                        {item.khoa_hoc.lo_trinh_khoa_hoc.ten4}
                                    </i>
                                    {item.khoa_hoc.lo_trinh_khoa_hoc.module_5.map((item, index) => (
                                        <div key={index} className='margin'>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='itemdetailright'>
                        {data.map((item, index) => (
                            <div key={index} style={{ width: "100%" }}>
                                <img className='imgne' src={item.khoa_hoc.gia.img} />
                                <div className='gia'> {item.khoa_hoc.gia.gia_goc} VNĐ</div>
                                <div className='title'><h3> Danh sách lớp học</h3></div>
                                <Button className='title' onClick={handleclick}>
                                    Đăng ký ngay
                                </Button>
                            </div>

                        ))}

                    </div>
                </div>
            </footer>
            <Asideitem />
            <Bottom />
        </body>

    )
}

export default DetailItem

