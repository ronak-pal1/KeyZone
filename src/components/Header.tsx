
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
    return (
        <header className="w-full absolute top-0 left-0 px-8 py-5 flex items-center justify-between z-50">
            <h1 className="font-VT text-4xl" >KeyZone</h1>



            <div className="flex items-center space-x-6">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-700 border border-neutral-700 cursor-pointer">

                    <DarkModeIcon />
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white cursor-pointer">
                    <MenuIcon />
                </div>
            </div>

        </header>
    )
}

export default Header;