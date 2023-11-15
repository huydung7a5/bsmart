import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import logo from '../../assets/images/icon-logo.png';
import shoping from '../../assets/images/icon-shopping-cart.png';
import banner from '../../assets/images/banner.png';
import background from '../../assets/images/background.png';
import { Button, Input } from "antd";
import "./Index1.css";
function Index() {
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
                                    <p>Đăng kí </p>
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
                        <li className='menu1'>Khoá Học</li>
                        <li className='menu1'>Mentor</li>
                        <li className='menu1'>Blog</li>
                    </ul>
                    <div className='soping'>
                        <img className='shopingcard' src={shoping} alt="" />
                    </div>
                </div>
            </header>
            <nav>
                <div className='viewnav'>
                    <img src={banner} className='banner' />
                </div>
                <div className='viewbackground'>
                    <img src={background} className='banner' />
                </div>
                
            </nav>
        </body>
    );
}


export default Index;
