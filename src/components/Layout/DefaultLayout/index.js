import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Slidebar from './Slidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Header />
                <div className={cx('container')}>
                    <Slidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
