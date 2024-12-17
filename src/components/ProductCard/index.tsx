import { useContext } from "react";
import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import imagenDefecto from "../../assets/ProductNotAvalible.webp";


function ProductCard({images, title, price, id}: IProduct) {

    const context = useContext(ShoppingCartContext);

    const handleClick = () => {
        context.setCount(context.count + 1);
    }

    return (

        <div className=" p-4 rounded-lg  mb-10 text-center">
            <div className="product-image mb-4">
                <img 
                    src={images[0]} 
                    alt="Imagen de Prueba" 
                    className="rounded-xl w-full h-auto object-contain mx-auto"
                    onError={(e) => {e.target.src = imagenDefecto}} //Funciona pero evaluar que sea public la imagen y Tipos
                />
            </div>

            <div className="product-info">
                <h3 className="font-body font-bold text-black hover:text-gray-600 transition-colors duration-200">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h3>
                <p className="font-body font-bold text-black mt-2">${price}</p>
                <button
                    onClick={handleClick}
                    className="w-full bg-black hover:bg-orange-600 text-white font-body font-medium py-3 px-8 rounded-lg mb-6 mt-2 transition duration-300"
                >
                    Agregar al carrito
                </button>
            </div>

        </div>

    );

}

export default ProductCard;
