import React from 'react';
import { useSelector } from 'react-redux';

function Title() {
    const stateTitle = useSelector((state) =>
        state.titleReducer.title
    )
    return (
        <div>
            <h1>{stateTitle}</h1>
        </div>
    )
}

export default Title;