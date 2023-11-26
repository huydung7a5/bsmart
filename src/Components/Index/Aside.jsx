import {  LeftOutlined, RightOutlined, DatabaseOutlined, TeamOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "antd";
import React, { useRef } from 'react';
import "../CSSs/Index1.css";
import { data, data1 } from '../Database/Data';
function Aside() {
    const sliderRef = useRef(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    let initialSlidesToShow = calculateSlidesToShow();
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
    return (
        <aside>
            <div className='title'>
                <h1>Khoá học tiêu biểu</h1>
            </div>
            <div className='viewtitlefe'>
                <h5 className='btn' onClick={goToPrevSlide}><LeftOutlined /></h5>
                <div className='slider'>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div key={index} >
                                <div className='feindex'>
                                    <img className='imgfe' src={item.url} alt="" />
                                    <h3 className='titlefe'>{item.title}</h3>
                                    <p className='mentorfe'>
                                        <p className='khoangcach1'>Mentor</p>
                                        <p className='khoangcach'>{item.mentor}</p>
                                    </p>
                                    <p className='detailfe2'> <TeamOutlined />{item.songuoihoc} Học viên</p>
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
                <h5 className='btn' onClick={goToNextSlide}><RightOutlined /></h5>
            </div>
            <div className='title'>
                <h1>Khoá học cấp tốc</h1>
            </div>
            <div className='viewtitlefe'>
                <h5 className='btn' onClick={goToPrevSlide1}><LeftOutlined /></h5>
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
                                    <p className='detailfe2'> <TeamOutlined />{item.songuoihoc} Học viên</p>
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
                <h5 className='btn' onClick={goToNextSlide1}><RightOutlined /></h5>
            </div>
            <div className='title'>
                <h1>Mentor tiêu biểu</h1>
            </div>
            <div className='viewtitlefe'>
                <h5 className='btn' onClick={goToPrevSlide2}><LeftOutlined /></h5>
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
                <h5 className='btn' onClick={goToNextSlide2}><RightOutlined /></h5>
            </div>
        </aside>
    )
}
export default Aside

