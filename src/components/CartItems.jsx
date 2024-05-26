import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { TbTrash } from 'react-icons/tb'

export const CartItems = () => {
    
  const {getTotalcartItems, all_products, cartItems, removeTocart} = useContext(ShopContext)

  return (
    <section className='max_padd_container pt-28'>
        <table className='w-full mx-auto mt-10'>
            <thead>
                <tr className='bg-slate-900/10 regular-18 sm:regular-22
                text-start py-12'>
                <th className='p-1 py-2'>Productos</th>
                <th className='p-1 py-2'>Nombre</th>
                <th className='p-1 py-2'>Precio</th>
                <th className='p-1 py-2'>Cantidad</th>
                <th className='p-1 py-2'>Total</th>
                <th className='p-1 py-2'>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {all_products.map((e) => {
                    if(cartItems[e.id] > 0){
                        return <tr key={e.id} className='border-b border-slate-900/3
                        text-gray-30 medium-14 text-center'>
                            <td className='flexCenter'><img src={e.image} alt="prodimg" height={43} width={43} className='
                            rounded-lg ring-1 ring-slate-900/5 my-1'/></td>
                            <td><div className='line-clamp-3'>{e.name}</div></td>
                            <td>${e.new_price}</td>
                            <td className='w-16 h-16  bg-white'>{cartItems[e.id]}</td>
                            <td>${e.new_price * cartItems[e.id]}</td>
                            <td>
                                <div className='bold-22 pl-12'><TbTrash onClick={() => removeTocart(e.id)}/></div>
                            </td>
                        </tr>
                    }
                })}
            </tbody>
        </table>
        {/* detalles carrito */}
        <div className='flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md
        bg-white w-full max-w-[666px]'>
            <div className='flex flex-col gap-10'>
                <h4 className='bold-20'>Resumen</h4>
                <div>
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Subtotal :</h4>
                        <h4 className='text-gray-30 font-semibold'>$
                        {getTotalcartItems()}</h4>
                    </div>
                    <hr />
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Gastos de envío:</h4>
                        <h4 className='text-gray-30 font-semibold'>Gratis</h4>
                    </div>
                    <hr />
                    <div className='flexBetween py-4'>
                        <h4 className='bold-18'>Total:</h4>
                        <h4 className='bold-18'>$
                        {getTotalcartItems()}</h4>
                    </div>
                </div>
                <button className='btn_dark_rounded w-44'>Verificar</button>
                <div className='flex flex-col gap-10'>
                    <h4 className='bold-20 capitalize'>Codigo de descuento</h4>
                    <div className='flexBetween pl-5 h-12 bg-primary
                    rounded-full ring-1 ring-slate-900/10'>
                        <input className='bg-transparent border-none outline-none' type="text" placeholder='Cupon de descuento'/>
                        <button className='btn_dark_rounded'>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}