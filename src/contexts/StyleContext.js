import React from 'react'

export const DEFAULT_STYLE = {
    aside: {
        backgroundColor: 'black',
        color: 'green',
        fontSize: '1.5rem',
        paddingBlock: '2rem'
    },
    innerAside: {
        backgroundColor: 'red',
        fontFamily: 'Impact',
        paddingBlock: '1rem',
        color: 'white'
    }
}

const StyleContext = React.createContext(DEFAULT_STYLE)

export default StyleContext;