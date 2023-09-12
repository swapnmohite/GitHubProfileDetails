import React, { useState } from 'react'

const Getobject = () => {
    const [name, setname] = useState({ firstname: "", lastname: "", date: "" })
    return (
        <div>
            <input type="text" placeholder='Fname' value={name.firstname} onChange={e => setname({ ...name, firstname: e.target.value })} />
            <input type="text" placeholder='Lname' value={name.lastname} onChange={e => setname({ ...name, lastname: e.target.value })} />
            <input type="date" value={name.date} onChange={e => setname({ ...name, date: e.target.value })} />

            <table className='table-auto'>
                <thead className='bg-blue-500 text-white'>
                    <tr>
                        <th className='border border-gray-600 px-4 py-2'>First Name</th>
                        <th className='border border-gray-600 px-4 py-2'>Last Name</th>
                        <th className='border border-gray-600 px-4 py-2'>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-400 px-4 py-2'>{name.firstname}</td>
                        <td className='border border-gray-400 px-4 py-2'>{name.lastname}</td>
                        <td className='border border-gray-400  px-4 py-2'>{name.date}</td>
                    </tr>
                </tbody>
            </table>
            {/* <h2>Your Firstname is {name.firstname}</h2>

            <h2>Your lastname is {name.lastname}</h2>

            <h2>Date of Birth is {name.date}</h2> */}

            {/* <h2>{JSON.stringify(name)}</h2> */}

        </div>
    )
}

export default Getobject