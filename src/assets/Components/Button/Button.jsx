import { GoArrowRight } from "react-icons/go";

function Button() {
  return (
    <div>
        <button className="borber-2 bg-green-900 text-white p-4 rounded-full flex items-center 
        gap-x-2 hover:bg-green-500 font-bold">
            Explore Food Menu 
            <GoArrowRight size={20} />

            </button>
        </div>
  )
}

export default Button;