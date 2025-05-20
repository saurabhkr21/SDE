import React from 'react'


export default function Header() {
  const divClassName = " hover:border-white border border-transparent";
  
  return (
    <div className='w-screen bg-[#131921] flex text-white justify-between items-center  gap-4 px-4 py-2 '>
      <div>Amazon</div>


      <div className={`${divClassName} flex justify-center items-center`}>
        <img className='w-[30px] h-[30px]' src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt="" />
        <div className={`${divClassName} flex flex-col justify-center items-center`}>
          <span>Deliver to Hardwar 247661‌</span>
          <span>Update Location</span>
        </div>
      </div>

      <form className={`${divClassName} flex justify-center items-center gap-2 border-white w-[40%] h-[50px]`}>
        <select>
          <option value="">All</option>
        </select>
        <input type="text"  className={`flex flex-1 bg-white h-full text-black`} />
        <button>Search</button>
      </form>

      <div className={`${divClassName}`}>🚩En</div>

      <div className={`${divClassName} flex flex-col gap-2`}>
        <span>Hello,sign in</span>
        <span>Account & Lists</span>
      </div>

      <div className={`${divClassName} flex flex-col justify-center items-center gap-2`}>
        <span>return</span>
        <span>& Order</span>
      </div>

      <div className={`${divClassName} flex  justify-center items-center `}>
        <img className='w-[30px] h-[30px]  ' src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="" />
        <span> 0 </span>
        <span> Cart </span>
      </div>

    </div>
  )
}


