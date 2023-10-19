import Baner from "../../Header/Baner/Baner";
import Item from "../../Item/Item";


const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <div className="container mx-auto "><Item></Item></div>
        </div>
    );
};

export default Home;