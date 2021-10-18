import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import { GetUsers } from '../../API/API'
import { adminUsersTable, defaultSorted } from '../../Configs/TablesConfigs'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import { useTranslation } from 'react-i18next'

const Admin = () => {

    const {t} = useTranslation()

    const [usersList, setUserList] = useState([])
    const [userProblem, setUserProblem] = useState([])

    useEffect(() => {
        GetUsers().then((response) => setUserList(response.listOfUsers))
    }, [])

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: (row, isSelect) => {
            if (isSelect) {
                setUserProblem(row)
            }
            if (!isSelect) setUserProblem(null)
        }
    }
   
    return (
        <Container>
            <h1 className='mt-5'>{t("admin.header")}</h1>
            <div className='mb-5'>
            <BootstrapTable
                keyField="id"
                data={usersList}
                selectRow={selectRow}
                columns={adminUsersTable}
                defaultSorted={defaultSorted}
                pagination={paginationFactory()}
                filter={filterFactory()}
                filterPosition="bottom"
            />
            </div>
        </Container>
    )
}

export default Admin
