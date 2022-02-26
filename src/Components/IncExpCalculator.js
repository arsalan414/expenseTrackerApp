import react,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncExpCalculator = () => {
    const transection = useContext(GlobalContext)
    console.log(transection)
  return (
    <div></div>
  )
}