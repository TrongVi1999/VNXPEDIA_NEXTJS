import classNames from "classnames/bind";
import style from './booking.module.scss';

import Image from "next/image";
const cx = classNames.bind(style)

function ItemBookingUser({
    img,
    data,
    toggle,
    setData
}) {

    return (
        <div className={cx('wrapperItem')} onClick={() => { toggle(true); setData(data) }}>
            <div className={cx('boxImg')}>
                <Image src={img} alt='imgError' className={cx('img')} />
            </div>
            <div className={cx('boxContent')}>
                {data.TourName && <h2 className={cx('titleTour')}>{data.TourName}</h2>}
                <div className={cx('boxInfoTour')}>
                    <span>Booking number: {data.Id}</span>
                    {data.Type == 'HOTEL' ? <span>CheckIn: {data.CheckIn} <br /> CheckOut: {data.CheckOut}</span> : <span>Time: {data.StartDate}</span>}
                    <span>Type: {data.Type}</span>
                </div>
            </div>
            <div className={cx('status', { [data.Status]: data.Status })}>
                <span>
                    {data.Status ? data.Status : 'BOOKED'}
                </span>
            </div>
        </div>
    );
}

export default ItemBookingUser;