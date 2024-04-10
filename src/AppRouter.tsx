import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
    </BrowserRouter>
  );
};
