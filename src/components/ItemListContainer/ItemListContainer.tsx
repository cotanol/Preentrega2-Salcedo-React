import { useParams } from "react-router-dom";
import { API_URL } from "../../utils";
import { useFetch } from "../../hooks/useFetch";
import { IProduct } from "../../types/product";
import ProductCard from "../ProductCard";

function ItemListContainer() {
  const { id } = useParams(); // id de categoría, si la ruta es /categories/:id/products
  
  const URL = id 
    ? `${API_URL}/categories/${id}/products` 
    : `${API_URL}/products`;

  const { data, loading, error } = useFetch<IProduct[]>(URL);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ItemListContainer;
