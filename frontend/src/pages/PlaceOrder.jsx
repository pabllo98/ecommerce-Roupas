import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('pix')

  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300'>
      {/*--------------Lado Esquerdo-------------- */}

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Informações'} text2={' De Entrega'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Nome'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='SobreNome'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Rua'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Cidade'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Estado'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Cep'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='País'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Celular'/>
      </div>

      {/*---------------Lado Direito---------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-8'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'Forma'} text2={' De Pagamento'} />
          {/*------------forma de pagamento selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('nubank')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'nubank' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.nubank} alt="" />
            </div>
            <div onClick={()=>setMethod('pix')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'pix' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.pix} alt="" />
            </div> 
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
