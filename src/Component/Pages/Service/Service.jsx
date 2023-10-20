import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState } from "react";

const Service = () => {

    const lodedItems = useLoaderData();
    const [items, setItems] = useState(lodedItems);

    


 const { type } = useParams(); 
 console.log(type);
  
  const filteredProducts = lodedItems.filter(item => item.type === type);
console.log(filteredProducts);

    return (
        <div className="container mx-auto mt-10 mb-10 gap-8 space-y-10 grid md:grid-cols-2">
            
            {
                filteredProducts.map(item => <ServiceCard
                    key={item._id}
                    item={item}
                    items={items}
                    setItems={setItems}
                    
                    
                ></ServiceCard>)
            }

        </div>
    );
};

export default Service;