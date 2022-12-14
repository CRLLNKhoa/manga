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
                                                    ????ng xu???t
                                                </p>
                                            </Wrapper>
                                        </div>
                                    )}
                                >
                                    <span className={cx('cursor-point')}>
                                        <span onClick={handleOpenModalLogin}>Xin Ch??o!</span>
                                        <span> {data.User.name}</span>
                                    </span>
                                </Tippy>
                            </div>
                        ) : (
                            <div className={cx('sign-in', 'text')}>
                                <span>
                                    <span className={cx('span-login')} onClick={handleOpenModalLogin}>
                                        ????ng nh???p
                                    </span>
                                    <span> / </span>
                                    <span className={cx('span-register')} onClick={handleOpenModalRegister}>
                                        ????ng k??
                                    </span>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={cx('cart')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                        <span className={cx('num-product')}>{numCart}</span>
                        <span className={cx('text')}>Gi??? h??ng</span>
                    </div>
                    {modal && (
                        <div className={cx('overlay')}>
                            <div className={cx('modal-user')}>
                                <button className={cx('btn-close__modal-login')} onClick={handleCloseModal}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                                <div className={cx('modal-header')}>
                                    <span className={tab === 1 ? cx('tab-active') : cx('tab')} onClick={handleLoginTab}>
                                        ????ng nh???p
                                    </span>
                                    <span
                                        className={tab === 2 ? cx('tab-active') : cx('tab')}
                                        onClick={handleRegisterTab}
                                    >
                                        ????ng k??
                                    </span>
                                </div>
                                {tab === 1 && (
                                    <div className={cx('form-login')}>
                                        <span className={cx('label-input')}>
                                            <span>Email</span>
                                            <span className={cx('span-link')}>G???i l???i email k??ch ho???t</span>
                                        </span>
                                        <input className={cx('input')} type="email" placeholder="Nh???p email..." />
                                        <span className={cx('label-input')}>
                                            <span>M???t kh???u</span>
                                            <span className={cx('span-link')}>Qu??n m???t kh???u?</span>
                                        </span>
                                        <input className={cx('input')} type="password" placeholder="Nh???p m???t kh???u..." />
                                        <label className={cx('save-pass')}>
                                            Ghi nh??? m???t kh???u
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
                                            ????ng nh???p
                                        </Button>
                                    </div>
                                )}
                                {tab === 2 && (
                                    <div className={cx('form-register')}>
                                        <span className={cx('label-input')}>
                                            <span>Email</span>
                                        </span>
                                        <input className={cx('input')} type="email" placeholder="Nh???p email..." />
                                        <span className={cx('label-input')}>
                                            <span>M???t kh???u</span>
                                        </span>
                                        <input className={cx('input')} type="password" placeholder="Nh???p m???t kh???u..." />
                                        <span className={cx('label-input')}>
                                            <span>Nh???p l???i m???t kh???u</span>
                                        </span>
                                        <input
                                            className={cx('input')}
                                            type="password"
                                            placeholder="Nh???p l???i m???t kh???u..."
                                        />
                                        <Button primary> ????ng k?? </Button>
                                    </div>
                                )}
                                {tab === 1 && (
                                    <div className={cx('modal-footer', 'modal-footer-login')}>
                                        <span>
                                            <span>B???n ch??a c?? t??i kho???n? </span>
                                            <span className={cx('span-link')} onClick={handleRegisterTab}>
                                                ????ng k?? ngay
                                            </span>
                                        </span>
                                        <span className={cx('mt-20')}>C?? th??? ????ng nh???p b???ng</span>
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
                                            <span>B???n ???? c?? t??i kho???n? </span>
                                            <span className={cx('span-link')} onClick={handleLoginTab}>
                                                ????ng nh???p ngay
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
                            Trang ch???
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
                                S???n ph???m <FontAwesomeIcon icon={faAngleDown} />
                            </Link>
                        </Tippy>
                        <Link
                            className={tabNav === 3 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(3)}
                        >
                            Tin t???c
                        </Link>
                        <Link
                            className={tabNav === 4 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(4)}
                        >
                            Gi???i thi???u
                        </Link>
                        <Link
                            className={tabNav === 5 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(5)}
                        >
                            Khuy???n m??i
                        </Link>
                        <Link
                            className={tabNav === 6 ? cx('active-tab-nav') : cx('tab-nav')}
                            onClick={() => setTabNav(6)}
                        >
                            T??i li???u
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
