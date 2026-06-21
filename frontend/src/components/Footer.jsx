/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laboriosam optio nam a possimus est velit dolores, reiciendis fuga recusandae unde harum, tenetur suscipit quam voluptas nostrum blanditiis, eius repudiandae.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>EMPRESA</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Sobre nós</li>
                    <li>Entrega</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Entre em Contato</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+55 82 9999-9999</li>
                    <li>Forever@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr className='border-gray-300'/>
            <p className='py-5 text-sm text-center'>Direitos autorais 2026@ forever.com - Todos os direitos reservados</p>
        </div>
    </div>
  )
}

export default Footer
