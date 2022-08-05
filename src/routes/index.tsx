import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

export function AppRoutes () {
	return (
		<Routes>
			<Route path="/pagina-inicial" element={<Button variant='contained' color='primary'>Aos</Button> } />
			<Route path="*" element={<Navigate to="/pagina-inicial" />} />
		</Routes>
	)
}