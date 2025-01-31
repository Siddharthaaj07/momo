import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartProvider";

function ProductDescription() {

    const { state, dispatch } = useContext(CartContext);
    console.log(state);


    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({});
    console.log(id);


    const getSingleProduct = async () => {

        let productData = await fetch(`https://dummyjson.com/recipes/${id}`);
        productData = await productData.json();
        setSingleProduct(productData);
        console.log(productData)
    };
    useEffect(() => {
        getSingleProduct();
    }, [id]);


    return (
        <div >
            {/* <div><button onClick={() => { dispatch(5) }}>Click</button></div> */}
            {singleProduct ? (
                <div>
                    <div className="flex shadow-2xl ange-400 space-x-5 mr-96 mt-5">
                        <div >
                            <img className="h-40 w-40 " src={singleProduct.image} alt="" />

                        </div>
                        <div>
                            <h1>{singleProduct.name}</h1>
                            <h1>Rs.{singleProduct.caloriesPerServing}</h1>
                            <h1>{singleProduct.rating}</h1>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>

                            <div className="flex items-center justify-end gap-4 mr-28 p-3 mt-16">
                                <button className="w-52 h-10 bg-red-500 shadow-lg text-white rounded-sm font-bold ">Buy NOw</button>
                                <button onClick={()=>{
                                    dispatch({type:"ADD_TO_CART",payload:{...singleProduct}})
                                }}
                                className="bg-orange-500 text-white w-52 h-10 rounded-sm shadow-xl font-bold hover:bg-orange-60">Add To Cart</button>
                            </div>

                        </div>


                    </div>
                    <div className="mr-[55%] mt-24">
                        <h1 className="text-4xl font-bold">Production Description</h1>
                        <p><span className="font-semibold">MealType: </span>{singleProduct.mealType}</p>
                        <p><span className="font-semibold">PrepTimeMinutes: </span>{singleProduct.prepTimeMinutes}</p>
                        <p> <span className="font-semibold">Cuisine: </span>{singleProduct.cuisine}</p>
                        <p><span className="font-semibold">Difficulty: </span>{singleProduct.difficulty}</p>

                        <div>
                            <h1 className="text-2xl font-bold mt-5">Ingredients:</h1>
                            <ul className="list-disc pl-5 mt-4">
                                {(singleProduct.ingredients|| []).map((ingredient, index) => (
                                    <li key={index} className="font-semibold">
                                        <span className="italic">{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

            ) : (
                <div>Loading...</div>
            )}

        </div>
    );
}
export default ProductDescription;