import * as React from 'react';
import dayjs from 'dayjs';
import { Radio } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsTransitFilledIcon from '@mui/icons-material/DirectionsTransitFilled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import classNames from 'classnames/bind';

import Button from '../../components/Button/Button';
import styles from './Home.module.scss';

const cx = classNames.bind(styles)

function Home() {

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    console.log('Tìm kiếm vé')
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('advertisement')}>
        Quảng cáo
      </div>

      <div className={cx('ticket')}>
        <div className={cx('left-ticket')}>
          <div className={cx('options')}>
            <Radio />Một chiều / khứ hồi
            <Radio />Nhiều thành phố
          </div>
          <br />
          <div className={cx('points')}>
            <div className={cx('departure')}>
              <h3>Từ</h3>
              <div className={cx('field')}>
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90850a422444ef949eca39e92bd9368e.svg"
                  width={30}
                  height={30}
                />
                <TextField id="outlined-basic" label="Ga đi" variant="outlined" inputProps={{style: {fontSize: 15, width: 180}}} />
              </div>
            </div>

            <div className={cx('destination')}> 
              <h3>Đến</h3>
              <div className={cx('field')}>
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5f96ecad5013c92e4c3206337d72a5ab.svg"
                  width={30}
                  height={30}
                />
                <TextField id="outlined-basic" label="Ga đến" variant="outlined" inputProps={{style: {fontSize: 15, width: 180}}} />
              </div>
            </div>
          </div>
          <br />
          <div className={cx('points')}>
            <div className={cx('departure')}>
              <h3>Ngày đi</h3>
              <div className={cx('field')}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>

            <div className={cx('destination')}> 
              <h3>Ngày về</h3>
              <div className={cx('field')}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('right-ticket')}>
          <div className={cx('map')}>
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a502a331de18bdda3d847950cdc4826d.svg"
              width={30}
              height={30}
            />
            Mở bản đồ
          </div>
          <div className={cx('passenger')}>
            <h3>Số hành khách</h3>
            <div className={cx('field')}>
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d58ded0ccea323c570f772fecbcd87d7.svg"
                width={30}
                height={30}
              />
              <TextField id="outlined-basic" label="Số hành khách" variant="outlined" inputProps={{style: {fontSize: 15, width: 500}}} />
            </div>
          </div>
          <br />
          <div className={cx('passenger')}>
            <h3>Hạng ghế</h3>
            <div className={cx('field')}>
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b7ea3d34d2c4cd80c33fe17e7f4af5a9.svg"
                width={30}
                height={30}
              />
              <TextField id="outlined-basic" label="Hạng ghế" variant="outlined" inputProps={{style: {fontSize: 15, width: 500}}} />
            </div>
          </div>
          <br />
          <Button primary onClick={handleSearch}>Tìm kiếm vé</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;
