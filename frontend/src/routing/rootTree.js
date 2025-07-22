import { createRootRoute } from "@tanstack/react-router";
import { homeRoute } from "./homeRoute";
import { authRoute } from "./authRoute";
import { dashBoardRoute } from "./dashBoardRoute";
import RootLayout from "../RootLayout";

export const rootRoute = createRootRoute({
    component: RootLayout,
})

export const routeTree = rootRoute.addChildren([
    homeRoute, authRoute, dashBoardRoute
]);