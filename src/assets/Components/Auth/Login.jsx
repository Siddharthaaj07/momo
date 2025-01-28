import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";



function Login(){
  const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  console.log("user",user);
  console.log("isAuthenticated",isAuthenticated);
  console.log("isLoading",isLoading);



    return (

   
      <div className="">
        <form class="w-96 shadow-md shadow-orange-400 space-y-3 flex flex-col border-2 border-black m-auto mt-16">
       <label className='border-b-2 w-10 border-black' htmlFor="email">Email</label>
       <input  type="email" placeholder="Enter your Email" />

       <label className='border-b-2 w-10 border-black'  htmlFor="password">Password</label>
       <input  type="password" placeholder="Enter your Password" />
       <button  className="rounded-md p-2 bg-orange-600 text-center">Login</button>
       <button
       onClick={()=>{
        loginWithRedirect();

        
       }}
       className="items-center flex justify-center text-center rounded-md p-2 bg-orange-600  ">
       <FcGoogle/>
        <span>Login with Google</span></button>
    </form>
      </div>
    )
  }


export default Login;