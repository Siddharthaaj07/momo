import { useSearchParams } from "react-router-dom"
function Success() {
    const[searchParms]=useSearchParams()
    const data =searchParms.get(data)
    console.log(data)

    const decodedData =atob(data);
    console.log(decodedData);
    const newData=  JSON.parse(newData)
    console.log(decodedData)
    return (
        <div className="bg-green-500">
        <div className=' shadow-md my-5 rounded-md p-3 shadow-stone-900  h-80 w-80   text-center inline-block justify-center bg-white'>
            <img className="h-20 mb-10 items-center inline-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPNbBpZeXnXfTuA6AWek-Kj8NYEVbYdG6ayi5bIWarDuryXDrILdKMTd597quLD0PBKM&usqp=CAU" alt="" />
            <h1 className="text-xl font-bold"   >Thank You</h1><br />
            <p>Your Payment has been successfully submitted. Thanks!</p><br />


            <h1>Transaction Code: <span>{newData.transaction_code}</span></h1>
            <h1>Transaction Amount: <span>{newData.transaction_amount}</span></h1>
            <h1>Status: <span>{newData.COMPLETE}</span></h1>


            <button className="rounded-full bg-green-500 font-bold text-white h-6 w-56">OK</button>
        </div>
        </div>
    )
}

export default Success;