

const Details = () => {
    return (
        <div>
            <h3 className=" text-6xl font-bold flex items-center h-[80vh] justify-center"> comong soon.......................</h3>
        </div>
    );
};

export default Details;












{/* import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";


const Details = () => {
    const [detail, setDetail] = useState({});

  const { id } = useParams();

  const details = useLoaderData();

  useEffect(() => {

    
    const findDetail = details?.find((phone) => phone.id === id);

    setDetail(findDetail);
  }, [id, details]);


  return (
    <div>
      <DetailCard detail={detail}></DetailCard>
    </div>
  );
};

export default Details;*/}