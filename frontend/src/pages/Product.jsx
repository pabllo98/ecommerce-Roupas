import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  
  return productData ? (
    <div className='border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      { /* Dados do produto*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Imagem do Produto */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Informações dos produtos */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Selecione o Tamanho</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-400': ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>Adicionar no Carrinho</button>
          <hr className='mt-8 sm:w-4/5 border-gray-300' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Produto 100% original.</p>
            <p>Disponível para pagamento via Pix ou Cartão.</p>
            <p>Troca ou devolução fácil em até 7 dias.</p>
          </div>
        </div>
      </div>

      {/*-------------DEscrição e Review------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 px-5 py-3 text-sm'>Descrição</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
          <p>Um site de e-commerce é uma plataforma online que facilita a compra e a venda de produtos ou serviços pela internet. Ele funciona como um mercado virtual onde empresas e indivíduos podem expor seus produtos, interagir com clientes e realizar transações sem a necessidade de uma presença física. Os sites de e-commerce ganharam imensa popularidade devido à sua conveniência, acessibilidade e ao alcance global que oferecem.</p>
          <p>Os sites de e-commerce geralmente exibem produtos ou serviços acompanhados de descrições detalhadas, imagens, preços e quaisquer variações disponíveis (por exemplo, tamanhos, cores). Cada produto geralmente possui sua própria página dedicada com as informações relevantes.</p>
        </div>
      </div>

      {/*----------Produtos Relacionados------------------ */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
