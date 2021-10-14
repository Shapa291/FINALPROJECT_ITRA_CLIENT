import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

export const problemsColumns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'username', text: 'Пользователь', sort: true, },
    { dataField: 'name', text: 'Тема задачи', sort: true, filter: textFilter() },
    { dataField: 'theme', text: 'Название задачи', sort: true, filter: textFilter() },
    { dataField: 'createdAt', text: 'Дата создания', sort: true },
    { dataField: 'rate', text: 'Рейтинг', sort: true },
];

export const profileUserTableColumns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'theme', text: 'Тема задачи', sort: true, filter: textFilter() },
    { dataField: 'name', text: 'Название задачи', sort: true, filter: textFilter() },
    { dataField: 'createdAt', text: 'Дата создания', sort: true },
    { dataField: 'rate', text: 'Рейтинг', sort: true },
    { dataField: 'answer', text: 'Ответ', sort: true },
];

export const userColumns = [
    { dataField: 'uid', text: 'UId', sort: true },
    { dataField: 'name', text: 'Имя', sort: true, filter: textFilter() },
    { dataField: 'problems', text: 'Количество задач', sort: true },
    { dataField: 'solves', text: 'Количество решений', sort: true },
    { dataField: 'url', text: 'Url', sort: true },
];

export const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];
