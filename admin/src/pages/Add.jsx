import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Enviar imagem</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image1' hidden  />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image2' hidden  />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image3' hidden  />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image4' hidden  />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Nome do Produto</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Digite aqui' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Descrição do Produto</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Digite o conteúdo aqui' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Categoria do produto</p>
          <select className='w-full px-3 py-2'>
            <option value="Men">Homens</option>
            <option value="Women">Mulheres</option>
            <option value="Kids">Crianças</option>
          </select>
        </div>

         <div>
          <p className='mb-2'>Subcategoria</p>
          <select className='w-full px-3 py-2'>
            <option value="Topwear">Camisetas e Blusas</option>
            <option value="Bottomwear">Calças e Shorts</option>
            <option value="Winterwear">Roupas de Inverno</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Preço do Produto</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Tamanhos</p>
        <div className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>P</p>
          </div>

           <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>

           <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>G</p>
          </div>

           <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>GG</p>
          </div>

           <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>G3</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Adicionar aos mais vendidos</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white cursor-pointer'>Adicionar</button>
    </form>
  )
}

export default Add
