import React from 'react'
import CommonPage from 'src/commons/components/CommonPage';
import { CMPage } from '../custom/cm_views'

const SupportView = ({ user }) => {
    return (
        <CommonPage title="Support"
            user={user}>
            <h5 className='m-4'>Coming soon . . .</h5>
        </CommonPage>
    )
}

export default SupportView;