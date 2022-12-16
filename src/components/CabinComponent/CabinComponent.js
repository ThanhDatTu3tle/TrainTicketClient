import classNames from "classnames/bind";

import styles from './CabinComponent.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles)

function CabinComponent({ data }) {

  const handleChooseCabin = () => {
    localStorage.setItem('maSoToaDuocChon', data.maSoToa)
  }

  return (
    <div className={cx('wrapper')}>
      {data.maSoToa}
      <Button primary small onClick={handleChooseCabin}>Chọn</Button>
    </div>
  )
}

export default CabinComponent;
