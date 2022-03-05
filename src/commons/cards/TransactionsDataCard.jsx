import { CCol, CRow } from '@coreui/react';
import React from 'react'

const TransactionDataCard = ({ txt1, txt1Value, txt2, txt2Value, txt3, txt3Value }) => {
    return (
        <div className='transparent-card mt-3 p-2 px-4'>
            <CRow className="d-flex align-items-center">
                <CCol xs={4} className="d-flex flex-wrap align-items-center justify-content-between">
                    <small className='fw-bold'>
                        {txt1}
                    </small>
                    <span>:</span>
                </CCol>
                <CCol xs={8} className="d-flex text-lowercase">
                    {txt1Value}
                </CCol>
                <CCol xs={4} className="d-flex flex-wrap align-items-center justify-content-between">
                    <small className='fw-bold'>
                        {txt2}
                    </small>
                    <span>:</span>
                </CCol>
                <CCol xs={8} className="d-flex">
                    {txt2Value}
                </CCol>
                <CCol xs={4} className="d-flex flex-wrap align-items-center justify-content-between">
                    <small className='fw-bold'>
                        {txt3}
                    </small>
                    <span>:</span>
                </CCol>
                <CCol xs={8} className="d-flex">
                    <span className='text-lowercase'>
                        {txt3Value}
                    </span>
                </CCol>
            </CRow>
        </div>
    )
}

export default TransactionDataCard;