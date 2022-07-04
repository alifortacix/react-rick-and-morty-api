import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../components/Elements/Button'
const Page404 = () => {
  return (
    <div>
      <h1 className='display-1'>Sayfa Bulunamadı!</h1>
      <Link to='/'>
        <Button variant='success' text='Anasayfaya Dön!' />
      </Link>
      
    </div>
  )
}

export default Page404
