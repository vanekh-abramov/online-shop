import { HOME_ROUTE, CATALOG_ROUTE, BASKET_ROUTE } from '../src/constants/routerLinks'
import Home from '../src/components/pages/Home'
import Catalog from '../src/components/pages/Catalog'
import Basket from '../src/components/pages/Basket'

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
  }
]