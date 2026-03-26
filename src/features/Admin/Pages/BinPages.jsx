import React from 'react'
import useAdmin from '../hooks/useAdmin'
import BinList from '../components/BinList.jsx'
import CreateBinForm from '../components/CreateBinForm.jsx'
import "../styles/binPages.style.scss"

function BinPages() {
  const { dustbins, isLoading } = useAdmin()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='bin-pages'>
      <h2>Dustbin Management</h2>

      <div className='bin-layout'>
        <BinList dustbins={dustbins} />
        <CreateBinForm />
      </div>
    </div>
  )
}

export default BinPages