/* eslint-disable import/extensions */
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = ({ src }: { src: string }): JSX.Element => {
  return (
    <div
      onClick={(e): void => e.stopPropagation()}
      onDrag={(e): void => e.stopPropagation()}
      style={{ overflow: "scroll" }}
    >
      <Document file={src}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;