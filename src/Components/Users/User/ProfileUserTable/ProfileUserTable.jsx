import React, { useState, useContext } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import classes from './ProfileUserTable.module.css'
import Toolbar from './Toolbar';
import { defaultSorted, profileUserTableColumns } from '../../../../Configs/TablesConfigs';
import filterFactory from 'react-bootstrap-table2-filter';
import { AuthContext } from '../../../../helpers/AuthContext';
import { ProblemsContext } from '../../../../helpers/ProblemsContext';
import { useTranslation } from 'react-i18next';


const ProfileUserTable = () => {

    const { t } = useTranslation()

    const [userProblem, setUserProblem] = useState([])
    const [toolbarVisibility, setToolbarVisibility] = useState(false)

    const { authState } = useContext(AuthContext)
    const { problemState } = useContext(ProblemsContext)

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: (row, isSelect) => {
            if (isSelect) {
                setUserProblem(row)
            }
            if (!isSelect) setUserProblem(null)
            setToolbarVisibility(true)
        }
    }

    let usersData = []
    const data = problemState

    for (let i = 0; i < data.length; i++) {
        if (data[i].username === authState.username) {
            usersData.push(data[i])
        }
    }

    return (
        <div className={classes.table}>
            <h3>{t("userprofile.header")}</h3>
            <div >
                {(toolbarVisibility) ? <Toolbar setToolbarVisibility={(val) => setToolbarVisibility(val)} problemId={userProblem.id} /> : false}
                <BootstrapTable
                    keyField='id'
                    data={usersData}
                    selectRow={selectRow}
                    columns={profileUserTableColumns}
                    defaultSorted={defaultSorted}
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                    filterPosition="bottom"
                />
            </div>
        </div>
    )
}

export default ProfileUserTable