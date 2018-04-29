import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../style.css';

const columns =
    [
        {
            Header: 'BANK',
            accessor: 'BANK'
        },
        {
            Header: 'IFSC',
            accessor: 'IFSC'
        },
        {
            Header: 'BRANCH',
            accessor: 'BRANCH'
        },
        {
            Header: 'ADDRESS',
            accessor: 'ADDRESS'
        },
        {
            Header: 'CONTACT',
            accessor: 'CONTACT'
        }
    ]
const BankData = ({ data }) => (
    <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={14}>
            <ReactTable
                data={data}
                columns={columns}
                minRows={3}
                showPagination={true}
            />
        </Grid.Column>
    </Grid>
)

export default BankData;