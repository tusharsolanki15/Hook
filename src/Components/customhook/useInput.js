import {useState} from 'react'

const useInput = (initalValue) => {
    const [value, setValue] = useState(initalValue)
  
    const reset = () =>{
        setValue(initalValue)
    }

    const bind ={   
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput