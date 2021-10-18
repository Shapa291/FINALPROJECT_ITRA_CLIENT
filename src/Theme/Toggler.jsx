import React from 'react'
import { func, string } from 'prop-types'
import { Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";



const Toggler = ({ theme, toggleTheme }) => {
    const { t } = useTranslation();
    return (
        <Button variant="outline-secondary" onClick={toggleTheme}>{t("change_theme")}</Button>
    )
}

Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggler
