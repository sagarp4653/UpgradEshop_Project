import React from 'react'
import { updateAdminStatusAction } from '../Redux/Action/ProductStoreAction'
import {useDispatch} from 'react-redux'

const ProductDetails = () => {
    const disptach = useDispatch()

    const userAdminHandler = () => {
        disptach(updateAdminStatusAction(false))
        
    }
  return (
    <div className='' style={{marginTop: '100px'}}>
      Teena
    </div>
  )
}

export default ProductDetails
