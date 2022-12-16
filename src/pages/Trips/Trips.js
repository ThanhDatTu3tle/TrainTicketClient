import { useEffect, useRef, useState } from 'react';
import classNames from "classnames/bind";
import dayjs from 'dayjs';
import axios from 'axios';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import styles from './Trips.module.scss';
import Cabin from '../../components/Cabin/Cabin';
import TrainComponent from '../../components/TrainComponent/TrainComponent';
import CabinComponent from '../../components/CabinComponent/CabinComponent';

const cx = classNames.bind(styles)

function Trips() {

  const maSoToa = useRef()

  const [trip, setTrip] = useState([])
  const [cabin, setCabin] = useState([])
  const [cabinslot, setCabinslot] = useState([])

  axios.get('http://localhost:3005/trip')
  .then(function (response) {
      const data = response.data
      setTrip(data)
      // console.log(trip)
  })
  .catch(function (error) {
      console.log(error);
  })

  axios.get('http://localhost:3005/cabin')
  .then(function (response) {
      const dataCabin = response.data
      setCabin(dataCabin)
      // console.log(cabin)
  })
  .catch(function (error) {
      // console.log(error);
  })

  axios.get('http://localhost:3005/cabinslot')
  .then(function (response) {
      const dataCabinSlot = response.data
      setCabinslot(dataCabinSlot)
      // console.log(cabin)
  })
  .catch(function (error) {
      // console.log(error);
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

  const tripArr = []
  for(let i = 0; i < trip.length; i++) {
    if (trip[i].maLichTrinh.maLichTrinh === localStorage.getItem('maLichTrinhDuocChon')) {
      tripArr.push(trip[i])
    }
  }

  const cabinArr = []
  for(let i = 0; i < cabin.length; i++) {
    if (cabin[i].maSoTau.maSoTau === localStorage.getItem('maSoTauDuocChon')) {
      cabinArr.push(cabin[i])
    }
  }

  const cabinslotArr = []
  for(let i = 0; i < cabinslot.length; i++) {
    if (cabinslot[i].maSoToa.maSoToa === localStorage.getItem('maSoToaDuocChon')) {
      // console.log(trip[i].maChuyenTau)
      cabinslotArr.push(cabinslot[i])
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <div className={cx('left-title')}>
          <h3>{gaDi} <ArrowRightAltIcon /> {gaDen}</h3>
          <p>{finalDate}</p>
        </div>
      </div>

      <div className={cx('trains')}>
        {tripArr.map((item) => (
          <TrainComponent key={trip.maChuyenTau} data={item} />
        ))}
      </div>
      <br />
      <br />
      <div className={cx('trains')}>
        <h3>Toa: </h3>
        {cabinArr.map((item) => (
          <CabinComponent key={trip.maChuyenTau} data={item} />
        ))}
      </div>
      <br />
      <br />
      <div className={cx('trains')}>
        {cabinslotArr.map((item) => (
          <Cabin key={trip.maToaGhe} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Trips;
