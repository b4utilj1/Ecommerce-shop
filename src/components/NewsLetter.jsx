import React from 'react'

export const NewsLetter = () => {
  return (
    <section className='max_padd_container py-12 xl:py-28 bg-white'>
        <div className='mx-auto xl:w-[88%] flexCenter flex-col gap-y-8 w-fuull max-w-[666px]'>
            <h3 className='h3'>Recibe oferta exclusiva en tu email</h3>
            <h4 className='uppercase bold-18'>Suscríbete a nuestra NewsLetter y mantente actualizado</h4>
            <div className='flexBetween rounded-full ring-1 ring-slate-900/5 hover:ring-offset-slate-900/15 bg-primary
            w-full max-w-[588px]'>
                <input type="email" placeholder='Your email addres'
                className='w-full bg-transparent ml-7 border-none outline-none regular-16' />
                <button className='btn_dark_rounded '>Subscribete</button>
            </div>
        </div>
    </section>
  )
}
