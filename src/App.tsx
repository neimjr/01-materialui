import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';

export function App() {
  return (
		<div>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</div>
  );
}
