import React, { useState } from 'react'
import { data } from './data'

const Users = () => {
    const [name, setName ] = useState("")
    const handleChange = (e) => {
      setName(e.target.value)
      const filtered = data.filter(users => users.firstName.includes(e.target.value))
    //   setName(filtered)
    }

   
  return (
    <div className=' bg-[#FB5B7A]   max-w-[800px] mx-auto '>

        <div className='max-w-[800px] mx-auto my-36 py-6 px-12'>
        <input type='text' placeholder='Search by name...' className='py-2 px-64 flex  mx-auto' value={name} onChange={handleChange}/>
            <div className='grid grid-cols-2'>
        {data.map((user, index) => {
           const {id, title, firstName, lastName, picture} = user
           return <div key={index} className=' p-3 '>
            <div className=' bg-white py-2 px-3 rounded'>
                <div className='flex space-x-3'>
                      <img src={picture} alt='users-image' />
                      <div className='flex flex-col'>
                           <h2>{id}</h2>
                           <span>{title} {firstName} {lastName}</span>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
    </div>
    </div>
  )
}

export default Users
