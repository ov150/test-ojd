// import { useEffect, useState } from "react"

import { Route, Routes } from "react-router-dom";
import PaginationWithoutApiPage from "./components/PaginationWithoutApiPage";
import Tab from "./components/Tab";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

// function App() {
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: ""
//   })
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`${name}: ${value}`);
//     setData((pre) => ({
//       ...pre,
//       [name]: value
//     }))
//   }
//   const handelAddMore = () => {
//     console.log(data, "try");
//     setData([...data, {firstname: "", lastname: ""}])
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(data.firstname, data.lastname, "from submit")
//     try {
//       const res = await fetch("http://localhost:3000/test", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       console.log(res, 'response')
//     } catch (error) {
//       console.log(error)
//     }
//     setData({
//       firstname: "",
//       lastname: ""
//     })
//   }
//   return (
//     <>
//       <h1 class="text-3xl font-bold underline text-red-500">
//         Hello world!
//       </h1>


// {data.map((item)=> (
//   <div >
//     {item.firstname}
//   </div>
// ))}
//       <form onSubmit={handleSubmit}>
//         <div>

//         <input type="text" id="firstname" name="firstname" placeholder="First Name" value={data.firstname} onChange={handleChange} />
//         <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={data.lastname} onChange={handleChange} />
//         {" "}
//         <button onClick={handelAddMore}>add more</button>
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </>
//   )
// }

// export default App



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
}
export default App;