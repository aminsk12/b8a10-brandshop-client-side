import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const item = useLoaderData();

    const { _id, image, name, brand, type, price, description, rating } = item;

    const handleUpdateItem = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newItem = { image, name, brand, type, price, description, rating }

        console.log(newItem);

        // send data to the server
        fetch(  `http://localhost:5000/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }





    return (
        <div className="bg-[#c484e2] p-24">
            <h2 className="text-3xl font-extrabold">Update Items</h2>
            <form onSubmit={handleUpdateItem} >

                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Upade" className="btn btn-block bg-slate-400" />

            </form>
        </div>
    );
};

export default Update;