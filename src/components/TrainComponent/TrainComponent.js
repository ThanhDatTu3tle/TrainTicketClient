import classNames from "classnames/bind";
import MovingIcon from '@mui/icons-material/Moving';

import styles from './TrainComponent.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles)

function TrainComponent({ data }) {

  const timeDeparture = data.maLichTrinh.gioKhoiHanh.slice(11, 19)
  const oldHoursDep = timeDeparture.slice(0, 2)
  localStorage.setItem('oldHoursDep', oldHoursDep)
  const hoursDep = +timeDeparture.slice(0, 2) + 7
  const newHoursDep = hoursDep.toString()
  const minuteDep = +newHoursDep*60 + +timeDeparture.slice(3, 5)
  // console.log(minuteDep)

  const timeDepartureFinal = timeDeparture.replace(`${oldHoursDep}`, `${newHoursDep}`)

  const timeDestination = data.maLichTrinh.gioKetThuc.slice(11, 19)
  const oldHoursDes = timeDestination.slice(0, 2)
  localStorage.setItem('oldHoursDes', oldHoursDes)
  const hoursDes = +timeDestination.slice(0, 2) + 7
  const newHoursDes = hoursDes.toString()
  const minuteDes = +newHoursDes*60 + +timeDestination.slice(3, 5)
  // console.log(minuteDes)

  const timeDestinationFinal = timeDestination.replace(`${oldHoursDes}`, `${newHoursDes}`)

  const difference = +minuteDes - +minuteDep
  const minute = +difference%60
  const hours = (+difference - minute)/60

  const handleChoose = () => {
    localStorage.setItem('maSoTauDuocChon', data.maSoTau.maSoTau)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('name')}>
        <h3>{data.tenTau}</h3>
        <h3>{data.maSoTau.maSoTau}</h3>
      </div>
      <br />
      <div className={cx('details')}>
        <h4>Giờ đi: {timeDepartureFinal}</h4>
        <h4>Giờ đến: {timeDestinationFinal}</h4>
      </div>

      <Button primary onClick={handleChoose}>Chọn</Button>
    </div>
  )
}

export default TrainComponent;
