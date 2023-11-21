import banner2 from '../../assets/images/banner-2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "antd";
import "../CSSs/Index1.css";
function Nav() {
    return (
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
    )
}

export default Nav
