import { CustomRoute } from './custom-route';
import { postsRoutes } from './routes/posts';

export const routes: CustomRoute[] = [
  ...postsRoutes,
  // connect custom routes here
];
