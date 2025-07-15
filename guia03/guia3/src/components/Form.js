
"use client"
import React , { useState } from 'react'
import Todo from './Todo'

const Form = () => {
    
   const [todos,setTodos]=useState([

     {todo:'todo1'},
     {todo:'todo2'},
     {todo:'todo3'}
   ])
 return (
    <> 
    {
     todos.map((value,index) =>(<Todo todo ={value.todo}/>))
     
     }
  
    </>
 

 )
}
export default Form
