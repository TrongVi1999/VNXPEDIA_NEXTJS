import Loading from '@/components/Loading';
import { banners } from '@/public/images';
import a2 from '@/public/oto2.png';
import a3 from '@/public/oto3.png';
import a4 from '@/public/oto4.png';
import style from '@/styles/transferDetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Bookairport from '@/views/BookAirport/BookAirport';
import Crumb from '@/views/Crumb/Crumb';
import Imglist from '@/views/Tourdetail/Imglist';
import TransListDetail from '@/views/TransDetail';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetLuxservice } from '../api/QuerryAPI';
import Headpage from '@/components/Head/head';
import { GetlistImg } from '@/hook/GetListImg';
import { Title } from '@/components';

const cx = classNames.bind(style);

const index = () => {
    const [book, setbook] = useState(false);
    const router = useRouter();
    const transferData = GetLuxservice(router.query.id);
    const onChangePag = (page) => {
        setcurrent(Tourresult.slice((page - 1) * 9, page * 9));
    };
    if (transferData.isLoading) {
        return <Loading />;
    }

    if (transferData.error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div>
            <Headpage />
            {transferData.data && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.transferDetail} title='LUXURY TRANSFER' bg='bg' />
                {book ? <Bookairport click={setbook} transfer={transferData.data.Object[0].title} typecar={'SEDAN'} /> :
                    <div className={cx('container')}>
                        <Crumb text='Luxury Transfer | Vehicles Mercedes' />
                        {transferData.data.Object[0] && <Imglist data={GetlistImg(transferData.data.Object[0].gallery)} />}
                        <div className={cx('des')}>
                            <h2>{transferData.data.Object[0].title}</h2>
                            <p>{transferData.data.Object[0].intro_text}</p>

                        </div>

                        <Title text='Technical specifications' align='center' />
                        <div className={cx('box')} dangerouslySetInnerHTML={{
                            __html: transferData.data.Object[0].full_text,
                        }}>

                            {/* <table>
                                <tr>
                                    <p>Engine: <span>2.143 cm3</span><br />
                                        Airbags: <span>8</span><br />
                                        Air conditioning: <span>Yes</span><br />
                                        Interrior Color: <span>Lite-Gray</span><br />
                                        Seats: <span>6</span></p>
                                </tr>
                                <tr>
                                    <p>Types: <span>2143 cm3</span><br /></p>
                                    <p>Doors: <span>4</span><br /></p>
                                    <p>Interior: <span>Leather</span><br /></p>
                                    <p>Entertainment: <span>CD/DVD Player I Radio | Microcomputer</span><br /></p>
                                </tr>
                                <tr>
                                    <p>Model: <span>Mercedes-Benz AMG COUPE</span><br /></p>
                                    <p>Roof type: <span>Simple</span><br /></p>
                                    <p>Smoking: <span>Prohubited</span><br /></p>
                                    <p>Big/Small suitcases: <span>8/8</span><br /></p>
                                    <p>Year: <span>2014</span></p>
                                </tr>
                            </table> */}
                        </div>
                        <div className={cx('book')}>

                            <button onClick={() => setbook(true)}>BOOK NOW</button>

                        </div>
                        <h2>Similar Vehicles</h2>


                        <TransListDetail />

                    </div>}
            </div>}
        </div>)
}

export default index