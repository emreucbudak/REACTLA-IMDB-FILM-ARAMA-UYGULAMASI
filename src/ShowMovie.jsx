import React from 'react'

function ShowMovie({ data }) {
    console.log(data)

    return (
        <div>
            <div className='showEcz'>
                <div className='pharmacyInformation'>
                    <img src={data.Poster} alt="" className='logoecz' />
                    <h3>{data.Title}</h3>
                </div>
                <div>
                    <h3>{data.Year}</h3>
                    <h5>{data.imdbID}</h5>
                </div>
            </div>
        </div>
    )
}

export default ShowMovie