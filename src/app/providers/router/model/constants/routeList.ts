import {BottomTabRoute, Route} from '../types/Route';
import {RouteName} from './RouteName';

import {HomePage} from '@src/pages/HomePage';
import {CartPage} from '@src/pages/CartPage';
import {ProfilePage} from '@src/pages/ProfilePage';
import {ShopPage} from '@src/pages/ShopPage';
import {LoginPage} from '@src/pages/LoginPage';
import {RegisterPage} from '@src/pages/RegisterPage';

import HomeIcon from '@src/shared/assets/icons/home-icon.svg';
import CartIcon from '@src/shared/assets/icons/cart-icon.svg';
import ProfileIcon from '@src/shared/assets/icons/profile-icon.svg';

export const publicRoutes: Route[] = [
  {
    name: RouteName.REGISTER,
    component: RegisterPage,
  },
  {
    name: RouteName.LOGIN,
    component: LoginPage,
  },
];

export const privateRoutes: Route[] = [
  {
    name: RouteName.SHOP,
    component: ShopPage,
  },
];

export const bottomTabsRoutes: BottomTabRoute[] = [
  {
    name: RouteName.HOME,
    component: HomePage,
    icon: HomeIcon,
    title: 'Home',
  },
  {
    name: RouteName.CART,
    component: CartPage,
    icon: CartIcon,
    title: 'Cart',
  },
  {
    name: RouteName.PROFILE,
    component: ProfilePage,
    icon: ProfileIcon,
    title: 'Profile',
  },
];
