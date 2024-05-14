import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      let res = await fetch(
        "https://strapi-store-server.onrender.com/api/products"
      );
      let data = await res.json();
      console.log(data);
      setCardData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showCard = (id) => {
    navigate(`/ProductPage/${id}`)
  }

  return (
    <div className="flex flex-col gap-4 my-20">
      <div className="w-[80%] m-auto flex justify-center items-center flex-wrap gap-8 cursor-pointer"
      >
        {cardData.map((item) => (
            <div className="w-[350px] rounded-xl shadow-xl hover:shadow-2xl p-4" key={item.id}
            onClick={() => showCard(item.id)}
            >
              <img
                src={item.attributes.image}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-center tracking-wider">{item.attributes.title}</h1>
                <p className="mt-3 text-sm text-gray-600 text-center">
                  ${item.attributes.price / 100}
                </p>
               
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
