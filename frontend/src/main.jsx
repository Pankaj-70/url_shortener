import { createRoot } from 'react-dom/client'
import './index.css'
import {routeTree} from "./routing/rootTree.js";
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import store from './store/store.js';
import HomePage from './pages/HomePage.jsx';

const queryClient = new QueryClient()
const router = createRouter({
    routeTree,
    context: {
        queryClient,
        store
    },
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </Provider>
)
