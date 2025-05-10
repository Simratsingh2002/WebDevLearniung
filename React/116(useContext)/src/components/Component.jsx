import React, { useContext } from 'react'  //use context is used to consume the context value
import { counterContext } from '../Context/context'


const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
    {value.count}
    </div>
  )
}

export default Component1