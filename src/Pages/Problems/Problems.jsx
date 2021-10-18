import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProblemsTable from "../../Components/Problems/ProblemsTable/ProblemsTable";

const Problems = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <h1 className='mt-5'>{t("problemstable.header")}</h1>
            <ProblemsTable />
        </Container>
    )
}

export default Problems