import React from 'react'

export const Login = () => {
  return (
    <section className='max_padd_container flexCenter flex-col pt-32'>
      <div className='max-w-[555px] h-[600px] bg-white m-auto px-14 py-10
      rounded-md'>
        <h3 className='h3'>Iniciar Sesion</h3>
        <div className='flexflex-col gap-4 mt-7'>
          <input type="text" placeholder='Tu nombre' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
          <input type="email" placeholder='Email'  className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
          <input type="password" placeholder='Contraseña' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
        </div>
        <button className='btn_dark_rounded my-4 w-full !rounded-md'>Continuar</button>
        <p className='text-black font-bold'>Ya tienes una cuenta?<span className='text-secondary underline cursor-pointer'>Inicia Sesion</span></p>
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name='' id='' />
          <p>Si deseas continuar, debes aceptar los terminos de uso y privacidad</p>
        </div>
      </div>
    </section>
  )
}
