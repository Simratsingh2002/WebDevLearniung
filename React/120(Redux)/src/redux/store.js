//this is how we create a redux store.
//store is something that holds the state of the application.


import { configureStore } from '@reduxjs/toolkit'
import x from './counter/counterslice'
//reducer helps us to change the state of the application. 
export const store = configureStore({
  reducer: {
    counter: x, 
  },
})
