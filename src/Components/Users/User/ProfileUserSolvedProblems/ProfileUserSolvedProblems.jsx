import React, { useContext } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { useTranslation } from 'react-i18next'
import { defaultSorted, profileUserSolvedProblemsTableColumns } from '../../../../Configs/TablesConfigs'
import { ProblemsContext } from '../../../../helpers/ProblemsContext'
import { SolvedProblemsContext } from '../../../../helpers/SolvedProblemsContext'
import classes from './ProfileUserSolvedProblems.module.css'

const ProfileUserSolvedProblems = () => {

    const { t } = useTranslation()

    const { solvedProblemsState } = useContext(SolvedProblemsContext)
    const { problemState } = useContext(ProblemsContext)

    const solvedProblemsId = solvedProblemsState.map((el) => { return el.ProblemId })

    let solvedProblemsList = []
    for (let i = 0; i < solvedProblemsId.length; i++) {
        for (let j = 0; j < problemState.length; j++) {
            if (solvedProblemsId[i] === problemState[j].id) solvedProblemsList.push(problemState[j])
        }
    }

    return (
        <div className={classes.body}>
            <h3 className={classes.text}>{t("userprofile.solvedproblems")}</h3>
            <BootstrapTable
                keyField='id'
                data={solvedProblemsList}
                columns={profileUserSolvedProblemsTableColumns}
                defaultSorted={defaultSorted}
                pagination={paginationFactory()}
                filter={filterFactory()}
                filterPosition="bottom"
            />
        </div>
    )
}

export default ProfileUserSolvedProblems
