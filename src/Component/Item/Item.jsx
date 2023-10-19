import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";


const Item = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('company.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h3 className="text-4xl font-semibold text-center divider my-10 ">Our Brand</h3>
            <div className=" grid grid-cols-1  gap-14   md:grid-cols-2 py-20  lg:grid-cols-3">
                {
                    item?.map(item => (
                        <ItemCard
                            key={item.id}
                            item={item}
                        ></ItemCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Item;