import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Location.module.scss';

const cx = classNames.bind(style);
const Location = () => {
    const [Localist, setLocalist] = useState([]);
    const callApiLocation = async () => {
        const response = await axios({
            method: 'post',
            url: `https://vnxpedia.3i.com.vn/TravelAPI/GetItemLocation?language=en_US&hastag=vietnam_destination`,
            type: 'json',
        });

        if (response.status === 200) {
            setLocalist(response.data);
        }
    };
    useEffect(() => {
        callApiLocation();
    }, []);
    console.log(Localist);
    return (
        <div className={cx('container')}>
            <br />
            <h1 className={cx('tag')}>SOUTH EAST & MEKONG RIVER DELTA</h1>
            {Localist.length > 0 && (
                <div className={cx('title-card')}>
                    {Localist.filter((f) => f.hash_tag.includes('SOUTH_EAST&MEKONG_RIVER_DELTA')).map((d, i) =>
                    (<div className={cx('title-card-item')} key={i}>

                        <Image
                            src={`https://vnxpedia.3i.com.vn${d.gallery}`}
                            width='1000'
                            height='1000'
                            className={cx('img')}
                            alt='img-Location'
                        ></Image>
                        <a href="" className={cx('h3')}>
                            <h3>{d.title}</h3>
                        </a>
                        <p>{d.intro_text}</p>
                    </div>)
                    )}
                </div>
            )}
            <br />
            <h1 className={cx('tag')}>SOUTH CENTRAL COAST</h1>
            {Localist.length > 0 && (
                <div className={cx('title-card')}>
                    {Localist.filter((f) => f.hash_tag.includes('SOUTH_CENTRAL_COAST')).map((d, i) => (
                        <div className={cx('title-card-item')} key={i}>
                            <Image
                                src={`https://vnxpedia.3i.com.vn${d.gallery}`}
                                width='1000'
                                height='1000'
                                className={cx('img')}
                                alt='img-Location'
                            ></Image>
                            <a href="" className={cx('h3')}>
                                <h3>{d.title}</h3>
                            </a>
                            <p>{d.intro_text}</p>
                        </div>
                    ))}
                </div>
            )}
            <br />
            <h1 className={cx('tag')}>NORTH CENTRAL COAST</h1>
            {Localist.length > 0 && (
                <div className={cx('title-card')}>
                    {Localist.filter((f) => f.hash_tag.includes('NORTH_CENTRAL_COAST')).map((d, i) => (
                        <div className={cx('title-card-item')} key={i}>
                            <Image
                                src={`https://vnxpedia.3i.com.vn${d.gallery}`}
                                width='1000'
                                height='1000'
                                className={cx('img')}
                                alt='img-Location'
                            ></Image>
                            <a href="" className={cx('h3')}>
                                <h3>{d.title}</h3>
                            </a>
                            <p>{d.intro_text}</p>
                        </div>
                    ))}
                </div>
            )}

            <br />
            <h1 className={cx('tag')}>RED RIVER DELTA</h1>

            {Localist.length > 0 && (
                <div className={cx('title-card')}>
                    {Localist.filter((f) => f.hash_tag.includes('RED_RIVER_DELTA')).map((d, i) => (
                        <div className={cx('title-card-item')} key={i}>

                            <Image
                                src={`https://vnxpedia.3i.com.vn${d.gallery}`}
                                width='1000'
                                height='1000'
                                className={cx('img')}
                                alt='img-Location'
                            ></Image>
                            <a href="" className={cx('h3')}>
                                <h3>{d.title}</h3>
                            </a>
                            <p>{d.intro_text}</p>
                        </div>
                    ))}
                </div>
            )}

            <br />
            <h1 className={cx('tag')}>NORTH WEST</h1>

            {Localist.length > 0 && (
                <div className={cx('title-card')}>
                    {Localist.filter((f) => f.hash_tag.includes('NORTH_WEST')).map((d, i) => (
                        <div className={cx('title-card-item')} key={i}>
                            <a href="" className={cx('h3')}>
                                <h3>{d.title}</h3>
                            </a>
                            <Image
                                src={`https://vnxpedia.3i.com.vn${d.gallery}`}
                                width='1000'
                                height='1000'
                                className={cx('img')}
                                alt='img-Location'
                            ></Image>
                            <p>{d.intro_text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Location;
