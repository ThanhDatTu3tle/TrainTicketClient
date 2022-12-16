import { useEffect, useRef, useState } from 'react';
import classNames from "classnames/bind";
import MovingIcon from '@mui/icons-material/Moving';

import styles from './Trip.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles)

function TripComponent({ data }) {

  const timeDeparture = data.gioKhoiHanh.slice(11, 19)
  const oldHoursDep = timeDeparture.slice(0, 2)
  localStorage.setItem('oldHoursDep', oldHoursDep)
  const hoursDep = +timeDeparture.slice(0, 2) + 7
  const newHoursDep = hoursDep.toString()
  const minuteDep = +newHoursDep*60 + +timeDeparture.slice(3, 5)
  // console.log(minuteDep)

  const timeDepartureFinal = timeDeparture.replace(`${oldHoursDep}`, `${newHoursDep}`)

  const timeDestination = data.gioKetThuc.slice(11, 19)
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

  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('info')}>
        <div className={cx('left')}>
          <h4>{data.tenGaDi}</h4>
          <p>{timeDepartureFinal}</p>
        </div>
        <div className={cx('main')}>
          <p>{`${hours}h${minute}m`}</p>
          <MovingIcon />
        </div>
        <div className={cx('right')}>
          <h4>{data.tenGaDen}</h4>
          <p>{timeDestinationFinal}</p>
        </div>
      </div>

      <div className={cx('btn')}>
        <Button primary small onClick={handleChoose}>Chọn</Button>
      </div>
    </div>
  )
}

export default TripComponent;
