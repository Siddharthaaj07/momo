import Button from "../Button/Button"
import bgOne from '/src/assets/images/bgOne.jpg'
import circle from '../../images/circle.jpg'
import plates from '../../images/plates.jpg'
import gat from '../../images/get.jpg'

function Home() {
  return (
    <div className=" w-full  overflow-x-hidden">
      <div className="border-2  bg-red-400 border-black h-40 shodow-lg">
        <h1 className="text-white font-bold text-6xl mt-9 pl-10">HOME</h1>
      </div><br />

      <div className="border-2 border-r-green-600 flex gap-7">
        <div className=" w=[36%] border-2 border-red-600 h-[700px] w-[700px] text-5xl">
          <p className="text-4xl">RESTAURANT</p>
          <h1 className="text-6xl flex items-center ">The <span style={{
            backgroundImage: `URL(${bgOne})`
          }}

            className="h-16 w-36 bg-contain text-center bg-on-repeat text-3xl 
 flex text-white box-border
items-center justify-center">#One</span> </h1>
          <h1 className="text-3xl">Momo <span className="text-red-800">Restaurant</span></h1>

          <p>More then <span className="text-red-700">20+ Varieties </span> of momo available for you</p><br />
          momo
          <Button />

        </div>

        <div className="w-[40%] relative overflow-hidden border-2 border-red-600 ml-96">
          <img
            src={circle}
            alt=""
            className="relative h-[700px] left-72 "
          />
          <img
            src={plates}
            alt=""
            className="w-36 h-36 absolute -bottom-8 -left-8"
          />



        </div>


      </div>
      <div className="border-2 border-red-700 flex gap-48">
        <div className="border-2 border-green-600">
          <img
            src={gat}
            alt=""
            className="relative h-[100px]  "
          />
        </div>

        <div className="border-2 border-red-700 gap-5" >
          <h1 className="text-5xl font-bold">Why Customers<span className="text-red-800">Love Us</span> </h1><br />
          <p>Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh fermentum vulputate tortor. Egestas facilisi luctus turpis arcu dignissim.
            Amet neque enim etiam purus id. Tortor sit orci blandit cursus turpis.</p>
        </div>

      </div>



    </div>
  )
}

export default Home;