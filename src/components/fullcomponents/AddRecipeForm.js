import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [ingridients, setIngridients] = useState([0]);
    const [instructions, setInstructions] = useState([0]);
    
    const setimage = (e) => {
        const fileInput = document.getElementById('imageupload');
        if (fileInput.files && fileInput.files[0]) {
            var fr = new FileReader();
            fr.onload = function () {
            
                document.getElementById("previewimage").src = fr.result;
                document.getElementById("previewimage").classList.remove("d-none")
                document.getElementById("imageupload").classList.add("d-none")
            }
            fr.readAsDataURL(fileInput.files[0]);
        }
    }

    
    const AddIngridient = () => {
        setIngridients(ingridients => [...ingridients, ingridients.length])
    }
    const RemoveIngridient = e => {
        // console.log(e)
        // var index = ingridients.findIndex(x => x == e)
        // ingridients.splice(index, e)
        // var test = ingridients
        // console.log(test)
        setIngridients(prevState => {
            return prevState.filter((_, x) => x !== e)
        })
    }

    const AddInstruction = () => {
        setInstructions(instructions => [...instructions, instructions.length])
    }


  return (
    <div className='container mt-2'>
        
        <form className='addrecipeform'>
            
            <div className='option pb-3'>
                <input name='images' id='imageupload' type='file' onChange={setimage}></input>
                <img id='previewimage' className='d-none' src=""/>
            </div>

            <div className='option'>  
                <h2>Ingredienser</h2>
                {
                    ingridients.map(ingridients =>
                        <div className='addeditems'>
                            <input className='messurment' name='messurment' type='text' placeholder='Mått...' />
                            <input className='ingridient' name='ingridient' type='text' placeholder='Ingrediens...' />
                            <butto onClick={() => RemoveIngridient(ingridients)} className='remove-button' type='button'>x</butto>
                        </div>
                    )
                }
                <button type='button' onClick={AddIngridient}>+</button>
            </div>

            <div className='option'>  
                <h2>Instruktioner</h2>
                <ol className='descriptions'>
                    {
                        instructions.map(x => 
                            <li>
                                <input className='instruction' name='instruction' type='text' placeholder='Instruktion...' />
                                <button className='remove-button' type='button'>x</button>
                            </li>
                        )
                    }
                </ol>
                <button type='button' onClick={AddInstruction}>+</button>
            </div>
        </form>
    </div>
  )
}

export default AddRecipeForm