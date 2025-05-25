"use server";
import fs from 'fs/promises';

export const submitAction = async (e) => {
    // I want this function to be callable after the page loads, from the client, over a network request.This is what use server means here.
    // As default next js is server side , unless we dont mention client , but code below return is client side , and it can invoke the fucntion inside , so we using server side .
    // Function inside it marked "use server" → becomes a Server Action endpoint you can call from the client (e.g. via <form action={submitAction}>)”
    console.log(e.get('name'));
    let a =await fs.writeFile('data.txt', 'hi im simrat');
    console.log(a);
  }
  //good practice is so save all the actions of our server in a separate file.