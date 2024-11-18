import { routesConfig } from '@/routesConfig';
import { NavLink, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

	return (
		<footer className='flex gap-8 flex-col sm:flex-row justify-between items-center p-6 border rounded-xl mt-20 md:mt-52 m-4'>
			<NavLink
				to='/'
				className='flex items-center justify-center gap-2 md:mr-10'>
				<img
					src='/public/logo.svg'
					className='h-8'
					alt="Logo de l'application"
				/>
				<h4>BookIt</h4>
			</NavLink>
			<div className='flex gap-8 flex-wrap'>
				{routesConfig.map((link) => (
					<NavLink
						key={link.path}
						to={link.path}
						className={location.pathname === link.path ? 'font-bold' : ''}>
						{link.label}
					</NavLink>
				))}
			</div>
		</footer>
	);
}
