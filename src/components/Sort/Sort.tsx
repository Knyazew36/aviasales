import React from 'react'
import { useDispatch } from 'react-redux'
import { addSort } from '../../store/slice/ticketsSlice'
const Sort = () => {
  const dispatch = useDispatch()

  const clickButtonHandle = (e) => {
    const id = e.target.id
    dispatch(addSort(id))
  }

  return (
    <div className='flex m-2' onClick={(e) => clickButtonHandle(e)
    }>
      <button id='price' >Самый дешевый</button>
      <button id='time' >Самый быстрый</button>
      <button id='optimal' >Самый оптимальный</button>
    </div>
  )
}

export default Sort