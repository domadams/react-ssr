import Root from '../client/root';
import Home from '../client/components/pages/home';
import About from '../client/components/pages/about';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
];

export default routes;
