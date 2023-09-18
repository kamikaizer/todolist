import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCheck  } from '@fortawesome/free-solid-svg-icons'

export const Todo = () => {
    return (
        <div className='Todo'>
            <p>Test 1</p>
            <div>
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
        </div>
    )
}


 
