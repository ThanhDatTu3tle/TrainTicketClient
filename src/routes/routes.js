import config from '../config/';

// Layouts
import { MainLayout } from '../layouts/MainLayout';

//Pages
import Home from '../pages/Home/Home';
import Information from '../pages/Information/Information';
import Check from '../pages/Check/Check';
import Refund from '../pages/Refund/Refund';

import Trip from '../pages/Trip/Trip';

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
  { path: config.routes.information, component: Information, layout: MainLayout },
  { path: config.routes.check, component: Check, layout: MainLayout },
  { path: config.routes.refund, component: Refund, layout: MainLayout },

  { path: config.routes.trip, component: Trip, layout: MainLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
