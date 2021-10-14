import React, {useContext} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import classes from './UsersTable.module.css'
import { defaultSorted, userColumns } from "../../../Configs/TablesConfigs";
import { ProblemsContext } from '../../../helpers/ProblemsContext';

const UsersTable = () => {
  const {problemState} = useContext(ProblemsContext)

  return (
    <div className={classes.table}>
      <BootstrapTable
        keyField='uid'
        data={problemState}
        columns={userColumns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
        filter={filterFactory()}
        filterPosition="bottom"
      />
    </div>
  )
}

export default UsersTable