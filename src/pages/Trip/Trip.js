import { useEffect, useRef, useState } from 'react';
import classNames from "classnames/bind";
import dayjs from 'dayjs';
import axios from 'axios';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import styles from './Trip.module.scss';
import Button from '../../components/Button';
import TripComponent from '../../components/TripComponent';

const cx = classNames.bind(styles)

function Trip() {

  const [schedule, setSchedule] = useState([])

  axios.get('http://localhost:3005/schedule')
  .then(function (response) {
      const data = response.data
      setSchedule(data)
  })
  .catch(function (error) {
      console.log(error);
  })

  const gaDi = localStorage.getItem('gaDi')
  const gaDen = localStorage.getItem('gaDen')
  const date = dayjs(localStorage.getItem('ngayDiDuocChon')).$d.toString()
  const dayChosen = date.slice(0, 15)
  let day = dayChosen.slice(0, 3)
  let dates = dayChosen.slice(8, 11)
  let month = dayChosen.slice(4, 7)

  if (day === 'Mon') {
    day = 'Thứ hai'
  } else if (day === 'Tue') {
    day = 'Thứ ba'
  } else if (day === 'Wed') {
    day = 'Thứ tư'
  } else if (day === 'Thu') {
    day = 'Thứ năm'
  } else if (day === 'Fri') {
    day = 'Thứ sáu'
  } else if (day === 'Sat') {
    day = 'Thứ bảy'
  } else if (day === 'Sun') {
    day = 'Chủ  nhật'
  }

  if (month === 'Jan') {
    month = 'thg 01'
  } else if (month === 'Feb') {
    month = 'thg 02'
  } else if (month === 'Mar') {
    month = 'thg 03'
  } else if (month === 'Apr') {
    month = 'thg 04'
  } else if (month === 'May') {
    month = 'thg 05'
  } else if (month === 'Jun') {
    month = 'thg 06'
  } else if (month === 'Jul') {
    month = 'thg 07'
  } else if (month === 'Aug') {
    month = 'thg 08'
  } else if (month === 'Sep') {
    month = 'thg 09'
  } else if (month === 'Oct') {
    month = 'thg 10'
  } else if (month === 'Nov') {
    month = 'thg 11'
  } else if (month === 'Dec') {
    month = 'thg 12'
  }

  const finalDate = `${day}, ${dates} ${month} 2022`

  const handleBack = () => {
    window.location.href = `http://localhost:3000/home`
  }

  const newSchedule = []

  for(let i = 0; i < schedule.length; i++) {
    if (schedule[i].tenGaDi === gaDi && schedule[i].tenGaDen === gaDen) {
      newSchedule.push(schedule[i])
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <div className={cx('left-title')}>
          <h3>{gaDi} <ArrowRightAltIcon /> {gaDen}</h3>
          <p>{finalDate}</p>
        </div>

        <div className={cx('right-title')}>
          <Button primary small onClick={handleBack}>Đổi tìm kiếm</Button>
        </div>
      </div>

      <div>
        {newSchedule.map((item) => (
          <TripComponent key={schedule.maLichTrinh} data={item} />
        ))}
      </div>

    </div>
  )
}

export default Trip;
