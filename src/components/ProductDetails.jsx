import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data =await res.json();
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(id);
    return (
        <>
            {data.title}
        </>
    )
}

export default ProductDetails;