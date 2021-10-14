import React from 'react'
import {func, string} from 'prop-types'
import { Button } from 'react-bootstrap'


const Toggler = ({theme, toggleTheme}) => {
    return (
        <Button variant="outline-secondary" onClick={toggleTheme}>Сменить тему</Button>
    )
}

Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggler
