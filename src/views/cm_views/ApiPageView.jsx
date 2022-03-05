import React, { useState } from 'react'
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const ApiPageView = ({user, data}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className='p-4 min-vh-100 bg-light' style={{backgroundColor: "#bbb"}}>
            <div>
                {/* <Document
                    file="https://api.qikpay.co.in/public/API.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {[...Array(numPages).keys()].map((p) => (
                    <Page pageNumber={p + 1} />
                    ))}
                </Document> */}
                </div>
        </div>
    )
}

export default ApiPageView
