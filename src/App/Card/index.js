import React from 'react'
const card = ({id, name, email})=> {
    return(
        <div className='big-light-green dib br3 pa3 ma2 grow'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
                <div className='tc'>
                    <h2>{name}</h2>
                        <p>{email}</p>
            </div>
        </div>
    )
}
export default card