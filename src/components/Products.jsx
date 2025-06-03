import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {
                products.map((ele, index) => (
                    <div key={index}>
                        <Link to={`/products/${ele.id}`}>
                            <p>{ele.title}</p>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Products