import { FacebookOutlined, YoutubeOutlined, CheckCircleOutlined, SettingOutlined, FireOutlined, TeamOutlined, QrcodeOutlined, TrophyOutlined } from '@ant-design/icons';
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
import { Button, Input, } from "antd";
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
                                    <Link className='link' to={"/frontend"}>Frontend</Link>
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
                <div>
                    <div className='title'>
                        <h1>Khoá học tiêu biểu</h1>
                    </div>
                    <div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </aside>
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


export default Index;
