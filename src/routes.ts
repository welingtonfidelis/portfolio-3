import { ApplicationRoutes } from "./enum/applicationRoutes";
import { Curriculum } from "./pages/curriculum";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";

const { ROOT, CURRICULUM } = ApplicationRoutes;

export const routes = [
  {
    label: "pages.login.page_title",
    path: ROOT,
    element: Home,
  },
  {
    label: "pages.voting_room",
    path: CURRICULUM,
    element: Curriculum,
  },
  {
    label: "not found",
    path: "*",
    element: NotFound,
  },
];
