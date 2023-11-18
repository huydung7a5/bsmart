import { FacebookOutlined, YoutubeOutlined, CheckCircleOutlined, SettingOutlined, FireOutlined, DatabaseOutlined, TeamOutlined, QrcodeOutlined, TrophyOutlined } from '@ant-design/icons';
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
import location from '../../assets/images/icon-location.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Input, Anchor, Select } from "antd";
import "./Index1.css";
import React, { useState, useRef, useEffect } from 'react';

function Index() {
    const [seconds, setSeconds] = useState(4);
    const [toggle, settoggle] = useState(false);
    // Get the header element
    const header = document.querySelector('.headerindextop');
    const header1 = document.querySelector('.headerindexbottom');
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
    const sliderRef = useRef(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds <= 0) {
            setSeconds(4);
            goToNextSlide3();
        }
        return () => clearInterval(interval);
    }, [seconds]);
    function calculateSlidesToShow() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1000) {
            return 4;
        } else if (screenWidth >= 800) {
            return 2;
        } else if (screenWidth <= 800) {
            return 1;
        }
    }

    // Số lượng slidesToShow ban đầu
    let initialSlidesToShow = calculateSlidesToShow();
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: initialSlidesToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 108,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 40,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    const goToNextSlide3 = () => {
        sliderRef3.current.slickNext();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };
    const goToNextSlide1 = () => {
        sliderRef1.current.slickNext();
    };

    const goToPrevSlide1 = () => {
        sliderRef1.current.slickPrev();
    };
    const goToNextSlide2 = () => {
        sliderRef2.current.slickNext();
    };

    const goToPrevSlide2 = () => {
        sliderRef2.current.slickPrev();
    };
    const handleclick = () => {
        window.location.href = "/frontend";
    }


    const handletoggle = () => {
        settoggle(!toggle);
    };


    return (
        <body>
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
                            <div style={{margin:10}}>
                                <li className='menu3'>Trang chủ</li>
                                <li className='menu3'>Về chúng tôi</li>
                                <li className='menu3'>Khoá Học</li>
                                <li className='menu3'>Khoá học STEM</li>
                                <li className='menu3'>Mentor</li>
                                <li className='menu3'>Blog</li>
                               <Input className='input' type="text" placeholder='Tìm kiếm khoá học' />
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
            <nav>
                <div className='title3'>
                    <div className='viewtitle1'>
                        <p className='txtcheck' >KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</p>
                        <p className='trothanh'>Trở thành lập trình viên chuyên nghiệp tại BSMART</p>
                        <p className='doingu'>Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập trình viên chuyên nghiệp</p>
                        <div className='viewbutton'>
                            <Button className='button'>XEM KHOÁ HỌC</Button>
                        </div>
                    </div>
                </div>
                <div className='me'>
                    <div className='title'>
                        <h1>Về chúng tôi</h1>
                    </div>
                    <div className='titleme'>
                        <div className='viewleft'>
                            <div className='viewh6'>
                                <h6>BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.</h6>
                            </div>
                            <div className='viewbutton'>
                                <Button className='button'>Xem khoá học</Button>
                                <Button className='button'>Hỗ trợ tư vấn</Button>
                            </div>
                        </div>
                        <div className='viewleft'>
                            <img src={banner2} className='banner2' />
                        </div>
                    </div>
                </div>
            </nav>
            <footer>
                <div className='viewitem'>
                    <div className='title'>
                        <h1>Điểm ưu việt tại BSmart</h1>
                    </div>
                    <div>
                        <div className='viewitemtop'>
                            <div className='item'>
                                <div className='item1'>
                                    <CheckCircleOutlined className='check' />
                                    <p className='txtcheck'>Học theo lộ trình, có định hướng</p>
                                </div>
                                <div>
                                    <h4>
                                        BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                                    </h4>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item1'>
                                    <SettingOutlined className='check' />
                                    <p className='txtcheck'>Nền tảng cốt lõi trong lập trình</p>
                                </div>
                                <div>
                                    <h4>
                                        BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.
                                    </h4>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item1'>
                                    <FireOutlined className='check' />
                                    <p className='txtcheck'>Mài giũa bạn qua thực tế</p>
                                </div>
                                <div>
                                    <h4>
                                        Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='viewitemtop'>
                            <div className='item'>
                                <div className='item1'>
                                    <TeamOutlined className='check' />
                                    <p className='txtcheck'>Mentor tận tâm</p>
                                </div>
                                <div>
                                    <h4>
                                        BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                                    </h4>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item1'>
                                    <QrcodeOutlined className='check' />
                                    <p className='txtcheck'>Công nghệ mới, thực tế</p>
                                </div>
                                <div>
                                    <h4>
                                        BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.
                                    </h4>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item1'>
                                    <TrophyOutlined className='check' />
                                    <p className='txtcheck'>Trao tay chìa khóa thành công</p>
                                </div>
                                <div>
                                    <h4>
                                        Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='title1'>
                    <div className='viewtitle2'>
                        <h1 className='trainganh'>TRÁI NGÀNH</h1>
                        <h5 className='detail'>From Zero to Hero</h5>
                    </div>
                </div>
                <div className='title2'>
                    <div className='viewtitle2'>
                        <h1 className='trainganh'>ĐÃ BIẾT LẬP TRÌNH</h1>
                        <h5 className='detail'>Đã có kiến thức tư duy lập trình và OOP</h5>
                    </div>
                </div>
            </footer>
            <aside>
                <div className='title'>
                    <h1>Khoá học tiêu biểu</h1>
                </div>
                <div className='viewtitlefe'>
                    <h5 className='btn' onClick={goToPrevSlide1}>{'<'}</h5>
                    <div className='slider'>
                        <Slider ref={sliderRef1} {...settings}>
                            {data.map((item, index) => (
                                <div key={index} >
                                    <div className='feindex'>
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
                                            <Button className='btnfe'>Xem chi tiết</Button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                    <h5 className='btn' onClick={goToNextSlide1}>{'>'}</h5>
                </div>
                <div className='title'>
                    <h1>Khoá học cấp tốc</h1>
                </div>
                <div className='viewtitlefe'>
                    <h5 className='btn' onClick={goToPrevSlide1}>{'<'}</h5>
                    <div className='slider'>
                        <Slider ref={sliderRef1} {...settings}>
                            {data.map((item, index) => (
                                <div key={index} >
                                    <div className='feindex'>
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
                                            <Button className='btnfe'>Xem chi tiết</Button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                    <h5 className='btn' onClick={goToNextSlide1}>{'>'}</h5>
                </div>
                <div className='title'>
                    <h1>Mentor tiêu biểu</h1>
                </div>
                <div className='viewtitlefe'>
                    <h5 className='btn' onClick={goToPrevSlide2}>{'<'}</h5>
                    <div className='slider'>
                        <Slider ref={sliderRef2} {...settings}>
                            {data1.map((item, index) => (
                                <div key={index} >
                                    <div className={`fementor`}>
                                        <img className='imgfe' src={item.url} alt="" />
                                        <h3 className='txtcheck1'>{item.mentor}</h3>
                                        <p className='detailfe1'>{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <h5 className='btn' onClick={goToNextSlide2}>{'>'}</h5>
                </div>
            </aside>
            <div className='dinhhuong'>
                <div className='title'>
                    <h3> Định hướng và chuẩn hoá lộ trình học tập</h3>
                </div>
                <div className='title'>
                    <h2>   Học thật, Dự án thật, Mentor tận tâm</h2>
                </div>
                <div className='viewbutton'>
                    <Button className='button'>DANH SÁCH KHOÁ HỌC</Button>
                    <Button className='button'> TƯ VẤN LỘ TRÌNH HỌC</Button>
                </div>
            </div>
            <div style={{ backgroundColor: "#f5f7fc" }}>
                <div className='title'>
                    <h2> Nhận được sự tin tưởng của các đối tác</h2>
                </div>
                <div className='viewtitlefe1'>
                    <div className='slider1'>
                        <Slider ref={sliderRef3} {...settings}>
                            {data2.map((item, index) => (
                                <div key={index} >
                                    <div className={`fementor1`}>
                                        <img className='imgfe1' src={item.url} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
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
                    <p className='viewf'>  <img className='iconf' src={location} alt="" />Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức</p>
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
export default Index;
const data2 = [
    {
        url: "https://bsmart.edu.vn/assets/images/logo-dai-hoc-03.webp",
    }, {
        url: "https://bsmart.edu.vn/assets/images/logo-dai-hoc-01.webp",
    }, {
        url: "https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp",
    }, {
        url: "https://bsmart.edu.vn/assets/images/logo-dai-hoc-02.webp",
    }, {
        url: "https://bsmart.edu.vn/assets/images/logo-dai-hoc-04.webp",
    }
];
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
    title: 'HTML & CSS',
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
const data1 = [{
    url: "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    mentor: 'Phan Nhật Tân',
    detail: "Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập cùng tôi."
}, {
    url: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
    mentor: 'Đỗ Minh Quân',
    detail: "Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công trong lĩnh vực lập trình Front-end."
}, {
    url: "https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp",
    mentor: 'Team STEM Mentor',
    detail: "Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai."
}, {
    url: "https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp",
    mentor: 'Tuấn Anh Phạm',
    detail: "Xin chào! Tôi là Phạm Tuấn Anh - một lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc với các dự án phần mềm và phát triển ứng dụng. Tôi đã từng dẫn dắt nhiều học sinh, sinh viên từ zero đến hero trong lĩnh vực công nghệ thông tin. Tôi tin rằng công nghệ thông tin sẽ tiếp tục phát triển và luôn tìm cách để cập nhật tin tức mới nhất từ ngành."
}, {
    url: "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp",
    mentor: 'Hồ Hồng Minh',
    detail: "Xin chào, tôi là Hồ Hồng Minh. Tôi có hơn 3 năm kinh nghiệm trong việc giảng dạy và mentor cho các học sinh, sinh viên về chuyên ngành kĩ thuật phần mềm. Tôi đã hướng dẫn nhiều dự án và có thể giúp đỡ học sinh và sinh viên thành công trong việc đạt được các mục tiêu học tập và nghề nghiệp của họ. Ngoài ra, tôi cũng đam mê nghiên cứu và đăng ký các bài báo khoa học để chia sẻ các phát hiện và kiến thức mới với cộng đồng. Tôi tin rằng giáo dục là một công cụ mạnh mẽ để đẩy mạnh sự phát triển của cá nhân, cộng đồng, và tôi mong muốn hỗ trợ các học sinh và sinh viên trong việc đạt được sự thành công trong cuộc sống và nghề nghiệp của họ."
}


];