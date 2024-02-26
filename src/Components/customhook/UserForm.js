import React from 'react'
import useInput from './useInput'

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstname] =  useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    
    const handelSubmit = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstname()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <div>
                <label>First Name</label>
                <input {...bindFirstName} type="text" />
            </div>
            <div>
                <label>Last Name</label>
                <input {...bindLastName} type="text"/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm