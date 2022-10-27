import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Image from '../component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div className={cx('footer')}>
                <div className={cx('wrapper')}>
                    <div className={cx('df')}>
                        <Image src="https://theme.hstatic.net/200000393047/1000793205/14/home_brand_image_1.jpg?v=112" />
                        <Image src="https://theme.hstatic.net/200000393047/1000793205/14/home_brand_image_2.jpg?v=112" />
                        <Image src="https://theme.hstatic.net/200000393047/1000793205/14/home_brand_image_3.jpg?v=112" />
                        <Image src="https://theme.hstatic.net/200000393047/1000793205/14/home_brand_image_4.jpg?v=112" />
                        <Image src="https://theme.hstatic.net/200000393047/1000793205/14/home_brand_image_5.jpg?v=1122" />
                    </div>
                    <div className={cx('about-us')}></div>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('address', 'col')}>
                        <Image
                            className={cx('logo')}
                            src="https://theme.hstatic.net/200000393047/1000793205/14/logo_footer.png?v=112"
                        />
                        <span className={cx('line')}>
                            <FontAwesomeIcon icon={faMapLocation} /> Tầng 5 Tòa Tây Hà , 19 Tố Hữu, Trung Văn, Nam Từ
                            Liêm, Hà Nội
                        </span>
                        <span className={cx('line')}>
                            <FontAwesomeIcon icon={faPhone} /> 0963931066
                        </span>
                        <span className={cx('line')}>
                            <FontAwesomeIcon icon={faEnvelope} /> nhasach@edmicro.vn
                        </span>
                    </div>
                    <div className={cx('address', 'col')}>
                        <span className={cx('label')}>Hướng dẫn</span>
                        <ul>
                            <li>
                                <Link>Tìm kiếm</Link>
                            </li>
                            <li>
                                <Link>Giới thiệu</Link>
                            </li>
                            <li>
                                <Link>Chính sách đổi trả</Link>
                            </li>
                            <li>
                                <Link>Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link>Điều khoản dịch vụ</Link>
                            </li>
                            <li>
                                <Link>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('address', 'col')}>
                        <span className={cx('label')}>Chính sách</span>
                        <ul>
                            <li>
                                <Link>Tìm kiếm</Link>
                            </li>
                            <li>
                                <Link>Giới thiệu</Link>
                            </li>
                            <li>
                                <Link>Chính sách đổi trả</Link>
                            </li>
                            <li>
                                <Link>Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link>Điều khoản dịch vụ</Link>
                            </li>
                            <li>
                                <Link>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('address', 'col')}>
                        <span className={cx('label')}>Đăng kí nhận Email</span>
                        <span>Hãy nhập email của bạn vào đây để nhận tin mới nhất!</span>
                        <div className={cx('input')}>
                            <input type="email" placeholder="Nhập email..." />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>
                </div>
                <div className={cx('pay-transport')}>
                    <div className={cx('pay')}>
                        <span>PHƯƠNG THỨC THANH TOÁN</span>
                        <div className="box-img">
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_payment_item_1.png?v=112"
                            />
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_payment_item_2.png?v=112"
                            />
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_payment_item_4.png?v=112"
                            />
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_payment_item_5.png?v=112"
                            />
                        </div>
                    </div>
                    <div className={cx('transport')}>
                        <span>PHƯƠNG THỨC VẬN CHUYỂN</span>
                        <div className="box-img">
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_transport_item_1.png?v=112"
                            />
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_transport_item_2.png?v=112"
                            />
                            <Image
                                className={cx('img')}
                                src="https://theme.hstatic.net/200000393047/1000793205/14/img_transport_item_3.png?v=112"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copy-right')}>
                <span>Copyright © 2022 Nhà sách ôn luyện. Clone by Carolo Lương Khoa</span>
            </div>
        </>
    );
}

export default Footer;
