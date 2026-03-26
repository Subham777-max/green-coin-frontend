import React from 'react'
import { Trash2 } from 'lucide-react';
function BinCard({ bin }) {
  const percentage = ((bin.currentFillLevel / bin.capacity) * 100).toFixed(2);

  const getColor = () => {
    if (percentage > 80) return "red"
    if (percentage > 50) return "orange"
    return "green"
  }

  return (
    <div className='bin-card'>
      <div className='bin-left'>
        <div className='bin-icon'><Trash2 size={20} /></div>

        <div>
          <p className='bin-name'>{bin.name}</p>
          <p className='bin-capacity'>Capacity: {bin.capacity}</p>
        </div>
      </div>

      <div className='bin-right'>
        <p className={`percentage ${getColor()}`}>
          {percentage}% Full
        </p>

        <div className='progress-bar'>
          <div
            className={`fill ${getColor()}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default BinCard