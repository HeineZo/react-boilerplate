import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './routes/Layout';
import Error from '@routes/Error';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { atom } from 'jotai';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react-router';
import { routesConfig } from './routesConfig';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: routesConfig.map(({ path, element }) => ({
			path,
			element,
		})),
	},
]);

const queryClient = new QueryClient();
export const countAtom = atom(0);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<RouterProvider router={router} />
			</NuqsAdapter>
		</QueryClientProvider>
	</React.StrictMode>
);
