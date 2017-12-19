import Root from '../client/root.jsx';
import Home from '../client/components/pages/home/index.jsx';
import About from '../client/components/pages/about/index.jsx';

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/about',
        component: About
      }
    ]
  }
];

export default routes;