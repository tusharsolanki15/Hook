import React from 'react'

const Title = () => {
    console.log("rendering Title")
  return (
    <h1>Use CallbackHook</h1>
  )
}

export default React.memo(Title)