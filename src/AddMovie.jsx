import React, { useState } from 'react'

function AddMovie({addM}) {
    const [inputVal,setInputVal] = useState("")
    const onInputChange = (e) => {
        setInputVal(e.target.value)
    }
    const submitClick = (e) => {
        e.preventDefault();
        addM(inputVal);
        setInputVal("");
    }
    return (
    <div>
        <div className='addMovie'>
            <form action="" className='movieForm'>
                <p className='p'>Film Gir</p>
                <input type="text" name="" id="" placeholder='Film İsmi' className='input' value={inputVal} onChange={onInputChange}/>
                <button className='btn' type='submit' onClick={submitClick}>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default AddMovie