import React from 'react'
import '../App.css';

function Alert(props) {

    return (
        <div className='alertHeight'>
            {props.alert && <div>
                <div className="alert">
                    <strong>{props.alert.msg}</strong>
                </div>
            </div>}
        </div>
    )
}

export default Alert