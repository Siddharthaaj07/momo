import React from 'react'

function Failed() {
  return (
    <div className='bg-red-700'>
        <div className='shadow-md my-5 rounded-md p-3 shadow-stone-900 bg-white h-96 w-96   text-center inline-block justify-center'>
            <img className="h-32 mb-10 items-center inline-block" src="https://cdn.pixabay.com/photo/2024/04/30/13/34/failed-8730239_640.png"></img>
            <h1 className="text-xl font-bold"   >Payment Failed</h1><br />
            <p>Your Payment has been failed please tray again. Thanks!</p><br />
            <button className="rounded-full bg-red-600 font-bold text-white h-10 w-60">Return to payment option</button>
        </div>
        </div>
  )
}

export default Failed