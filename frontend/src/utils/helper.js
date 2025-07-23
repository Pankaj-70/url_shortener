import { getCurrentUser } from "../apis/authApis.js";
import { login } from "../store/slice/authSlice.js";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async({context}) => {
    try {
        const { queryClient, store } = context;
        const user = await queryClient.ensureQueryData({
            queryKey: ['currentUser'],
            queryFn: getCurrentUser
        })
        if(!user) {
            return redirect({to: '/auth'});
        }
        console.log("User in checkAuth:", user);
        store.dispatch(login(user));
        const isAuthenticated = store.getState().auth.isAuthenticated;
        if(!isAuthenticated) {
            return redirect({to: '/auth'});
        }
        return true;
    } catch (error) {
        console.error("Error in checkAuth:", error);
        return redirect({to: '/auth'});
    }
}