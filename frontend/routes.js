import LandingPage from '@/pages/LandingPage';
import PostPage from '@/pages/PostPage';
import EditPage from '@/pages/EditPage';

const routes = [
  {
    path: "/",
    component: LandingPage 
  },
  {
    path: "/post/:id",
    component: PostPage
  },
  {
    path: "/edit/:id",
    component: EditPage
  }
]

export { routes };
