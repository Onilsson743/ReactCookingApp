import React from 'react'
import Navbar from '../fullcomponents/Navbar'
import AddRecipeForm from '../fullcomponents/AddRecipeForm'

const AddRecipe = () => {
  return (
    <div>
        <Navbar />
        <img id='addrecipe' src='https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80'/>
        <AddRecipeForm />
    </div>
  )
}

export default AddRecipe