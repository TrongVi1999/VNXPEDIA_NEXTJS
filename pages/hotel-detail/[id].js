import a1 from '@/public/a1.png';
import a2 from '@/public/a2.png';
import a3 from '@/public/a3.png';
import a4 from '@/public/a4.png';
import { banners } from '@/public/images';
import style from '@/styles/Hoteldetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Hotelbook from '@/views/BookHotel';
import Imglist from '@/views/Tourdetail/Imglist';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GetHotel } from '../api/CallAPI';
import { Section } from '@/components';
import Hotelcard from '@/views/HotelCard/Hotelcard';




const cx = classNames.bind(style);

const Index = () => {
    const [book, setbook] = useState(false);
    const [Data, setdata] = useState();
    const router = useRouter();
    const data = {
        img: a1,
        title: 'HA LONG BAY DAY CRUISE - PARADISE EXPLORER',
        price: 200000000,
    }
    const CallAPI = async () => {
        const response = await GetHotel(router.query.id);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }
    useEffect(() => {
        CallAPI();
    }, [router.query.id]);
    console.log(Data);

    return (
        <div>
            {Data && Data.length > 0 && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.hoteldetail} title={Data[0].title} bg='bg' />
                {book ? <Hotelbook click={setbook} hotel={Data[0].title} /> : <div className={cx('container')}>
                    <Imglist data={[`https://vnxpedia.3i.com.vn${Data[0].gallery}`, a2, a3, a4]} issv={false} />

                    <div className={cx('des')}>
                        <h2>Khu nghỉ dưỡng AMANOI Ninh Thuận</h2>
                        <div className={cx('star')}>

                            <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                            <p className={cx('address')}><CiLocationOn />
                                {Data[0].intro_text.split('|')[0]}
                                {/* Làng Vĩnh Hy, Xã Vĩnh Hải, Huyện Ninh Hải, Ninh Thuận, Việt Nam */}
                            </p>
                            <p>{Data[0].intro_text.split('|')[1]}
                                {/* Amanoi là tên gọi khởi nguồn từ sự kết hợp khéo léo của 	&quot;aman	&quot; - nghĩa là 	&quot;bình yên	&quot; theo tiếng Sanskrit và 	&quot;nơi	&quot; - ý chỉ 	&quot;chỗ lưu trú	&quot; trong tiếng Việt. Đến với Amanoi Ninh Thuận, điều các thượng khách nhận được không phải là dịch vụ nghỉ dưỡng thông thường mà là sự phục vụ đẳng cấp từ cơ sở vật chất đến tất cả tâm huyết của đội ngũ nhân viên - những người được đào tạo chuyên nghiệp để mang đến cho thượng khách cảm giác được trân trọng trên từng bước chân. Nằm trong lòng vườn quốc gia Núi Chúa, với vị thế đắc địa vừa có hồ vừa có biển, khu nghỉ dưỡng cung cấp rất nhiều hoạt động thể thao kết hợp với thiên nhiên như yoga trong lành giữa lòng sông, chèo thuyền kayak, lặn biển,... đặc biệt chỉ có tại Amanoi, cung đường trekking tự nhiên theo cấp độ sẽ làm thỏa mãn các thượng khách muốn chinh phục giới hạn.

                                Cầu hôn tại Amanoi cũng là một ý tưởng tuyệt vời - với một mức giá không thể tốt hơn tại iVIVU - thượng khách hoàn toàn có thể mang đến cho người bạn đời một kỉ niệm không thể nào quên.
                                Hãy đến Amanoi Ninh Thuận một lần trong đời để tận hưởng trải nghiệm kỳ nghỉ vượt xa hơn cả mong đợi ! */}
                            </p>

                            <button onClick={() => setbook(true)}>BOOK NOW <span className={cx('hr-left')}></span> <BsCheckLg /></button>
                        </div>
                    </div>

                    <div className={cx('main-hotel')} dangerouslySetInnerHTML={{ __html: Data[0].full_text }}></div>

                    <h2>Siminal Hotels</h2>
                    <div className={cx('Siminal-Hotel')}>
                        <Link href={`/hotel-detail/5258`} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>$ {data.price}</span>

                                </p>
                            </div>
                        </Link>
                        <Link href={`/hotel-detail/5258`} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>	&#36; {data.price}</span>

                                </p>
                            </div>
                        </Link>
                        <Link href={`/hotel-detail/5258`} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>$ {data.price}</span>

                                </p>
                            </div>
                        </Link>
                        {/* <Section maxWidth={1170} isWrap gapBox={3.2}>
                            {
                                Data && Data.map((d) => (
                                    <Hotelcard data={d} key={d} to={`/transfer-detail/${d.id}`} />
                                ))
                            }
                        </Section> */}
                    </div>
                </div>
                }
            </div>}
        </div>
    )
}

export default Index