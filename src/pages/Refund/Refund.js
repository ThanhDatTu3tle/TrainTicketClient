import classNames from "classnames/bind";
import styles from './Refund.module.scss';

const cx = classNames.bind(styles)

function Refund() {
  return (
    <div className={cx('wrapper')}>
      Hoàn trả vé
    </div>
  )
}

export default Refund;
