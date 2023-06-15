import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSort } from '../../store/slice/ticketsSlice'
import cn from 'classnames'

const Sort = () => {
  const [butotnActive, setButtonActive] = useState('')
  const dispatch = useDispatch()

  const clickButtonHandle = (e) => {
    const id = e.target.id
    dispatch(addSort(id))
    setButtonActive(e.target.id)
  }



  return (
    <div className='w-full grid grid-cols-3' onClick={(e) => clickButtonHandle(e)
    }>
      <button id='price' className='' >Самый дешевый</button>
      <button id='time' className='py-[18px]' >Самый быстрый</button>
      <button id='optimal' >Самый оптимальный</button>
    </div>
  )
}

export default Sort