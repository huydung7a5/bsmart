import {RightOutlined, LeftOutlined, DatabaseOutlined, TeamOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { data } from '../Database/Data';
import { Button } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Asideitem = () => {
    const sliderRef = useRef(null);
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
                <h5 className='btn' onClick={goToNextSlide}><RightOutlined /></h5>
            </div>
        </aside>
    )
}

export default Asideitem

