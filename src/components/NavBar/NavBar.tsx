import IconoCarro from "./CartWidget";
import Logo from "./logo";
import Nav from "./Nav";
import { ICategory } from "../../types/product";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils";


const NavBar = () => {
    
    const URL = `${API_URL}/categories`;

    const {data, loading, error} = useFetch<ICategory[]>(URL);

    if(loading) return <p>Cargando...</p>
    if(error) return <p>Error: {error}</p>

    return (

        <header className="bg-black text-white">
            <nav className="flex items-center justify-between px-4 py-3">
                <Logo/>
                <ul className="flex space-x-6">
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