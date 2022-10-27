import classNames from 'classnames/bind';
import styles from './NewItem.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function NewItem({ img, title, author, time, summary }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-box')}>
                <Image src={img} />
            </div>
            <div className={cx('body')}>
                <span className={cx('title')}>{title}</span>
                <span className={cx('info')}>
                    <span className={cx('author')}>
                        <FontAwesomeIcon icon={faUser} />
                        {author}
                    </span>
                    <span className={cx('time')}>
                        <FontAwesomeIcon icon={faCalendar} />
                        {time}
                    </span>
                </span>
                <span className={cx('summary')}>{summary}</span>
            </div>
        </div>
    );
}

export default NewItem;
