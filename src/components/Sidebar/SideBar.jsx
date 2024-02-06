import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col justify-center items-center p-[10px]'>

        <div className="logo">
<img src="/BethanysPieShop/images/logos/bethany-badge-logo.png" height={'200px'} width={'200px'} alt="" />
        </div>
        <div className="links flex flex-col justify-center items-center gap-[1vh] w-[100%]">
            <h1 className=' font-bold'>Browse your pies</h1>
           <Link to="/allpies" className='text-[#FF9653] underline ' >ALL PIES</Link>
           <Link to="/chesecakes" className='text-[#FF9653] underline' >CHESE CAKES</Link>
           <Link to="/fruitpies" className='text-[#FF9653] underline' >FRUIT PIES</Link>
           <Link to="/seasonalpies" className='text-[#FF9653] underline '>SEASONAL PIES</Link>
           <Link to="/allpies" className='text-[#FF9653] underline '>PRMOTIONS</Link>
        </div>

    </div>
  )
}

export default SideBar