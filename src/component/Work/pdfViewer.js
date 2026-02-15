import React, { useRef,  useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import {GrNext, GrPrevious} from 'react-icons/gr'

const PdfViewer =({pdf})=>{
    const [numPages, setNumPages] = useState(1);
    // const  [pageNumber, setPageNumber] = useState(1);
    const divRef = useRef()

    const onDocumentLoadSucess =({numPages})=>{
        setNumPages(numPages);
    }

    // const handleNextPage =()=>{
    //     if (pageNumber<numPages){
    //         setPageNumber(prevState=>prevState+1);
    //     }
    // }
    // console.log(handleNextPage,"handleNextPage")
    // const handlePreviousPage =()=>{
    //     if(pageNumber>1){
    //         setPageNumber(prevState=>prevState-1);
    //     }
    // }

    return(
        <div ref={divRef}>
            {/* <div>{pageNumber}/{numPages}</div> */}
            {/* <div style={{margin: "10px 0px"}}>
                {pageNumber>1 && <button onClick={handlePreviousPage}><GrPrevious/></button>}
                {pageNumber<numPages && <button onClick={handleNextPage}><GrNext/></button>}
            </div> */}
            <div>
                <Document file={pdf} onLoadSucess={onDocumentLoadSucess}>
                    <Page pageNumber={numPages} width={divRef.current?.clientWidth*0.97}/>
                </Document>
            </div>
        </div>
    );
}

export default PdfViewer;