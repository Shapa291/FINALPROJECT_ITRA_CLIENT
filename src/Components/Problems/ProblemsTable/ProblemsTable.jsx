import React, { useState, useContext } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import classes from './ProblemsTable.module.css'
import filterFactory from 'react-bootstrap-table2-filter';
import { defaultSorted, problemsColumns } from '../../../Configs/TablesConfigs';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ProblemsContext } from '../../../helpers/ProblemsContext';
import { useTranslation } from 'react-i18next';

const ProblemsTable = () => {

    const { t } = useTranslation()

    const [problem, setProblem] = useState(null)
    const [buttonState, setButtonState] = useState(true)

    const { problemState } = useContext(ProblemsContext)

    let history = useHistory()

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: (row, isSelect) => {
            if (isSelect) setProblem(row.id)
            if (!isSelect) setProblem(null)
            setButtonState(false)
            document.getElementById('button').disabled = buttonState
        }
    }

    return (
        <div className={classes.table}>
            <Button id='button' onClick={() => { history.push(`/problems/${problem}`) }} disabled={buttonState} className="mb-3" variant="outline-secondary" >{t("problemstable.solvebut")}</Button>
            <BootstrapTable
                keyField="id"
                data={problemState}
                selectRow={selectRow}
                columns={problemsColumns}
                defaultSorted={defaultSorted}
                pagination={paginationFactory()}
                filter={filterFactory()}
                filterPosition="bottom"
            />
        </div>
    )
}

export default ProblemsTable