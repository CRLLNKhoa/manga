import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '@/layout/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as data from '@/data/index';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [valueSearch, setValueSearch] = useState([]);

    const handleChange = (event) => {
        const valueSearch = event.target.value;

        if (!valueSearch.startsWith(' ')) {
            setValueSearch(event.target.value);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('input-search')}
                onChange={handleChange}
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
            />
            <Button className={cx('btn-search')} search leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Tìm kiếm
            </Button>
            <div className={cx('result-search')}>
                {data.Products.filter((itemFillter) => itemFillter.title.includes(valueSearch)).map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))}
            </div>
        </div>
    );
}

export default Search;
