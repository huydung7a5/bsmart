
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Index1.css";
import { useState, useRef } from 'react';
import { Button } from 'antd';
function Test() {




    // Slick settings
    const sliderRef = useRef(null);
    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
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
        <body>

            <aside>
                <div>
                    <div className='title'>
                        <h1>Khoá học tiêu biểu</h1>
                    </div>
                    <div style={{ width: 300 }}>
                        <Slider ref={sliderRef} {...settings}>
                            <div className='slide'>
                                <div className='slide-img'>
                                    <img src='https://i.udemycdn.com/course/240x135/567828_67d0.jpg' />
                                </div>
                                <div className='slide-title'>
                                    <h3>React JS</h3>
                                </div>
                                <div className='slide-button'>
                                    <Button type="primary" shape="round" size="large" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Xem thêm</Button>
                                </div>
                            </div>
                            <div className='slide'>
                                <div className='slide-img'>
                                    <img src='https://i.udemycdn.com/course/240x135/625204_436a_2.jpg' />
                                </div>
                                <div className='slide-title'>
                                    <h3>Node JS</h3>
                                </div>
                                <div className='slide-button'>
                                    <Button type="primary" shape="round" size="large" href="https://www.udemy.com/course/nodejs-the-complete-guide/">Xem thêm</Button>
                                </div>
                            </div>
                            <div className='slide'>
                                <div className='slide-img'>
                                    <img src='https://i.udemycdn.com/course/240x135/756150_c033_2.jpg' />
                                </div>
                                <div className='slide-title'>
                                    <h3>Angular</h3>
                                </div>
                                <div className='slide-button'>
                                    <Button type="primary" shape="round" size="large" href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">Xem thêm</Button>
                                </div>
                            </div>
                            <div className='slide'>
                                <div className='slide-img'>
                                    <img src='https://i.udemycdn.com/course/240x135/756150_c033_2.jpg' />
                                </div>
                                <div className='slide-title'>
                                    <h3>Angular</h3>
                                </div>
                                <div className='slide-button'>
                                    <Button type="primary" shape="round" size="large" href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">Xem thêm</Button>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </aside>

        </body>
    );
}


export default Test;
