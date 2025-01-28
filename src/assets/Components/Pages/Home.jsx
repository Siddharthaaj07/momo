import Button from "../Button/Button"
import bgOne from '/src/assets/images/bgOne.jpg'
import circle from '../../images/circle.jpg'
import plates from '../../images/plates.jpg'
import man from '../../images/man.jpg'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import manchefa from '../../images/manchefa.jpg';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import quality from '../../images/quality.jpg';
import party from '../../images/party.jpg';
import categring from '../../images/categring.jpg';

import girl2 from '../../images/girl2.jpg'

// import gat from '../../images/get.jpg'

function Home() {

  const [recipes, setRecipes] = useState([]);

  const [filterProduct, setfilterProduct] = useState([]);
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
  };

  const filterItems = (country) => {
    const newItems = recipes.filter((item) => {
      return item.cuisine == country;
    });

    setfilterProduct(newItems);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border-2 border-red-800 w-full  overflow-x-hidden">
      <div className="flex mt-5  h-96 ">
        <div className=" w-[50%]   ml-[20%] mt-20">
          <p className="text-1xl text-slate-500 "> RESTAURANT</p>
          <h1
            className="text-3xl flex
        items-center font-bold "
          >
            The{" "}
            <span
              style={{
                backgroundImage: `url(${bgOne})`
              }}
              className=" h-16 w-36 bg-contain  text-center text-3xl
         bg-no-repeat   flex  items-center justify-center  text-white ml-2 "
            >
              #One
            </span>{" "}
          </h1>
          <h1 className="text-3xl">
            Momo <span className="text-orange-600">Restaurant</span>
          </h1>
          <p>
            More than <span className="text-orange-600">20+ Varieties </span>of
            momo available for you
          </p>

        </div>

        <div className="   flex items-center p-50 overflow-hidden h-[110%] ">
          <img
            src={circle}
            alt="circle_img"
            className="w-[31%] ml-[70%] mb-14"
          />
        </div>

        <img
          src={plates}
          alt="momo"
          className=" absolute w-80 left-[75%] mt-12 "
        />
      </div>

      <div className=" flex items-center gap-20 ">
        <div className=" w-[30%] p-5 ml-[20%] ">
          <img
            src={man}
            alt="man"
            className="w-auto h-96"
          />
        </div>


        <div className="w-[30%]">
          <h1 className="text-2xl font-bold">
            Why Customers <span className="text-orange-500"> Love Us</span>
          </h1>{" "}
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
            cursus turpis.
          </p>{" "}
          <br />

        </div>
      </div>


      {/* man  */}

      <div className=" mt-9 text-center  ">
        <h1 className="text-2xl font-bold">
          Our <span className="text-orange-600 "> Most Popular</span> Recipes
        </h1>
        <p className="text-slate-600">
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>

        <div className="flex justify-center items-center gap-5 mt-10">
          <button
            onClick={() => {
              filterItems("All");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            All
          </button>
          <button
            onClick={() => {
              filterItems("Italian");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            Italian
          </button>

          <button
            onClick={() => {
              filterItems("Pakistani");
            }}
            className="bg-slate-300 rounded-2xl w-24"
          >
            Pakistani
          </button>
          <button
            onClick={() => {
              filterItems("Russian");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            Russian
          </button>
        </div>

        {/* this is for three items photo........ */}

        <div className=" flex items-center justify-center ">
          {filterProduct.length > 0 ? (
            <div className="  flex flex-wrap p-5 gap-20 justify-center items-center ">
              {filterProduct.map((items) => {
                return (
                  <div
                    key={items.id}
                    className=" h-44 w-52 justify-center items-center shadow-2xl shadow-slate-500 rounded-3xl   "
                  >
                    <img
                      src={items.image}
                      alt="menu"
                      className="w-64 p-5 rounded-3xl"
                    />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">
                      Price:Rs {items.caloriesPerServing}
                    </p>

                  </div>
                );
              })}
            </div>
          ) : recipes.length > 0 ? (
            <div className="  flex flex-wrap p-5 gap-20 justify-center items-center ">
              {recipes.map((items) => {
                return (
                  <div
                    key={items.id}
                    className=" shadow-2xl shadow-slate-500 rounded-3xl   "
                  >
                    <img
                      src={items.image}
                      alt="menu"
                      className="w-64 p-5 rounded-3xl"
                    />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">
                      Price:Rs {items.caloriesPerServing}
                    </p>
                    <p className="text-lg italic">
                      prepTimeMinutes: {items.prepTimeMinutes}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p> wait for a movement........ data is comming......</p>
          )}
        </div>

        {/* this is for button */}
        <div className="flex justify-center items-center mt-20">
          <NavLink to="/menu">
            <Button title="Explore Food Menu" />
          </NavLink>
        </div>

        <div className=" mt-7">
          <h1 className="text-2xl font-bold">
            {" "}
            <span className="text-orange-500">We Offer People</span> The Service
            They Want
          </h1>
        </div>

        {/* this is the place for the video */}
        <div className=" border-2  border-black h-96 w-[100%] flex justify-center mt-7 ">
          <img src={manchefa} alt="" className="w-[100%] h-[150%]" />
        </div>

        {/* this is after the video */}

        <div className=" flex justify-center items-center gap-40 mt-60">
          <div className=" border-2 shadow-md shadow-orange-400 border-black 
          items-center justify-center text-center h-60 w-64">
            <img
              src={quality}
              alt="qualityFood"
              className="items-center justify-center  h-24 text-center"
            />

            <h1 className="mt-8 font-bold">Quality Food</h1>
            <p>Only the best food with top quality products and ingredients</p>
          </div>
          <div className=" border-2 shadow-md shadow-orange-400 border-black 
          items-center justify-center text-center h-60 w-64">
            <img
              src={party}
              alt="party_img"
              className="items-center justify-center  h-24 text-center"
            />
            <h1 className="mt-8 font-bold">Private Party</h1>
            <p>Get the best food for all your private parties and gatherings</p>
          </div>
          <div className=" border-2 shadow-md shadow-orange-400 border-black 
          items-center justify-center text-center h-60 w-64">
            <img
              src={categring}
              alt="chefCap_img"
              className="items-center justify-center  h-24 text-center"
            />
            <h1 className="mt-8 font-bold">Categring</h1>
            <p>Get the best food for any occasions and gatherings</p>
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <NavLink to="/services">
            <Button title="Explore Food Services" />
          </NavLink>
        </div>

        {/* this is for the girl */}
        <div className=" flex mt-10 gap-10 bg-slate-100 ">
          <div className="w-96 ml-64 text-left mt-16">
            <h1 className="text-3xl font-bold">
              200+ <span className="text-orange-500">Happy Customers</span>
            </h1>
            <p className="text-green-900 mt-5 text-2xl font-bold">
              What our customers say about us
            </p>
            <br />
            <p className="text-lg italic text-slate-600">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>

            <h1 className="text-2xl font-bold mt-2 mb-6">Livia Dias</h1>
            <div className="flex gap-3">
              <CiCircleChevLeft size={30} />
              <CiCircleChevRight size={30} />
            </div>
          </div>

          <div className=" ml-44 mt-5 mb-10">
            <img
              src={girl2}
              alt="girl"
              className="w-80 h-96"
            />
          </div>
        </div>
      </div>


      <div className="  w-[60%] p-8 mr-28 boeder-2 border-blue-600">




        <div className="p-8 mr-28 items-center justify-center text-center ">

          <h1 className="text-4xl font-bold ml-5 mt-5 ">Get <span className="text-orange-600">In toush</span></h1>
          <p className="font-bold text-2xl text-blue-950 ml-5 mt-5">Our Friendly team would love to hear from you</p>


          <div className=" shadow-sm w-[100%] h-[100%] ml-4 ">





            <form className="ml-5 mt-5 border-2 border-black ">
              {/* First Name */}
              <div className="flex gap-10 ">
                <div>
                  <label className="block  mb-1 " htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className=" p-2 border rounded w-96"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block  mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className=" p-2 border rounded w-96"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block mb-1" htmlFor="purpose">
                  What Can We Do For You?
                </label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  placeholder="Enter your purpose"
                  className=" w-full p-2 border rounded"
                />
              </div>


              {/* Phone Number */}
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block  mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full h-11 p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <br />
              <Button title='Send message' />

            </form>

          </div>
        </div>

      </div>
      <div className="  border-2 border-black h-[100%] w-[100%]">
        {/* <img src={Map} alt="map" className="h-[100%] w-[100%]" /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.98504395763!2d85.3327296751469!3d27.68685712639547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc4b11c08f%3A0x12e1bae294ead9bd!2sPizza%20Station!5e0!3m2!1sen!2snp!4v1737184269839!5m2!1sen!2snp"
          width="600"
          height="450"
          allowFullScreen=""
          className="w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


      </div>


    </div>
  )
}

export default Home;