import classNames from "classnames/bind";
import styles from './Information.module.scss';

const cx = classNames.bind(styles)

function Information() {
  return (
    <div className={cx('wrapper')}>
      Thông tin vé
    </div>
  )
}

export default Information;
