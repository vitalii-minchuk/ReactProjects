import React from 'react'
import CSVReader from 'react-csv-reader'
import ShowSelectedStatus from './ShowSelectedStatus'
import ShowSelectedType from './ShowSelectedType'


const TableHeader = () => {

  return (
    <div>
      <ShowSelectedStatus />
      <ShowSelectedType />

    </div>
  )
}

export default TableHeader