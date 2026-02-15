import React from "react";
import PdfViewer from "./pdfViewer";
import pdf from '../../assets/resume.pdf';

const Resume =()=>{

    return(
        <div>
            <PdfViewer pdf={pdf}/>
        </div>
    )
}
export default Resume;