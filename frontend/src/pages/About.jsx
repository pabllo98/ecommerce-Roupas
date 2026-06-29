import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'SOBRE'} text2={' NÓS'}  />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p> Nossa missão é oferecer peças de alta qualidade que unem conforto, tendências e preços acessíveis. Trabalhamos cuidadosamente para selecionar coleções que acompanham as últimas novidades da moda, garantindo que nossos clientes encontrem o look perfeito para qualquer ocasião.</p>
             <p> Na Forever, valorizamos a confiança e a satisfação de cada cliente. Por isso, buscamos proporcionar uma experiência de compra simples, segura e agradável, desde a escolha dos produtos até a entrega. Estamos comprometidos em crescer junto com nossos clientes, oferecendo estilo, qualidade e excelência em cada detalhe.</p>
             <b className='text-gray-800'>Nossa Missão</b>
             <p> Na Forever, nossa missão é inspirar pessoas a expressarem sua personalidade por meio da moda. Trabalhamos para oferecer roupas de alta qualidade, preços acessíveis e um atendimento de excelência, tornando cada compra uma experiência simples, segura e agradável.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'POR QUE'} text2={' ESCOLHER A FOREVER?'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qualidade Garantida:</b>
          <p className='text-gray-600'> Selecionamos cuidadosamente cada produto para garantir qualidade, conforto e durabilidade, oferecendo peças que unem estilo e excelência em cada detalhe.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Praticidade:</b>
          <p className='text-gray-600'>Com uma interface intuitiva e um processo de compra simples e seguro, tornamos sua experiência de compra rápida, prática e agradável, do início ao fim.</p>
        </div>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Atendimento de Excelência:</b>
          <p className='text-gray-600'>Nossa equipe está sempre pronta para oferecer um atendimento ágil, cordial e eficiente, garantindo suporte em todas as etapas da sua compra e a melhor experiência possível.</p>
        </div>

      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
