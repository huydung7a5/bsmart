import { RightOutlined, ArrowDownOutlined, DatabaseOutlined, TeamOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, Link } from 'react-router-dom';
import { Button, Input, Checkbox, Select } from "antd";
import { data } from '../Database/Data';
import Bottom from '../Index/Bottom';
import { useEffect, useState } from 'react';
import HeaderFE from './HeaderFE';
function IndexFE() {
    const [number, setnumber] = useState(0);
    const [to, setto] = useState("");
    const [moveto, setmoveto] = useState("");
    const [Data, setData] = useState(data);
    const [giohang, setgiohang] = useState(0);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const header = document.querySelector('.headerindextop');
    const [isPriceRangeVisible, setIsPriceRangeVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isLevelVisible, setIsLevelVisible] = useState(false);
    const [isfieldVisible, issetFieldVisible] = useState(false);
    let lastScrollPosition = window.scrollY;
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

    const handleprice = () => {
        setIsPriceRangeVisible(!isPriceRangeVisible);
    }
    const handleform = () => {
        setIsFormVisible(!isFormVisible);
    }
    const handlelevel = () => {
        setIsLevelVisible(!isLevelVisible);
    }
    const handlefield = () => {
        issetFieldVisible(!isfieldVisible);
    }
    window.addEventListener('scroll', handleScroll);
    const handlegiohang = () => {
        alert('Thêm vào giỏ hàng thành công');
        setgiohang(giohang + 1);
    }
    const handlekhoanggia = (e) => {
        const newData = data.filter((item) => item.price >= to && item.price <= moveto);
        setData(newData);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setnumber(data.length);
        });
        return () => clearInterval(interval);
    }, [number]);
    const onchange = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.hinhthuc === 'Online');
            setData(newData);
        } else {
            setData(data);
        }
    }
    const onchange1 = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.hinhthuc === 'Offline');
            setData(newData);
        } else {
            setData(data);
        }
    }
    const onchangekho = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Khó');
            setData(newData);
        } else {
            setData(data);
        }
    }
    const onchangede = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Dễ');
            setData(newData);
        } else {
            setData(data);
        }
    }
    const onchangetrungbinh = (e) => {
        if (e.target.checked) {
            const newData = data.filter((item) => item.trinhdo === 'Trung bình');
            setData(newData);
        } else {
            setData(data);
        }
    }
    const handleChangeSort = (value) => {
        // Cập nhật giá trị đã chọn vào state
        setSelectedSortOption(value);
        // Thực hiện logic lọc tương ứng với giá trị đã chọn
        if (value === '2') {
            const newData = [...Data]; // Tạo một bản sao mới của mảng để tránh thay đổi mảng gốc
            newData.sort((a, b) => b.songuoihoc - a.songuoihoc); // Sắp xếp mảng theo số người học giảm dần
            setData(newData);
        } else if (value === '4') {
            const newData = [...Data];
            newData.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
            setData(newData);
        } else if (value === '5') {
            const newData = [...Data];
            newData.sort((a, b) => b.title.localeCompare(a.title, 'en', { sensitivity: 'base' }));
            setData(newData);
        } else {
            setData(data);
        }
    };
    return (
        <body>
            <HeaderFE />
            <nav>
                <div className='fetitle3'>
                    <div className='viewtitle1'>
                        <h1 className='viewfetitle1'>Danh sách khoá học</h1>
                        <div className='index2'>
                            <div className='itemfe1'>Trang chủ</div>
                            <div><RightOutlined /></div>
                            <div className='itemfe'>Khoá học</div>
                        </div>

                    </div>
                </div>
            </nav>
            <div className='fef'>
                <div className='feleft'>
                    <div className='gia1'>Khoảng giá</div>
                    <div>Từ giá</div>
                    <Input value={to} onChange={(e) => setto(e.target.value)} type='text'></Input>
                    <div>Đến giá</div>
                    <Input value={moveto} onChange={(e) => setmoveto(e.target.value)} type='text'></Input>
                    <div className='gia1'>Hình thức học</div>
                    <div>
                        <Checkbox className='Checkbox' onChange={onchange} >Online</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox' onChange={onchange1} >Offine</Checkbox>
                    </div>
                    <div className='gia1'>Trình độ</div>
                    <div>
                        <Checkbox onChange={onchangede}>Dễ</Checkbox>
                    </div>
                    <div>
                        <Checkbox onChange={onchangetrungbinh}>Trung bình</Checkbox>
                    </div>
                    <div>
                        <Checkbox onChange={onchangekho}>Khó</Checkbox>
                    </div>
                    <div>
                        <Checkbox>Cực khó</Checkbox>
                    </div>
                    <div className='gia1'>Lĩnh vực</div>
                    <div>
                        <Checkbox className='Checkbox'>Back-End</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox'>Front-End</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox'>Database</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox'>Cấp tốc</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox'>Other</Checkbox>
                    </div>
                    <div>
                        <Checkbox className='Checkbox'>System</Checkbox>
                    </div>
                    <Button className='btntimkiem' onClick={handlekhoanggia}>Tìm kiếm</Button>
                </div>
                <div className='feleftmobile'>
                    <div className='khoangcah4'>
                        <h3 className='arr1' onClick={handleprice}><ArrowDownOutlined className='arr' /> KHOẢNG GIÁ
                        </h3>
                        {isPriceRangeVisible && (
                            <div>
                                <div>Từ giá</div>
                                <Input value={to} onChange={(e) => setto(e.target.value)} type='text'></Input>
                                <div>Đến giá</div>
                                <Input value={moveto} onChange={(e) => setmoveto(e.target.value)} type='text'></Input>
                            </div>
                        )}
                    </div>
                    <div className='khoangcah4'>
                        <h3 className='arr1' onClick={handleform}><ArrowDownOutlined className='arr' /> HÌNH THỨC HỌC</h3>
                        {isFormVisible && (
                            <div>
                                <div>
                                    <Checkbox className='Checkbox' onChange={onchange} >Online</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox' onChange={onchange1} >Offine</Checkbox>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='khoangcah4'>
                        <h3 className='arr1' onClick={handlelevel}><ArrowDownOutlined className='arr' /> TRÌNH ĐỘ</h3>
                        {isLevelVisible && (
                            <div>
                                <div>
                                    <Checkbox onChange={onchangede}>Dễ</Checkbox>
                                </div>
                                <div>
                                    <Checkbox onChange={onchangetrungbinh}>Trung bình</Checkbox>
                                </div>
                                <div>
                                    <Checkbox onChange={onchangekho}>Khó</Checkbox>
                                </div>
                                <div>
                                    <Checkbox>Cực khó</Checkbox>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='khoangcah4'>
                        <h3 className='arr1' onClick={handlefield}><ArrowDownOutlined className='arr' /> LĨNH VỰC</h3>
                        {isfieldVisible && (
                            <div>
                                <div>
                                    <Checkbox className='Checkbox'>Back-End</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox'>Front-End</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox'>Database</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox'>Cấp tốc</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox'>Other</Checkbox>
                                </div>
                                <div>
                                    <Checkbox className='Checkbox'>System</Checkbox>
                                </div>
                            </div>
                        )}
                    </div>
                    <Button className='btntimkiem' onClick={handlekhoanggia}>Tìm kiếm</Button>
                </div>
                <div className='feright'>
                    <div className='selec'>
                        <div className='khoahoc'>{number} khoá học</div>
                        <Select className='sapxep' onChange={handleChangeSort}
                            defaultValue={{ value: '0', label: 'Sắp xếp khoá học' }}
                            options={[
                                { value: '1', label: 'Khoá học mới nhất' },
                                { value: '2', label: 'Khoá học nhiều người học' },
                                { value: '3', label: 'Khoá học sắp bắt đầu' },
                                { value: '4', label: 'A-Z' },
                                { value: '5', label: 'Z-A' },
                            ]}
                        />

                    </div>
                    <div className='itemfe2'>
                        {Data.map((item, index) => (
                            <div key={index} className='fe1'>
                                <img className='imgfe' src={item.url} alt="" />
                                <h3 className='titlefe'>{item.title}</h3>
                                <div className='mentorfe'>
                                    <div className='khoangcach1'>Mentor</div>
                                    <div className='khoangcach'>{item.mentor}</div>
                                </div>
                                <div className='detailfe2'> <TeamOutlined />{item.songuoihoc} Học viên</div>
                                <div className='detailfe'>{item.detail}</div>
                                <div className='mentorfe1'>
                                    <div className='khoangcach2'> {item.price} VNĐ</div>
                                    <i className='khoangcach3'><DatabaseOutlined /> {item.date} Buổi học</i>
                                </div>
                                <div className='viewfe4'>
                                    <Link to={`/detail/${item.id}`}>
                                        <Button className='btnfe'>Xem chi tiết</Button>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Bottom />
        </body>
    );
}
export default IndexFE;