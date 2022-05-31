import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src={
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/32ae12e15fd097c12ab4e0a6e5debfdb~c5_100x100.jpeg?x-expires=1654164000&x-signature=6y7h7mFowTSz%2FU09sMXJbANU5HM%3D'
                }
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Chu Minh Duc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
