import { CustomRoute } from '../custom-route';
import { db } from '../db';

export const postsRoutes: CustomRoute[] = [
  {
    path: '/posts/latest',
    method: 'GET',
    handler: (req, res) => res.json(db.posts[db.posts.length - 1])
  }
];
