import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '@/layout/component/Image';
import images from '@/assets/img';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '@/layout/component/Button';
import * as data from '@/data';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '@/layout/component/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [login, setLogin] = useState(false);
    const [modal, setModal] = useState(false);
    const [tab, setTab] = useState(1);
    const [tabNav, setTabNav] = useState(1);
    const [numCart, setNumCart] = useState(1);

    const handleLogout = () => {
        setLogin(false);
    };

    const handleOpenModalLogin = () => {
        setModal(true);
        setTab(1);
    };

    const handleOpenModalRegister = () => {
        setModal(true);
        setTab(2);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleLoginTab = () => {
        setTab(1);
    };

    const handleRegisterTab = () => {
        setTab(2);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__header-main')}>
                <div className={cx('center', 'header-main')}>
                    <Link to="/">
                        <Image src={images.loGo} />
                    </Link>
                    <Search className={cx('btn-search')} />
                    <div className={cx('user')}>
                        {login ? (
                            <div className={cx('sign-in', 'text')}>
                                <Tippy
                                    interactive="true"
                                    delay={[0, 500]}
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <Wrapper>
                                                {data.ActionUser.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        to={item.to}
                                                        className={cx('item-popper')}
                                                        onClick={item.onClick}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <p className={cx('item-popper')} onClick={handleLogout}>
                                                    Đăng xuất
                                                </p>
                                            </Wrapper>
                                        </div>
                                    )}
                                >
                                    <span className={cx('cursor-point')}>
                                        <span onClick={handleOpenModalLogin}>Xin Chào!</span>
                                        <span> {data.User.name}</span>
                                    </span>
                                </Tippy>
                            </div>
                        ) : (
                            <div className={cx('sign-in', 'text')}>
                                <span>
                                    <span className={cx('span-login')} onClick={handleOpenModalLogin}>
                                        Đăng nhập
                                    </span>
                                    <span> / </span>
                                    <span className={cx('span-register')} onClick={handleOpenModalRegister}>
                                        Đăng ký
                                    </span>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={cx('cart')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                        <span className={cx('num-product')}>{numCart}</span>
                        <span className={cx('text')}>Giỏ hàng</span>
                    </div>
                    {modal && (
                        <div className={cx('overlay')}>
                            <div className={cx('modal-user')}>
                                <button className={cx('btn-close__modal-login')} onClick={handleCloseModal}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                                <div className={cx('modal-header')}>
                                    <span className={tab === 1 ? cx('tab-active') : cx('tab')} onClick={handleLoginTab}>
                                        Đăng nhập
                                    </span>
                                    <span
                                        className={tab === 2 ? cx('tab-active') : cx('tab')}
                                        onClick={handleRegisterTab}
                                    >
                                        Đăng ký
                                    </span>
                                </div>
                                {tab === 1 && (
                                    <div className={cx('form-login')}>
                                        <span className={cx('label-input')}>
                                            <span>Email</span>
                                            <span className={cx('span-link')}>Gửi lại email kích hoạt</span>
                                        </span>
                                        <input className={cx('input')} type="email" placeholder="Nhập email..." />
                                        <span className={cx('label-input')}>
                                            <span>Mật khẩu</span>
                                            <span className={cx('span-link')}>Quên mật khẩu?</span>
                                        </span>
                                        <input className={cx('input')} type="password" placeholder="Nhập mật khẩu..." />
                                        <label className={cx('save-pass')}>
                                            Ghi nhớ mật khẩu
                                            <input className={cx('checkbox')} type="checkbox" />
                                            <span className={cx('checkmark')}></span>
                                        </label>
                                        <Button
                                            primary
                                            onClick={() => {
                                                setLogin(true);
                                                setModal(false);
                                            }}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </div>
                                )}
                                {tab === 2 && (
                                    <div className={cx('form-register')}>
                                        <span className={cx('label-input')}>
                                            <span>Email</span>
                                        </span>
                                        <input className={cx('input')} type="email" placeholder="Nhập email..." />
                                        <span className={cx('label-input')}>
                                            <span>Mật khẩu</span>
                                        </span>
                                        <input className={cx('input')} type="password" placeholder="Nhập mật khẩu..." />
                                        <span className={cx('label-input')}>
                                            <span>Nhập lại mật khẩu</span>
                                        </span>
                                        <input
                                            className={cx('input')}
                                            type="password"
                                            placeholder="Nhập lại mật khẩu..."
                                        />
                                        <Button primary> Đăng ký </Button>
                                    </div>
                                )}
                                {tab === 1 && (
                                    <div className={cx('modal-footer', 'modal-footer-login')}>
                                        <span>
                                            <span>Bạn chưa có tài khoản? </span>
                                            <span className={cx('span-link')} onClick={handleRegisterTab}>
                                                Đăng ký ngay
                                            </span>
                                        </span>
                                        <span className={cx('mt-20')}>Có thể đăng nhập bằng</span>
                                        <Link>
                                            <Image
                                                className={cx('icon-social')}
                                                src="https://banner2.cleanpng.com/20180327/ykq/kisspng-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-5aba7f66743377.652792721522171750476.jpg"
                                            />
                                        </Link>
                                    </div>
                                )}
                                {tab === 2 && (
                                    <div className={cx('modal-footer', 'modal-footer-register')}>
                                        <span>
                                            <span>Bạn đã có tài khoản? </span>
                                            <span className={cx('span-link')} onClick={handleLoginTab}>
                                                Đăng nhập ngay
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('wrapper__header-nav')}>
                <div className={cx('center')}>
                    <div className={cx('header-nav')}>
                        <Link
                            to="/"
                            className={tabNav === 1 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(1)}
                        >
                            Trang chủ
                        </Link>
                        <Tippy
                            interactive="true"
                            delay={[0, 500]}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        {data.Category.map((item, index) => (
                                            <Link key={index} to={item.to} className={cx('item-popper')}>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </Wrapper>
                                </div>
                            )}
                        >
                            <Link
                                className={tabNav === 2 ? cx('active-tab-nav') : cx('tab-nav')}
                                onClick={() => setTabNav(2)}
                            >
                                Sản phẩm <FontAwesomeIcon icon={faAngleDown} />
                            </Link>
                        </Tippy>
                        <Link
                            className={tabNav === 3 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(3)}
                        >
                            Tin tức
                        </Link>
                        <Link
                            className={tabNav === 4 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(4)}
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            className={tabNav === 5 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(5)}
                        >
                            Khuyến mãi
                        </Link>
                        <Link
                            className={tabNav === 6 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(6)}
                        >
                            Tài liệu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
