import React from 'react'
import Navbar from './Navbar'
import { useParams, useSearchParams } from 'react-router-dom'
const DisplayAlbum = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <Navbar />
    </>
  )
}

export default DisplayAlbum
