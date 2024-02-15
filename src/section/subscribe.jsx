

const subscribe = () => {
  return (
    <div className="max-container border-2 border-red-500 flex flex-col max-lg:flex-col justify- between items-center gap-10">
     
        <p className=" text-4xl  leading-[68px]  font-palanquin font-bold max-sm:text-xl max-md:text-3xl ">sign up for <span className="text-coral-red">updates</span> & newsletter</p>
     
      <div className=" border-2 border-slate-grey   flex justify-between p-1.5 rounded-full gap-5 mb-4 w-full lg:max-w-[40%] ">
        <div className=" ">
        <input type="text" placeholder="subscribe@nike.com" className="w-[250px] py-1.5 " />
        </div>
       <div className="  " >
       <button  className="bg-red-500 w-[120px] py-1.5 rounded-full text-xl font-bold  flex items-center max-sm:justify-end max-sm:w-full">sign up</button>
       </div>
        
      </div>

    </div>
  )
}

export default subscribe