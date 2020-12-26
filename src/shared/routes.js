import Root from './root';
import Home from './components/pages/home';
import About from './components/pages/about';

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
