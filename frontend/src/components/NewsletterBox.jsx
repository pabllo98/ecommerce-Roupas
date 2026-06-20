import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Increva-se agora e ganhe 20% de desconto!</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae maiores similique quam architecto enim quia, voluptatibus nam exercitationem nobis id sed adipisci dolorum cum aliquam blanditiis aspernatur ipsa laborum illum.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Digite seu e-mail' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>INSCREVA-SE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
