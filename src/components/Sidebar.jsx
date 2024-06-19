import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<DesktopSidebar />
			<MobileSidebar />
		</>
	);
};
export default Sidebar;

const DesktopSidebar = () => {
	return (
		<div className=' bg-[#c4c4c4] p-3 md:p-11 border-r min-h-screen w-30 md:w-56 hidden sm:block'   >
			<div className='flex flex-col gap-15 sticky top-7 left-0'>
				<div className='w-full'>
					<img src='/main-logo.png' alt='logo' className='hidden md:block' />
					<img src='/recipe-book-mobile-logo.svg' alt='logo' className='block md:hidden' />
				</div>
				<ul className='flex flex-col items-center p-5 md:items-start gap-8'>
					<Link to={"/"} className='flex gap-1'>
						<Home size={"20"} />
						<span className='font-bold hidden md:block'>Home</span>
					</Link>
					<Link to={"/favorites"} className='flex gap-1'>
						<Heart size={"24"} />
						<span className='font-bold hidden md:block'>Favorites</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

const MobileSidebar = () => {
	return (
		<div
			className='flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-white z-10 p-2 sm:hidden 
		'
		>
			<Link to={"/"}>
				<Home size={"24"} className='cursor-pointer' />
			</Link>
			<Link to={"/favorites"}>
				<Heart size={"24"} className='cursor-pointer' />
			</Link>
		</div>
	);
};
