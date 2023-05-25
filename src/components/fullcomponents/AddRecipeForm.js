import React, { useState } from 'react'

const AddRecipeForm = () => {
    
    const setimage = (e) => {
        const fileInput = document.getElementById('imageupload');
        if (fileInput.files && fileInput.files[0]) {
            var fr = new FileReader();
            fr.onload = function () {
            
                document.getElementById("blah").src = fr.result;
                document.getElementById("blah").classList.remove("d-none")
            }
            fr.readAsDataURL(fileInput.files[0]);
        }
    }


  return (
    <div className='container mt-2'>
        <img id='blah' className='d-none' src=""/>
        <form className='addrecipeform'>
            
            <div className='option'>
                <input name='images' id='imageupload' type='file' onChange={setimage}></input>
            </div>

            <div className='option'>                
                <input name='name' type='text' placeholder='Namn' />
            </div>
        </form>
    </div>
  )
}

export default AddRecipeForm