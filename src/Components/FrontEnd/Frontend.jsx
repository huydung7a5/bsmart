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
import { Button, Input, Checkbox, Select } from "antd";
import { useEffect, useState } from 'react';
function Frontend() {
    const [number, setnumber] = useState(0);
    const [to, setto] = useState("");
    const [moveto, setmoveto] = useState("");
    const [Data, setData] = useState(data);
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var headerTop = document.querySelector('.headerindextop');
        var headerBottom = document.querySelector('.headerindexbottom');

        if (window.pageYOffset > headerTop.offsetHeight) {
            headerTop.style.display = 'none';
            headerBottom.style.marginTop = '0';
        } else {
            headerTop.style.display = 'block';
            headerBottom.style.marginTop = headerTop.offsetHeight + '0';
        }

    });
    const handlekhoanggia = () => {
        const newData = data.filter((item) => item.price >= to && item.price <= moveto);
        const newData1 = data.filter((item) => item.hinhthuc === 'Online');
        const newData2 = data.filter((item) => item.hinhthuc === 'Offline');
        setData(newData);
        setData(newData1);
        setData(newData2);

    }
    useEffect(() => {
        const interval = setInterval(() => {
            setnumber(data.length);
        });
       
        return () => clearInterval(interval);
    }, [number]);
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
                        <li className='menu1'>Trang chủ</li>
                        <li className='menu1'>Về chúng tôi</li>
                        <li className='menu1'>Khoá học STEM</li>
                        <li className='menu2'>Khoá Học
                            <ul className='submenu'>
                                <li className='submenu1'><a className='link' href="/frontend">
                                    Front-End </a>
                                </li>
                                <li className='submenu1'>
                                    <Link className='link' to={"/backend"}>
                                        Back-End</Link></li>
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
                </div>
            </header>
            <nav>
                <div className='fetitle3'>
                    <div className='viewtitle1'>
                        <h1 className='viewfetitle1'>Danh sách khoá học</h1>
                        <div className='index2' >
                            <p className='itemfe'>Trang chủ</p>
                            <p className='itemfe1'>></p>
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
                        <Checkbox className='Checkbox' value={"Online"}>Online</Checkbox>
                    </p>
                    <p>
                        <Checkbox className='Checkbox' value={"Offine"}>Offine</Checkbox>
                    </p>
                    <p className='gia'>Trình độ</p>
                    <p>
                        <Checkbox>Dễ</Checkbox>
                    </p>
                    <p>
                        <Checkbox>Trung bình</Checkbox>
                    </p>
                    <p>
                        <Checkbox>Khó</Checkbox>
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
                        <Select className='sapxep' defaultValue={{ value: '0', label: 'Sắp xếp khoá học' }}>
                            <option value="1">Khoá học mới nhất</option>
                            <option value="2">Khoá học nhiều người học</option>
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
                                <p className='detailfe'>{item.detail}</p>
                                <p className='mentorfe1'>
                                    <p className='khoangcach2'> {item.price} VNĐ</p>
                                    <i className='khoangcach3'><DatabaseOutlined /> {item.date} Buổi học</i>
                                </p>
                                <div className='viewfe4'>
                                    <Button className='btnfe'>Xem chi tiết</Button>
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
                <div className='view2'>
                    <p className='txtcheck' >Điều Khoản</p>
                    <p className='doingu'> Chính sách bảo mật</p>
                    <p className='doingu'> Điều khoản dịch vụ</p>
                    <p className='txtcheck' >Cộng tác viên</p>
                    <p className='doingu'> Đăng ký cộng tác viên</p>
                    <p className='doingu'>Đăng ký Mentor</p>
                </div>
                <div className='view1'>
                    <p className='txtcheck' >Liên hệ với chúng tôi</p>
                    <p className='doingu'>  Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức</p>
                    <div className='viewf'>
                        <img className='iconf' src={gmail} alt="" />
                        admin@bsmart.edu.vn</div>
                    <div className='viewf'>
                        <img className='iconf' src={phone} alt="" />
                        028 9999 79 39</div>
                </div>
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
    hinhthuc: 'Online'

}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript',
    mentor: 'Đoàn Ngọc Trân Châu',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 25000000,
    hinhthuc: 'Offline'
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/html-vs-css.png',
    title: 'HTML & CSS_Basic',
    mentor: 'Hồ Hồng Minh',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Online'
}, {
    url: "https://bsmart.edu.vn/files/CourseImage/html-770x515.jpg",
    title: 'HTML & CSS Foundation',
    mentor: 'Đỗ Minh Quân',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Offline'
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/reactjs.png',
    title: 'ReactJS',
    mentor: 'Nguyễn Viết Châu',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 27000000,
    hinhthuc: 'Online'
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript_Basic',
    mentor: 'Nguyễn Thị Trà My',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Online'
}, {
    url: 'https://image.vtc.vn/resize/th/upload/2021/12/20/1154-12344056.jpg',
    title: 'ReactJS Fundamental',
    mentor: 'Đỗ Minh Quân',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 27000000,
    hinhthuc: 'Offline'
}, {
    url: 'https://bsmart.edu.vn/files/CourseImage/2-8.jpg',
    title: 'JavaScript_Basic',
    mentor: 'Hồ Hồng Minh',
    detail: "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây",
    date: 18,
    price: 30000000,
    hinhthuc: 'Offline'
}
];
