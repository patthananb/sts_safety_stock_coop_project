'use client'

import React, { useState } from 'react'

function UnpackPage() {
  const [formData, setFormData] = useState({
    date: '',
    employeeId: '',
    employeeName: '',
    palletNo: '',
    serial: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      date: '',
      employeeId: '',
      employeeName: '',
      palletNo: '',
      serial: ''
    });
  };

// function UnpackPage() {
  return (
    <div>
      <h1 className='text-5xl pb-5 font-bold'>
        Un-Packing
      </h1>

      <ul className='mb-5'>
        <button className='mx-1 bg-slate-600 hover:bg-slate-400 text-white font-normal py-1 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded'>Block</button>
        <button className='mx-1 bg-slate-600 hover:bg-slate-400 text-white font-normal py-1 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded'>Head</button>
        <button className='mx-1 bg-slate-600 hover:bg-slate-400 text-white font-normal py-1 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded'>Crankshaft</button>
        <button className='mx-1 opacity-50 bg-slate-600 hover:bg-slate-400 text-white font-normal py-1 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded'>Camshaft</button>
      </ul>

      <form action="/send-data-here" method="post">
        <ul>
          <li className='pb-2'>
            <label for="first">Date</label>
            <input className='bg-slate-200' type="text" id="first" name="first" />
          </li>
          <li className='pb-2'>
            <label for="first">Employee ID</label>
            <input className='bg-slate-200' type="text" id="first" name="first" />
          </li>
          <li className='pb-2'>
            <label for="first">Employee Name</label>
            <input className='bg-slate-200' type="text" id="first" name="first" />
          </li>
          <li className='pb-2'>
            <label for="first">Pallet No.</label>
            <input className='bg-slate-200' type="text" id="first" name="first" />
          </li>
          <li className='pb-2'>
          <label for="last">Serial</label>
          <input className='bg-slate-200' type="text" id="last" name="last" />
          </li>
        </ul>

        <button type="button" onClick={handleClear} className='mx-1 bg-rose-600 hover:bg-rose-400 text-white font-bold py-1 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded'>
          Clear
        </button>
        <button className='mx-1 bg-lime-500 hover:bg-lime-400 text-white font-bold py-1 px-4 border-b-4 border-lime-700 hover:border-lime-500 rounded' type="submit">
          Submit
        </button>

      </form>
    </div>
  )
}

export default UnpackPage
