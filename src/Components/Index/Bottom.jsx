import { FacebookOutlined, YoutubeOutlined} from '@ant-design/icons';
import gmail from '../../assets/images/icon-gmail.png';
import phone from '../../assets/images/icon-phone.png';
import bannerfooter from '../../assets/images/icon-logo-footer.png';
import location from '../../assets/images/icon-location.png';
import "../CSSs/Index1.css";
function Bottom() {
    return (
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
    )
}

export default Bottom
