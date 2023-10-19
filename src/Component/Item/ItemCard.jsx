import { Link } from "react-router-dom";


const ItemCard = ({ item }) => {

    const { img, title } = item || {}


    return (
        <Link to={`/service/${title}`}>
        <div className="relative flex flex-col mb-20 text-gray-700  shadow-md  rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src={img}
                    layout="fill"
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-extrabold text-xl antialiased text-center leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                
            </div>
            
        </div>
        </Link>
    );
};

export default ItemCard;