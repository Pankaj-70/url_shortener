import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootTree";
import DashBoardPage  from "../pages/DashBoardPage";
import { checkAuth } from "../utils/helper";

export const dashBoardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashBoardPage,
    beforeLoad: checkAuth
})