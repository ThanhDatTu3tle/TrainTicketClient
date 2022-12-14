import classNames from "classnames/bind";
import styles from './Check.module.scss';

const cx = classNames.bind(styles)

function Check() {
  return (
    <div className={cx('wrapper')}>
      Kiểm tra thông tin vé
    </div>
  )
}

export default Check;
