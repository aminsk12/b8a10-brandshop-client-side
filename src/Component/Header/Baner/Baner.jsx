import banner1 from '../../../../public/banner1.png'
import banner2 from '../../../../public/banner-2.jpg'
import banner3 from '../../../../public/banner3.jpg'
import banner4 from '../../../../public/banner4.jpg'


const Baner = () => {
    return (
        <>
            

            <div className="carousel w-full h-[75vh]">
                <div id="slide1" className="carousel-item relative w-full h-[75vh]">
                    <img src={banner1} className="w-full h-[75vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[75vh]">
                    <img src= {banner2} className="w-full h-[75vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[75vh]">
                    <img src={banner3} className="w-full h-[75vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[75vh]">
                    <img src={banner4} className="w-full h-[75vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Baner;