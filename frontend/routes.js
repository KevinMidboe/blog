import LandingPage from '@/pages/LandingPage';
import PostPage from '@/pages/PostPage';

const routes = [
  {
    path: "/",
    component: LandingPage 
  },
  {
    path: "/post/:id",
    component: PostPage
  }
]

export { routes };
