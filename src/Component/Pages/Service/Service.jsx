import { useLoaderData,  } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const items = useLoaderData();

    


    return (
        <div className="container mx-auto mt-10 gap-8 grid md:grid-cols-2">
            
            {
                items.map(item => <ServiceCard
                    key={item._id}
                    item={item}
                    
                    
                ></ServiceCard>)
            }

        </div>
    );
};

export default Service;