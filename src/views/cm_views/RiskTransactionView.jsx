import React from 'react'
import CommonPage from 'src/commons/components/CommonPage';
import PaginateTable from 'src/commons/components/PaginateTable';
import { CMPage } from './custom/cm_views';

const RiskTransactionView = ({ user }) => {
    return (
        <CommonPage title="Risk Transactions" user={user}>
            <h5 className='m-4'>Coming soon . . .</h5>
        </CommonPage>
    )
}

export default RiskTransactionView;
