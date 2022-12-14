import config from "../../../config";
import classNames from "classnames/bind";
import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../Titles/Menu';

const cx = classNames.bind(styles)

function MenuTitles() {
  return (
    <div className={cx('wrapper')}>
      <Titles>
        <TitleItem title='Thông tin đặt vé' to={config.routes.information} icon={null}  />
        <TitleItem title='Kiểm tra vé' to={config.routes.check} icon={null}  />
        <TitleItem title='Hoàn trả vé' to={config.routes.refund} icon={null}  />
      </Titles>
    </div>
  )
}

export default MenuTitles;
