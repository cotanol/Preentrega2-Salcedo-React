import IconoCarro from "./CartWidget";
import Logo from "./logo";
import Nav from "./Nav";
import { ICategory } from "../../types/product";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const NavBar = () => {
    
    const URL = `${API_URL}/categories`;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuBar = () => {
        setIsMenuOpen((prevMode) => !prevMode);
    }

    const {data, loading, error} = useFetch<ICategory[]>(URL);

    if(loading) return <p>Cargando...</p>
    if(error) return <p>Error: {error}</p>

    

    return (

        <header className="px-1 bg-black text-white">
            <nav className="flex items-center justify-between px-4 py-3">
                <Logo/>

                <button 
                    className="lg:hidden flex items-center"
                    onClick={handleMenuBar}
                >
                    <FaBars className="text-white" size={30} />
                </button>

                <ul className={`lg:flex lg:space-x-6 transition-all duration-300 ease-in-out
                                ${isMenuOpen ? "p-4 flex flex-col space-y-4 absolute top-24 left-0 right-0 bg-black lg:static lg:flex-row lg:space-y-0" : "hidden"}
                                `}>
                    {data?.slice(0, 5).map(nav => (
                        <Nav key={nav.id} {...nav}  />
                    ))}
                </ul>
                <IconoCarro/>
            </nav>
        </header>
    )

}

export default NavBar;