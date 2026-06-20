import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Política de Troca Fácil</p>
        <p className='text-gray-500'>Nós oferecemos uma política de trocas sem complicações</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Política de Devolução de 7 dias</p>
        <p className='text-gray-500'>Oferecemos uma política de devolução gratuita de 7 dias.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Melhor Suporte ao Cliente</p>
        <p className='text-gray-500'>Oferecemos suporte ao cliente 24 horas por dia, 7 dias por semana.</p>
      </div>

    </div>
  )
}

export default OurPolicy
