import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState ] = useState('Cadastro');

  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Nome' required/>}
      <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required/>
      <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Senha' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Esqueceu sua Senha?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=> setCurrentState('Cadastro')} className='cursor-pointer'>Criar sua conta</p>
          : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Faça login aqui</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{currentState === 'Login' ? 'Entrar' : 'Cadastre-se'}</button>
    </form>
  )
}

export default Login
