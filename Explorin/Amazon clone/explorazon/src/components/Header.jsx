import React from 'react'


export default function Header() {
  const divClassName = " hover:border-white border border-transparent";



  return (
    <div className='w-full bg-[#131921] flex text-white justify-between items-center  gap-2 px-4 py-2 '>
      <div>Amazon</div>

      <HeaderBox
        Image={() => <img width="18px" height="18px" src="https://img.icons8.com/ios/FFFFFF/marker--v1.png" alt="marker--v1" />}
        subContent="Deliver to Hardwar 247661‌"
        content="Update Location"
      />
      
      <form className={`flex-1 flex border rounded h-10 overflow-hidden group z-[4] outline-2 group-has-[input:active]:outline-[#FF9900] text-black`}>
        <select className="bg-[#E6E6E6] px-2 z-[4]  hover:outline-2 hover:outline-[#FF9900] active:outline-2 active:outline-[#FF9900]">
          <option>All</option>
          </select>
        <input type="text" className="flex-1 bg-white inp" placeholder='Search Amazon.in'/>
        <button className="px-2 bg-[#FEBD69] z-[4] hover:outline-2 hover:outline-[#FF9900] active:outline-2 active:outline-[#FF9900]"
        >
          <img
            className="size-6"
            src="https://img.icons8.com/ios-filled/100/search.png"
            alt="search"
          />
        </button>
      </form>

      <HeaderBox
        Image={() => <img width="22" height="16" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-indian-flag-india-icongeek26-flat-icongeek26.png" alt="external-indian-flag-india-icongeek26-flat-icongeek26"/>}
        content='En' dropdown={true} />

      <HeaderBox
        subContent="Hello, sign in"
        content="Account & Lists"
        dropdown={true} />


      <HeaderBox subContent="Returns" content="& Orders" />

      <HeaderBox
      Image={() => <img width="32" height="32" src="https://img.icons8.com/windows/FFFFFF/shopping-cart.png" alt="shopping-cart" />}
        content="Cart"
        />

    </div>
  )
}


const HeaderBox = ({
  className = "",
  Image = null,
  subContent = "",
  content = "",
  dropdown = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`  hover:border-white border border-transparent px-4 py-1 flex justify-center items-center `}
    >
      {Image ? <Image /> : null}
      <div
        className={` ${className} flex flex-col justify-center items-start  `}
      >
        <span className=" text-xs font-medium leading-4">{subContent}</span>
        <span className="flex justify-center items-center gap-1 flex-nowrap text-sm font-bold leading-4">
          {content}
          {dropdown ? (
            <img
              className="w-3 h-3 "
              src="https://img.icons8.com/FFFFFF/forma-regular-filled/48/sort-down.png"
              alt="sort-down"
            />
          ) : null}
        </span>
      </div>
    </div>
  );
};