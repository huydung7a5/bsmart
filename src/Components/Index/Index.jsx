import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button} from "antd";
import "../CSSs/Index1.css";
import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Bottom from './Bottom';
import Nav from './Nav';
import Footer from './Footer';
import Aside from './Aside';
import {data2} from '../Database/Data';

function Index() {
    let initialSlidesToShow = calculateSlidesToShow();
    const [seconds, setSeconds] = useState(4);
    const header = document.querySelector('.headerindextop');
    let lastScrollPosition = window.scrollY;
    const  handleScroll = () =>{
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
    return (
        <body>
            <Header />
            <Nav />
            <Footer />
            <Aside />
            <div className='dinhhuong'>
                <div className='title'>
                    <h2> Định hướng và chuẩn hoá lộ trình học tập</h2>
                </div>
                <div className='title'>
                    <div>Học thật, Dự án thật, Mentor tận tâm</div>
                </div>
                <div className='viewbutton'>
                    <Button className='button'>DANH SÁCH KHOÁ HỌC</Button>
                    <Button className='button'> TƯ VẤN LỘ TRÌNH HỌC</Button>
                </div>
            </div>
            <div style={{ backgroundColor: "#f5f7fc" }}>
                <div className='title'>
                    <h1> Nhận được sự tin tưởng của các đối tác</h1>
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
            <Bottom />
        </body>
    );
}
export default Index;