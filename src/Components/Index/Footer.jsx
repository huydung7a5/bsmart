import { CheckCircleOutlined, SettingOutlined, FireOutlined, TeamOutlined, QrcodeOutlined, TrophyOutlined } from '@ant-design/icons';
import "../CSSs/Index1.css";
function Footer() {
    return (
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
                                <h3>
                                    BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                                </h3>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item1'>
                                <SettingOutlined className='check' />
                                <p className='txtcheck'>Nền tảng cốt lõi trong lập trình</p>
                            </div>
                            <div>
                                <h3>
                                    BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.
                                </h3>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item1'>
                                <FireOutlined className='check' />
                                <p className='txtcheck'>Mài giũa bạn qua thực tế</p>
                            </div>
                            <div>
                                <h3>
                                    Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                                </h3>
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
                                <h3>
                                    BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                                </h3>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item1'>
                                <QrcodeOutlined className='check' />
                                <p className='txtcheck'>Công nghệ mới, thực tế</p>
                            </div>
                            <div>
                                <h3>
                                    BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.
                                </h3>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item1'>
                                <TrophyOutlined className='check' />
                                <p className='txtcheck'>Trao tay chìa khóa thành công</p>
                            </div>
                            <div>
                                <h3>
                                    Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                                </h3>
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
    )
}
export default Footer

