import Baner from "../../Header/Baner/Baner";
import Item from "../../Item/Item";
import About from "../About/About";


const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <div className="container mx-auto ">
                <Item></Item>
                <About></About>
            
            </div>
        </div>
    );
};

export default Home;