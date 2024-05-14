import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { productId } = useParams();
    console.log( "product id",  productId);
    const fetchData = async (productId) => {
        try {
          let res = await fetch(
            `https://strapi-store-server.onrender.com/api/products?featured=true${productId}`
          );
          let data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage