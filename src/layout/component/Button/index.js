import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    buy,
    search,
    to,
    num,
    featuredKey,
    href,
    leftIcon = false,
    rightIcon = false,
    primary = false,
    outline = false,
    text = false,
    className = false,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove Event Disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
        leftIcon,
        rightIcon,
        featuredKey,
        buy,
        search,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('label')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            {num && <span className={cx('num')}>{num}</span>}
        </Comp>
    );
}

export default Button;
