import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSort } from '../../store/slice/ticketsSlice'

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
      <button id='price'
        className={
          'py-[18px] cursor-pointer text-[12px] sm:text-base border border-purple-900 font-bold text-base text-center text-purple-900 bg-[#E8EBF2] rounded-l-lg ' + (butotnActive === 'price' ? 'bg-purple-900 text-white' : '')
        }
      >Самый дешевый</button>
      <button id='time' className={'py-[18px] border cursor-pointer border-purple-900 font-bold text-base text-center text-purple-900 text-[12px] sm:text-base bg-[#E8EBF2] ' + (butotnActive === 'time' ? 'bg-purple-900 text-white' : '')}>Самый быстрый</button>
      <button id='optimal' className={'py-[18px] border cursor-pointer border-purple-900 text-[12px] sm:text-base font-bold text-base text-center text-purple-900 bg-[#E8EBF2] rounded-r-lg ' + (butotnActive === 'optimal' ? 'bg-purple-900 text-white' : '')}>Самый оптимальный</button>
    </div>
  )
}

export default Sort