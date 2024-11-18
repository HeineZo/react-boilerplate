import { Button } from '@components/ui/button';
import Tabs, { Tab } from '@components/ui/tabs';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	useSidebar,
	SidebarGroupLabel,
} from '@components/ui/sidebar';

interface NavbarProps {
	tabs: Tab[];
	currentPage: string;
}

export default function Navbar({ tabs, currentPage }: NavbarProps) {
	return (
		<div className='sticky top-0 mb-10 border-b border-gray-200 z-10 w-full h-fit backdrop-filter backdrop-blur-lg firefox:bg-opacity-90'>
			<DesktopNavbar tabs={tabs} currentPage={currentPage} />
			<MobileNavbar />
		</div>
	);
}

function DesktopNavbar({ tabs, currentPage }: NavbarProps) {
	return (
		<div className='hidden md:block'>
			<div className='px-8 flex h-16 items-center max-w-[88rem] mx-auto'>
				<div className='mr-4 hidden md:flex'>
					<NavLink
						to='/'
						className='flex items-center justify-center gap-2 py-6 mr-10'>
						<img
							src='/public/logo.svg'
							className='h-8'
							alt="Logo de l'application"
						/>
						<h4>BookIt</h4>
					</NavLink>
				</div>
				<nav className='flex items-center space-x-6 text-sm font-medium xl:flex'>
					<Tabs tabs={tabs} activeTab={currentPage} />
				</nav>
				<div className='flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end'>
					<Button variant='secondary' onClick={() => {}}>
						S'inscrire
					</Button>
					<Button onClick={() => {}}>Se connecter</Button>
				</div>
			</div>
		</div>
	);
}

function MobileNavbar() {
	const { toggleSidebar } = useSidebar();
	return (
		<div className='block md:hidden'>
			<div className='flex justify-between items-center w-full rounded-md px-4 py-4'>
				<NavLink
					to='/'
					className='flex items-center justify-center gap-2'>
					<img
						src='/public/logo.svg'
						className='h-8'
						alt="Logo de l'application"
					/>
					<h4>BookIt</h4>
				</NavLink>
				<div className='flex items-center gap-4'>
					<Button
						onClick={toggleSidebar}
						variant='outline'
						size='icon'>
						<Menu />
					</Button>
				</div>
			</div>
		</div>
	);
}

export function MobileSidebar({ tabs, currentPage }: NavbarProps) {
	const { setOpenMobile } = useSidebar();

	const handleTab = (tab: Tab) => {
		setOpenMobile(false);
		tab.onClick();
	};

	return (
		<Sidebar side='right'>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{tabs.map((tab) => (
								<SidebarMenuItem key={tab.label}>
									<SidebarMenuButton
										onClick={() => handleTab(tab)}
										className={`${
											currentPage === tab.id
												? 'bg-sidebar-accent text-sidebar-accent-foreground'
												: ''
										} text-base`}>
										{tab.label}
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
