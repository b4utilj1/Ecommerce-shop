import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaStar } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className=' pb-12 bg-cover relative mt-10 bg-hero bg-center bg-no-repeat h-screen w-full'>
      <div className='max_padd_container relative top-32 xs:top-52 '>
        <h1 className='h1 mt-12 mx-3 capitalize text-gray-90 max-w-[37rem]'>Tienda Digital</h1>
        <p className='text-gray-50 mx-3 regular-16 mt-6 max-w-[33rem]'>Lore ccusan nihu ut obcaeuae
         ipsam, placeat consequuntur magnam itaque. Modi, culpa, non cumque ullam distinctio aut voluptas, officia
            velit repellat dolores corrupti totam earum quasi vitae alias. In quas delectus soluta hic! Molestiae asperiores quidem veritatis animi placeat facere commodi nesciunt voluptates amet eligendi, rem, consectetur harum esse obcaecati quisquam atque cumque magnam excepturi odit. Fuga sint sit debitis voluptates sequi magnam harum, expedita similique. Incidunt sapiente, et beatae delectus ratione odio sint in minus repellendus esse voluptatum sunt a sequi quo corrupti rerum qui. Exercitationem optio magni soluta, dolores praesentium recusandae, alias iure, ea fugit assumenda doloribus quaerat consectetur. Aspernatur beatae assumenda veritatis eaque optio in tenetur possimus, quis sunt porro culpa, id ullam animi repudiandae nisi minima accusantium vitae consectetur unde temporibus earum hic magni similique! Commodi animi hic omnis iste fuga! Minus id vero ea reiciendis dignissimos aliquam incidunt. Velit tenetur explicabo ab eligendi, vel labore quam et hic, nesciunt rerum praesentium enim facere quibusdam 
          consequuntur inventore error nihil?</p>
          <div className='flexStart !items-center gap-x-4 my-10'>
            <div className='!regular-24 flexCenter gap-x-3'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'> Excelentes
            reviews</span></div>
          </div>
          <div className='max-xs:flex-col flex gap-2'>
            <NavLink to={''} className={'btn_dark_rounded flexCenter'}>
             Comprar Ahora</NavLink>
            <NavLink to={''} className={'btn_dark_rounded flexCenter gap-x-2'}>
            <MdOutlineLocalOffer className='text-2xl'/>Ofertas</NavLink>
          </div>
      </div>
    </section>
  )
}
