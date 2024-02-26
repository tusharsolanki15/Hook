import React, {useState } from 'react'
import useDocumetTitle from './useDocumetTitle'

const DocTitleone = () => {
    const [count, setCount] = useState(0)

    useDocumetTitle(count)

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count - {count}</button>
    </div>
  )
}

export default DocTitleone