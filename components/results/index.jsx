import React from 'react'
import Filters from './filters'
import Table from './table';

const Results = () => {
  return (
    <div className="px-4 md:px-[62px] lg:px-[108px]">
      <Filters />
      <Table/>
    </div>
  );
}

export default Results