import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../Features/productSlice';
import { addToCart } from '../Features/cartSlice';



function ProductList() {
   // //for test: useSelector((x)=>{console.log(x.productsData)})

    const{items:products,status} = useSelector((state)=>state.productsData)
    const dispatch = useDispatch()
    console.log(products)
    useEffect(()=>{
        if(status === 'idle'){
            dispatch(getProducts())
        }
    },[status])
    if(status === 'loading') return <p>Loading Products</p>
    if(status === 'failed') return <p>Failed to load data.Please Try again</p>



    // const[products,setProducts] = useState([]);
    // useEffect(()=>{
    //     const getCustomersData = async() => {
    //         const res = await axios.get("https://fakestoreapi.com/products");
    //         const data = await res.data;
    //         // console.log(data)
    //         setProducts(data)

    //     };
    //     getCustomersData();
        
    // },[])
  return (
    <>
        <Navbar/>
        <div className="product-list">
            {products.map((product)=>{
                return(<div className="product-card" key={product.id}>
                    <img src={product.image} alt="picture" />
                    <h2>{product.title.length >20? `${product.title.slice(0,20)}...` : product.title}</h2>
                    <p>price:${product.price}</p>
                    <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
                </div>)
                
            })}
            
        </div>
        
    </>
  )
}

export default ProductList