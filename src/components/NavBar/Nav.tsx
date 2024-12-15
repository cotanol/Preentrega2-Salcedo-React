import { Link } from "react-router-dom";
import { ICategory } from '../../types/product';


function Nav({name, id}:ICategory) {

    return (
        <li><Link to={`/categories/${id}/products`} className="text-lg hover:text-gray-400 transition">{name}</Link></li>
    );

}

export default Nav;