import { Diamond } from "lucide-react"

const Title = ({applicationName}) => {
  return (
    <div className="w-full h-10 pl-5 bg-[#141313] text-[#f6e7d9] flex justify-between items-center select-none">
        <h1>{applicationName}</h1>
        <div className="flex">
            <button className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition ">-</button>
            <button className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition "><Diamond size={16} /></button>
            <button className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition ">x</button>
        </div>
    </div>
  )
}

export default Title