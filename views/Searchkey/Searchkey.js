import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';

import { Searchtour, Searchblog } from '@/pages/api/QuerryAPI';

const cx = classNames.bind(style);

const Searchkey = () => {

    const [keyword, setkeyword] = useState();

    const tourSearch = Searchtour(keyword);
    const blogSearch = Searchblog(keyword);
    useEffect(() => {
        if (keyword !== '') {
            tourSearch.refetch();
            blogSearch.refetch()
        }
    }, [keyword])
    return (
        <div className={cx('searchkey-container')}>
            <input type='text' className={cx('input')} onChange={(e) => setkeyword(e.target.value)} placeholder='Type keyword here' />
            <div className={cx('result')}>
                {tourSearch.data && tourSearch.data.length > 0 &&
                    <div className={cx('result-div')}>
                        <p className={cx('p')}>Tour result</p>
                        {tourSearch.data.map((d, i) =>
                            <Link href={`/tour-detail/${d.TourCode}`} className={cx('result-tour')} key={i}>
                                <Image src={`https://vnxpedia.3i.com.vn${d.HightlightImg}`} alt="vnxpedia-tour-img" className={cx('img')} width='500' height='500' />
                                <p>{d.TourName.toUpperCase()}</p>
                            </Link>

                        )}</div>}

                {blogSearch.data && blogSearch.data.length > 0 &&
                    <div className={cx('result-div')}>
                        <p className={cx('p')}> Blog result</p>
                        {blogSearch.data.map((d, i) =>
                            <Link href={`/tour-detail/${d.id}`} className={cx('result-tour')} key={i}>
                                <Image src={`https://vnxpedia.3i.com.vn${d.gallery}`} alt="vnxpedia-tour-img" className={cx('img')} width='500' height='500' />
                                <p>{d.title.toUpperCase()}</p>
                            </Link>

                        )}</div>}
            </div>
        </div>
    )
}

export default Searchkey