import Swal from "sweetalert2";


const DetailCard = ({ detail }) => {
    const { _id, image, name, type, price, description, rating } = detail || {};

    const handleAddToFavorites = () => {
        const addedFavoritesArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

        //jokhon kisu nai tokhon e if vitor dhukba
        if (!favoriteItems) {
            addedFavoritesArray.push(detail);
            localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
            swal("Good job!", "Products added successfully!", "success");
        }

        else {


            const isExits = favoriteItems.find((detail) => detail.id === _id);


            if (!isExits) {

                addedFavoritesArray.push(...favoriteItems, detail);
                localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
                Swal("Good job!", "Products added successfully!", "success");

            } else {
                Swal("Error!", "No duplicate !", "error");
            }

        }

    };

    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src={image}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {description}
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {rating}
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {price}
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {rating}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default DetailCard;