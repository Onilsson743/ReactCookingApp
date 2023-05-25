import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [showImage, setShowImage] = useState();
    const fileInput = document.getElementById('imageupload');
    const setimage = (e) => {

         if (fileInput.files && fileInput.files[0]) {
             var fr = new FileReader();
             fr.onload = function () {
                
                 document.getElementById("blah").src = fr.result;
             }
             fr.readAsDataURL(fileInput.files[0]);
            //  var reader = new FileReader();

            // reader.onload = function (e) {
            //      document.getElementById('#blah')
            //          .attr('src', e.target.result)
            //          .width(150)
            //          .height(200);
            //  };
            
            //  reader.readAsDataURL(fileInput.files[0]);
         }
    }
    function readURL(input) {
        console.log(input)
        // if (input.files && input.files[0]) {
        //     var reader = new FileReader();

            // reader.onload = function (e) {
            //     ('#blah').attr('src', e.target.result).width(150).height(200);
            // };

            // reader.readAsDataURL(input.files[0]);
        //}
    }

  return (
    <div className='container mt-2'>
        <img id='blah' src={showImage}/>
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