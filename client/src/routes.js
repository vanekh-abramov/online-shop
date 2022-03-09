import { HOME_ROUTE, CATALOG_ROUTE, BASKET_ROUTE, DEVICE_ROUTE } from '../src/constants/routerLinks'
import Home from '../src/components/pages/Home'
import Catalog from '../src/components/pages/Catalog'
import Basket from '../src/components/pages/Basket'
import DevicePage from './components/pages/DevicePage'

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
]