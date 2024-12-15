import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { ShoppingCartContext } from "../context";
import { useFetch } from "../hooks/useFetch";
import { IProduct } from "../types/product";

export default function ProductDetailPage () {

    const {id} = useParams()

    const URL = `${API_URL}/products/${id}`

    const {data, loading, error} = useFetch<IProduct>(URL);

    const context = useContext(ShoppingCartContext);


    if(loading) return <p>Cargando...</p>
    if(error) return <p>Error: {error}</p>

    const handleClick = () => {
        context.setCount(context.count + 1);
    }

    return (
        <div className="max-w-7xl mx-auto p-6 ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-52">
                {/* Imagen a la izquierda */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={data?.images[0]}
                        alt={data?.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
        
                {/* Detalles a la derecha */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">
                        {data?.title}
                    </h1>
                    <p className="text-3xl font-semibold text-gray-900 mb-4">
                        Precio: ${data?.price}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {data?.description}
                    </p>
        
                    {/* Boton Agregar al Carrito */}
                    <button
                        onClick={handleClick}
                        className="bg-black hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg mb-6 transition duration-300"
                    >
                        Agregar al carrito
                    </button>
        
                    {/* Volver al Inicio */}
                    <Link
                        to="/"
                        className="text-black hover:underline text-lg ml-12"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
      );
}