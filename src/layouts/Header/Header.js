import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';
import config from '../../config';
import Titles from './Titles/MenuTitles';
import Options from './Options';

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('line')}></div>

      <div className={cx('container')}>
        <div className={cx('logo-title')}>
          <div className={cx('logo')}>
            <Link to={config.routes.home}>
              LOGO
            </Link>
          </div>
          <div className={cx('title')}>
            <Titles />
          </div>
        </div>
        <div className={cx('options')}>
          <Options />
        </div>
      </div>
    </div>
  )
}

export default Header;
