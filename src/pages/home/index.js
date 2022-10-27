import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '@/layout/component/Image';
import FsItem from '@/layout/component/FsItem';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as data from '@/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ListNew from './ListProduct/new';
import StudyForTest from './ListProduct/studyForTest';
import ClassTen from './ListProduct/class10';
import ClassElv from './ListProduct/class11';
import LvTwo from './ListProduct/lv2';
import NewItem from '@/layout/component/NewsItem';

const cx = classNames.bind(styles);

function Home() {
    SwiperCore.use([Autoplay]);

    const [time, setTime] = useState(604799);

    useEffect(() => {
        const i_id = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
        return () => {
            clearInterval(i_id);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className={cx('slide-content')}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop="true"
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    autoplay={{ delay: 3000 }}
                >
                    {data.Slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image key={index} className={cx('img-slide')} src={item} />
                        </SwiperSlide>
                    ))}
                    <div className="prev">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className="next">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </Swiper>
                <Image
                    className={cx('img-ads-slider')}
                    src="https://theme.hstatic.net/200000393047/1000793205/14/home_banner_slide_right.jpg?v=112"
                />
            </div>
            <div className={cx('menu-endow')}>
                {data.MenuEndow.map((item, index) => (
                    <Link key={index} to={item.to} className={cx('menu-endow__item')}>
                        <Image src={item.img} className={cx('img-endow')} />
                        <span className={cx('span-endow')}>{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className={cx('flash-sale')}>
                <div className={cx('fs-header')}>
                    <Image
                        className={cx('img-fs')}
                        src="https://www.pngall.com/wp-content/uploads/2/Flash-Sale-PNG-Images.png"
                    />
                    <div className={cx('time-cd')}>
                        <span className={cx('time', 'hours')}>
                            {Math.floor(time / 60 / 60 / 24) < 10
                                ? `0${Math.floor(time / 60 / 60 / 24)}`
                                : Math.floor(time / 60 / 60 / 24)}
                        </span>
                        <span>:</span>
                        <span className={cx('time')}>{Math.floor((time / 3600) % 24)}</span>
                        <span>:</span>
                        <span className={cx('time')}>{Math.floor((time / 60) % 60)}</span>
                        <span>:</span>
                        <span className={cx('time')}>
                            {Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)}
                        </span>
                    </div>
                </div>
                <div className="fs-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className={cx('fs-slide-content')}
                        spaceBetween={0}
                        slidesPerView={5}
                        loop="true"
                        navigation={{
                            prevEl: '.prev-fs',
                            nextEl: '.next-fs',
                        }}
                        autoplay={{ delay: 3000 }}
                    >
                        {data.Products.filter((show) => show.show.includes('1')).map((filteredType, index) => (
                            <SwiperSlide key={index}>
                                <FsItem
                                    srcImg={filteredType.img}
                                    name={filteredType.title}
                                    salePrice={filteredType.salePrice}
                                    currentPrice={filteredType.currentPrice}
                                    race={filteredType.race}
                                    amount={filteredType.amount}
                                    to={filteredType.to}
                                />
                            </SwiperSlide>
                        ))}
                        <div className="prev-fs">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="next-fs">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className={cx('featured-list')}>
                <div className={cx('featured-list__header')}>
                    <h2>DANH MỤC NỔI BẬC</h2>
                </div>
                <div className={cx('featured-list__body')}>
                    {data.FeaturedList.map((item, index) => (
                        <Link to={item.to} key={index} className={cx('featured-list__item')}>
                            <Image className={cx('img-featured-list')} src={item.img} />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={cx('ads')}>
                {data.Ads.map((item, index) => (
                    <Link key={index} className={cx('img-ads', 'hover')}>
                        <Image src={item} />
                    </Link>
                ))}
            </div>
            <ListNew />
            <StudyForTest />
            <ClassElv />
            <ClassTen />
            <LvTwo />
            <div className={cx('news')}>
                <div className={cx('news-header')}>
                    <h2>TIN TỨC MỚI NHẤT</h2>
                </div>
                <div className={cx('news-body')}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className={cx('fs-slide-content')}
                        spaceBetween={0}
                        slidesPerView={3}
                        loop="true"
                        navigation={{
                            prevEl: '.prev-fs',
                            nextEl: '.next-fs',
                        }}
                        autoplay={{ delay: 3000 }}
                    >
                        {data.News.map((item, index) => (
                            <SwiperSlide key={index}>
                                <NewItem
                                    summary={item.summary}
                                    title={item.title}
                                    img={item.img}
                                    time={item.time}
                                    author={item.author}
                                />
                            </SwiperSlide>
                        ))}
                        <div className="prev-fs">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="next-fs">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className={cx('menu-endow')}>
                {data.VS.map((item, index) => (
                    <Link key={index} to={item.to} className={cx('menu-endow__item')}>
                        <Image src={item.img} className={cx('img-vs')} />
                        <span className={cx('span-endow')}>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
