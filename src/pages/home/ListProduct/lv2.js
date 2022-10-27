import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import * as data from '@/data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Image from '@/layout/component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '@/layout/component/ProductItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function StudyForTest() {
    const [fillter, setFillter] = useState('cấp tốc');
    const [tab, setTab] = useState(1);
    SwiperCore.use([Autoplay]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Sách tham khảo cấp 2</h2>
                <div className={cx('right')}>
                    <div className={cx('tabs')}>
                        {data.studyForTest.map((item, index) => (
                            <span
                                onClick={() => {
                                    setFillter(item.fill);
                                    setTab(item.tab);
                                }}
                                key={index}
                                className={tab === item.tab ? cx('active-tab', 'tab') : cx('tab')}
                            >
                                <span>{item.title}</span>
                            </span>
                        ))}
                    </div>
                    <Link className={cx('tab')}>
                        <span className={cx('all')}>Xem tất cả</span>
                    </Link>
                </div>
            </div>
            <div className={cx('img-box')}>
                <Image
                    className={cx('img-thumb')}
                    src="https://theme.hstatic.net/200000393047/1000793205/14/5_banner_htp_1.jpg?v=112"
                />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className={cx('slide-list')}
                spaceBetween={0}
                slidesPerView={5}
                loop="true"
                navigation={{
                    prevEl: '.prev-list',
                    nextEl: '.next-list',
                }}
                autoplay={{ delay: 3000 }}
            >
                {data.Products.filter((newListItem) => newListItem.type.includes(fillter)).map((newListItem, index) => (
                    <SwiperSlide key={index} className={cx('slider')}>
                        <ProductItem
                            to={newListItem.to}
                            srcImg={newListItem.img}
                            name={newListItem.title}
                            currentPrice={newListItem.currentPrice}
                            salePrice={newListItem.salePrice}
                            amount={newListItem.amount}
                        />
                    </SwiperSlide>
                ))}
                <div className="prev-list">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="next-list">
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </Swiper>
        </div>
    );
}

export default StudyForTest;
