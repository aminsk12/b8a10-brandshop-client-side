import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ServiceCard = ({ item, items, setItems }) => {

    const { _id, image, name, type, price, description, rating } = item;



    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Item has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(i => i._id !== _id);
                            setItems(remaining);

                        }
                    })

            }
        })
    }

    return (

        <div className="card card-side bg-base-100  gap-10 shadow-xl">
            <figure><img src={image} alt="Movie" className="" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p className="my-6 text-2xl ">{price}</p>
                    <p className="my-6 text-2xl font-bold ">{type}</p>
                    
                    <div className="rating">
                        <input type="radio" name={rating}  className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={rating}  className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={rating}  className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={rating}  className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={rating}  className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="btn-group btn-group-vertical space-y-4">
                    <Link to={`/details/${_id}`}><button className="btn">View </button></Link>

                    <Link to={`/update/service/${_id}`}>
                        <button className="btn bg-lime-300">Edit</button>
                    </Link>

                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500">X</button>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;