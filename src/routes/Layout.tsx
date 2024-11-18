import { routesConfig } from '@/routesConfig';
import Footer from '@components/layout/footer';
import Navbar, { MobileSidebar } from '@components/layout/navbar';
import { SidebarProvider } from '@components/ui/sidebar';
import { useIsMobile } from '@hooks/use-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

export default function Layout() {
	const location = useLocation();
	const navigate = useNavigate();
	const currentPage = location.pathname.substring(1);
	const isMobile = useIsMobile();

	const tabs = routesConfig.map((route) => ({
		id: route.path.substring(1),
		label: route.label,
		onClick: () => navigate(route.path),
	}));

	return (
		<SidebarProvider defaultOpen={false} open={isMobile} >
			<div className='flex flex-col w-screen justify-between'>
				<Navbar tabs={tabs} currentPage={currentPage} />
				{isMobile && <MobileSidebar tabs={tabs} currentPage={currentPage} />}
        <div>
          <Outlet />
        </div>
				<Footer />
			</div>
		</SidebarProvider>
	);
}
