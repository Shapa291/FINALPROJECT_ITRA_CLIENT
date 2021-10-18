import { textFilter } from 'react-bootstrap-table2-filter';

const contentSyle = { whiteSpace: 'nowrap',textOverflow: 'ellipsis', overflow: 'hidden'}

export const problemsColumns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'username', text: '👨‍🎓', sort: true,  style:  contentSyle},
    { dataField: 'name', text: '🔖', sort: true, filter: textFilter({ placeholder: "Name..."}), style:  contentSyle },
    { dataField: 'theme', text: '📐', sort: true, filter: textFilter({ placeholder: "Theme..."}), style:  contentSyle },
    { dataField: 'createdAt', text: '📆', sort: true, style:  contentSyle },
    { dataField: 'rate', text: '⭐️', sort: true },
];

export const profileUserTableColumns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'theme', text: '📐', sort: true, filter: textFilter({ placeholder: "Theme..."}), style:  contentSyle},
    { dataField: 'name', text: '🔖', sort: true, filter: textFilter({ placeholder: "Name..."}), style:  contentSyle },
    { dataField: 'createdAt', text: '📆', sort: true, style:  contentSyle },
    { dataField: 'rate', text: '⭐️', sort: true },
    { dataField: 'answer', text: '🧠', sort: true, style:  contentSyle },
    { dataField: 'answer2', text: '🧠', sort: true, style:  contentSyle },
    { dataField: 'answer3', text: '🧠', sort: true, style:  contentSyle },
];

export const profileUserSolvedProblemsTableColumns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'theme', text: '📐', sort: true, filter: textFilter({ placeholder: "Theme..."}), style:  contentSyle},
    { dataField: 'name', text: '🔖', sort: true, filter: textFilter({ placeholder: "Name..."}), style:  contentSyle },
    { dataField: 'rate', text: '⭐️', sort: true },
];

export const adminUsersTable = [
    { dataField: 'id', text: 'id', sort: true },
    { dataField: 'username', text: '👨‍🎓', sort: true, filter: textFilter({ placeholder: "Username..."}), style:  contentSyle},
    { dataField: 'createdAt', text: '📆', sort: true, style:  contentSyle },
    { dataField: 'role', text: '👨🏻‍🔧', sort: true },
];

export const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];
