import React from 'react';
import classNames from 'classnames/bind';
import style from './banner.module.scss';
import Image from 'next/image';

const cx = classNames.bind(style);

const Banner = ({ image, className, title, description }) => {
    return (
        <>
            {/* <Image
                src={image.default.blurDataURL}
                alt="bannerError"
                className={cx('banner', { [className]: className })}
                // width={100}
                // height={40}
                priority
            /> */}
            <Image src={image.default.src} alt="banner" className={cx('banner', { [className]: className })} width='2000' height='2000' />
        </>
    );
};

export default Banner;
