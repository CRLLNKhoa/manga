import classNames from 'classnames/bind';
import styles from './FsItem.module.scss';
import Image from '@/layout/component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function FsItem({ srcImg, name, currentPrice, salePrice, race, amount, to }) {
    return (
        <Link to={to} className={cx('wrapper')}>
            <div className={cx('img-box')}>
                <Image src={srcImg} className={cx('img-fs')} />
                {salePrice > 0 && (
                    <span className={cx('sale-per')}>
                        {Math.floor(((salePrice - currentPrice) / salePrice) * 100)}%
                    </span>
                )}
                {amount === 0 && (
                    <div className={cx('sold-out')}>
                        <span>Hết hàng</span>
                    </div>
                )}
            </div>
            <div className={cx('info')}>
                <span className={cx('name')}>{name}</span>
                <span className={cx('price')}>
                    <span className={cx('current-price')}>{currentPrice}đ</span>
                    {salePrice > 0 && <span className={cx('sale-price')}>{salePrice}đ</span>}
                </span>
                <span className={cx('race')}>
                    {race}
                    <FontAwesomeIcon icon={faStar} />
                </span>
            </div>
        </Link>
    );
}

export default FsItem;
