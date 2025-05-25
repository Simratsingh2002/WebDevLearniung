//counter se related jo bhi code or functions i will put in this slice.
//slice means kisi particular cheez ko store krna chahte hain and usse related fucntions 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {   //initial state of the counter
  value: 0,
}

export const counterSlice = createSlice({
    //state ko change krne ke lye fucntions below
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiply: (state)=>{
        state.value *=2
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions

export default counterSlice.reducer

// below example to make how objects and properties work 


// function createPerson(config) {
//   // config is an object you pass in, e.g. { name: 'Alice', age: 30 }
//   const { name, age } = config;

//   return {
//     // 1) we include the raw data you gave us…
//     name,
//     age,

//     // 2) …and we also attach some related methods:
//     sayHello() {
//       console.log(`Hello, I’m ${this.name}!`);
//     },
//     haveBirthday() {
//       this.age += 1;
//       console.log(`Happy birthday! You’re now ${this.age}.`);
//     }
//   };
// }

// // Usage:
// const alice = createPerson({ name: 'Alice', age: 30 });
// // alice is now an object with properties and methods:
// alice.sayHello();     // “Hello, I’m Alice!”
// alice.haveBirthday(); // updates alice.age to 31, logs that out
