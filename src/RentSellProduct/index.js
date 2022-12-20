import React, { useEffect, useState } from 'react'
import SearchForm from '../Search'
import $ from "jquery"

function RentSellProduct() {
  const [click, setClick] = useState();
  

  useEffect(() => {

    const loadDataOnlyOnce = () => {
      $("#searchButton").click();
      setClick(true)
    }
    loadDataOnlyOnce();
  }, [click])

  return (
    <div className='rent-product'>
        <SearchForm></SearchForm>
    </div>
  )
}

export default RentSellProduct
