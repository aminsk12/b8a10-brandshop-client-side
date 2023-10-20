import { AiOutlineDollarCircle, AiTwotoneCar, } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
const About = () => {
    return (
        <div className=" ">
            <h2 className="text-5xl text-center mb-20 font-bold">Why Choose Us</h2>
            <div className="lg:flex mb-10 gap-10 items-center">
                <div className="flex-1">
                    <h3 className="text-6xl font-bold">Best valued deals <br /> you will ever find</h3>
                    <p className="font-extrabold my-5">Discovering the best deal is a process that involves thorough research, comparison, and decision-making to ensure you get the most value for your money. Here's a detailed description of how to discover the best deal:</p>
                    <button className=" text-xl font-bold text-white bg-red-500 py-3 px-6 ">Find Details</button>
                </div>


                <div className="flex-1 space-y-12">
                    <div className="lg:flex gap-5 items-center justify-center">
                        <AiTwotoneCar className="text-5xl text-red-600" />
                        <div className="">
                            <h2 className="text-4xl font-bold">Cross Country Drive</h2>
                            <p className=" font-bold">Sometimes, having good company on a road trip can enhance the experience. Plan trips with friends or family to make the journey more enjoyable.</p>
                        </div>
                    </div>

                    <div className="lg:flex gap-5 items-center">
                        <AiOutlineDollarCircle className="text-4xl text-red-600" />
                        <div className="">
                            <h2 className="text-4xl font-bold">All lnclusive Pricing</h2>
                            <p className="font-bold">Get everything you need in one convent transperent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>

                    <div className="lg:flex gap-5 items-center">
                        <FaHandHoldingUsd className="text-5xl text-red-600" />
                        <div className="font-bold">
                            <h2 className="text-4xl font-bold">No Hidden Charges</h2>
                            <p className="">Always read the terms and conditions, contracts, or agreements associated with a product or service. Hidden charges often lurk in the fine print. </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default About;