import React from 'react'

export const ProductDescription = () => {
  return (
    <div className='mt-20 '>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs 
            !py-[6px] w-36'>Descripcion</button>
            <button className='btn_dark_outline !rounded-none !text-xs 
            !py-[6px] w-36'>Guia cuidados</button>
            <button className='btn_dark_outline !rounded-none !text-xs 
            !py-[6px] w-36'>Guia de tallas</button>   
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Eius, tempora atque. Delectus omnis rerum totam dicta. 
                Dolore debitis dolor reprehende
                orro magni 
                consectetur adipisicing elit. 
                Eius, tempora atque. Delectus omnis rerum totam dicta. 
                Dolore debitis dolor reprehende
                orro magni eueum?</p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Eius, tempora atque. Delectus omnis rerum totam dicta. 
                Dolore debitis dolo
                consectetur adipisicing elit. 
                Eius, tempora atque. Delectus omnis rerum totam dicta. 
                Dolore debitis dolor reprehende
                orro magni eu </p>
        </div>
    </div>
  )
}
