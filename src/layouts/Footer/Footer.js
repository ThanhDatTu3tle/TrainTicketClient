import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

function Footer() {
  return (
    <div className={cx('wrapper')}> 
      <div className={cx('container')}>
        
      </div>

      <div className={cx('copyright')}>
        © 2022 KKĐ All Rights Reserved Site by LDCC
      </div>
    </div>
  )
}

export default Footer;