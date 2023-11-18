import { FacebookOutlined, YoutubeOutlined, CheckCircleOutlined, SettingOutlined, DatabaseOutlined, FireOutlined, TeamOutlined, QrcodeOutlined, TrophyOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, Link } from 'react-router-dom';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import banner from '../../assets/images/banner.png';
import background from '../../assets/images/background.png';
import banner2 from '../../assets/images/banner-2.png';
import banner3 from '../../assets/images/banner-3.png';
import banner4 from '../../assets/images/banner-4.png';
import bannerfooter from '../../assets/images/icon-logo-footer.png';
import { Button, Input, Checkbox, Select, Alert } from "antd";

import { useEffect, useState } from 'react';
function Frontend() {
    const [number, setnumber] = useState(0);
    const [to, setto] = useState("");
    const [moveto, setmoveto] = useState("");
    const [Data, setData] = useState(data);
    const [giohang, setgiohang] = useState(0);
    const [selectedSortOption, setSelectedSortOption] = useState('2');
    const header = document.querySelector('.headerindextop');
    let lastScrollPosition = window.scrollY;

    // Function to handle scroll events
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
    const handlegiohang = () => {
        alert('Thêm vào giỏ hàng thành công');
        setgiohang(giohang + 1);
    }
    const handlekhoanggia = (e) => {
        const newData = data.filter((item) => item.price >= to && item.price <= moveto);
        setData(newData);
    }
    const handleindex = () => {
        window.location.href = "/";
    }
    const handlereload = () => {
        window.location.reload();
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setnumber(data.length);
        });

        return () => clearInterval(interval);
    }, [number]);
    const onchange = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.hinhthuc === 'Online');
            setData(newData);
        } else {
            setData(data);
        }

    }
    const onchange1 = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.hinhthuc === 'Offline');
            setData(newData);
        } else {
            setData(data);
        }

    }
    const onchangekho = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Khó');
            setData(newData);
        } else {
            setData(data);
        }

    }
    const onchangede = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Dễ');
            setData(newData);
        } else {
            setData(data);
        }

    }
    const onchangetrungbinh = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Trung bình');
            setData(newData);
        } else {
            setData(data);
        }

    }
    const handleChangeSort = (value) => {
        // Cập nhật giá trị đã chọn vào state
        setSelectedSortOption(value);
        // Thực hiện logic lọc tương ứng với giá trị đã chọn
        if (value === '2') {
            const newData = [...Data]; // Tạo một bản sao mới của mảng để tránh thay đổi mảng gốc
            newData.sort((a, b) => b.songuoihoc - a.songuoihoc); // Sắp xếp mảng theo số người học giảm dần
            setData(newData);
        } else if (value === '4') {
            const newData = [...Data];
            newData.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
            setData(newData);
        } else if (value === '5') {
            const newData = [...Data];
            newData.sort((a, b) => b.title.localeCompare(a.title, 'en', { sensitivity: 'base' }));
            setData(newData);
        } else {
            setData(data);
        }
    };
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
                                    <Link className='link' onClick={handlereload} >
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
                        <p className='so'>{giohang}</p>
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
                        <h1 className='viewfetitle1'>Danh sách khoá học</h1>
                        <div className='index2' >
                            <p className='itemfe'>Trang chủ</p>
                            <p className='itemfe1'>{'>'}</p>
                            <p className='itemfe'>Khoá học</p>
                        </div>

                    </div>
                </div>

            </nav>
            <div className='fef'>
                <div className='feleft'>
                    <p className='gia'>Khoảng giá</p>
                    <p>Từ giá</p>
                    <Input value={to} onChange={(e) => setto(e.target.value)} type='text'></Input>
                    <p>Đến giá</p>
                    <Input value={moveto} onChange={(e) => setmoveto(e.target.value)} type='text'></Input>
                    <p className='gia'>Hình thức học</p>
                    <p>
                        <Checkbox className='Checkbox' onChange={onchange} >Online</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox' onChange={onchange1} >Offine</Checkbox>
                    </p>
                    <p className='gia'>Trình độ</p>
                    <p>
                        <Checkbox onChange={onchangede}>Dễ</Checkbox>
                    </p>
                    <p>
                        <Checkbox onChange={onchangetrungbinh}>Trung bình</Checkbox>
                    </p>
                    <p>
                        <Checkbox onChange={onchangekho}>Khó</Checkbox>
                    </p>
                    <p>
                        <Checkbox>Cực khó</Checkbox>
                    </p>
                    <p className='gia'>Lĩnh vực</p>
                    <p>
                        <Checkbox className='Checkbox'>Back-End</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox'>Front-End</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox'>Database</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox'>Cấp tốc</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox'>Other</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox'>System</Checkbox>
                    </p>
                    <Button className='btntimkiem' onClick={handlekhoanggia}>Tìm kiếm</Button>

                </div>
                <div className='feright'>
                    <div className='selec'>
                        <p className='khoahoc'>{number} khoá học</p>
                        <Select className='sapxep' onChange={handleChangeSort} defaultValue={{ value: '0', label: 'Sắp xếp khoá học' }}>
                            <option value="1">Khoá học mới nhất</option>
                            <option value="2" >Khoá học nhiều người học</option>
                            <option value="3">Khoá học sắp bắt đầu</option>
                            <option value="4">A-Z</option>
                            <option value="5">Z-A</option>
                        </Select>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {Data.map((item, index) => (
                            <div key={index} className='fe1'>
                                <img className='imgfe' src={item.url} alt="" />
                                <h3 className='titlefe'>{item.title}</h3>
                                <p className='mentorfe'>
                                    <p className='khoangcach1'>Mentor</p>
                                    <p className='khoangcach'>{item.mentor}</p>
                                </p>
                                <p className='detailfe'> <TeamOutlined />{item.songuoihoc} Học viên</p>
                                <p className='detailfe'>{item.detail}</p>
                                <p className='mentorfe1'>
                                    <p className='khoangcach2'> {item.price} VNĐ</p>
                                    <i className='khoangcach3'><DatabaseOutlined /> {item.date} Buổi học</i>
                                </p>
                                <div className='viewfe4'>
                                    <Button className='btnfe' onClick={handlegiohang}>Thêm vào giỏ</Button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='bottom'>
                <div className='view1'>
                    <img className='bannerf' src={bannerfooter} />
                    <p className='doingu1'> Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng dạy.</p>
                    <p className='doingu2'> Theo dõi chúng tôi tại:</p>
                    <p className='doingu2'><FacebookOutlined />
                        in <YoutubeOutlined /></p>
                </div>
                <div className='view2'>
                    <p className='txtcheck' >Menu</p>
                    <p className='doingu'> Trang chủ</p>
                    <p className='doingu'> Về Chúng tôi</p>
                    <p className='doingu'> Nền tảng LMS</p>
                    <p className='doingu'> Khoá học STEM</p>
                    <p className='doingu'> Khoá học</p>
                    <p className='doingu'> Mentor</p>
                    <p className='doingu'> Blog</p>
                </div>
                <div className='view3'>
                    <p className='txtcheck' >Điều Khoản</p>
                    <p className='doingu'> Chính sách bảo mật</p>
                    <p className='doingu'> Điều khoản dịch vụ</p>
                    <p className='txtcheck' >Cộng tác viên</p>
                    <p className='doingu'> Đăng ký cộng tác viên</p>
                    <p className='doingu'>Đăng ký Mentor</p>
                </div>
                <div className='view1'>
                    <p className='txtcheck' >Liên hệ với chúng tôi</p>
                    <p className='doingu'>Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức</p>
                    <div className='viewf'>
                        <img className='iconf' src={gmail} alt="" />
                        admin@bsmart.edu.vn</div>
                    <div className='viewf'>
                        <img className='iconf' src={phone} alt="" />
                        028 9999 79 39</div>
                </div>
                <p className='banquyen'>© Bản quyền BSmart 2023 - Empowered by BSmart - version 1.1.13</p>
            </div>

        </body>
    );
}


export default Frontend;
const data = [{
    url: "https://bsmart.edu.vn/files/CourseImage/html-770x515.jpg",
    title: 'HTML & CSS',
    mentor: 'Đỗ Minh Quân',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 25000000,
    hinhthuc: 'Online',
    trinhdo: 'Dễ',
    songuoihoc: 21
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript',
    mentor: 'Đoàn Ngọc Trân Châu',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 25000000,
    hinhthuc: 'Offline',
    trinhdo: 'Dễ',
    songuoihoc: 28
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/html-vs-css.png',
    title: 'HTML & CSS_Basic',
    mentor: 'Hồ Hồng Minh',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Online',
    trinhdo: 'Dễ',
    songuoihoc: 13
}, {
    url: "https://bsmart.edu.vn/files/CourseImage/html-770x515.jpg",
    title: 'HTML & CSS Foundation',
    mentor: 'Đỗ Minh Quân',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Offline',
    trinhdo: 'Khó',
    songuoihoc: 16
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/reactjs.png',
    title: 'ReactJS',
    mentor: 'Nguyễn Viết Châu',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 27000000,
    hinhthuc: 'Online',
    songuoihoc: 18
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript_Basic',
    mentor: 'Nguyễn Thị Trà My',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Online',
    songuoihoc: 30
}, {
    url: 'https://image.vtc.vn/resize/th/upload/2021/12/20/1154-12344056.jpg',
    title: 'ReactJS Fundamental',
    mentor: 'Đỗ Minh Quân',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 27000000,
    hinhthuc: 'Offline',
    trinhdo: 'Trung bình',
    songuoihoc: 22
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript_Basic',
    mentor: 'Hồ Hồng Minh',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Offline',
    trinhdo: 'Trung bình',
    songuoihoc: 16
}
];
