import classNames from "classnames/bind";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

import styles from './Cabin.module.scss';

const cx = classNames.bind(styles)

function Cabin({ data }) {
  return (
    <div className={cx('wrapper')}> 
      {data.maToaGhe}
      <br />
      Ghế số: {data.maSoGhe.maSoGhe}
      <AirlineSeatReclineNormalIcon fontSize='large' />
    </div>
  )
}

export default Cabin;
