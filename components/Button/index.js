import classNames from 'classnames/bind';
import style from './button.module.scss';

import Link from 'next/link';
const cx = classNames.bind(style);

function Buttom({
    to,
    href,
    onClick,
    children,
    className,
    rightIcon = false,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    ...passProps
}) {
    let Comp = 'buttom';

    console.log('comp', Comp)

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((keyprop) => {
            if (keyprop.startsWith('on') && typeof props[keyprop] === 'function') {
                delete props[keyprop];
            }
        });
    }

    if (to) {
        props.href = to;
        Comp = Link;
        console.log('comp', Comp)
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const clases = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={clases} {...props}>
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Buttom;
