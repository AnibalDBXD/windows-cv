import React, { lazy, Suspense } from "react";
import { useMobile } from "../../hooks/useMobile";

interface IContentProps {
    src: string;
    title: string;
}

const htmlStyles = `
    width: 100%;
    height: 100%;
`;

const bodyStyles = `
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

const textAreaStyles = `
    width: calc(100% - 6px);
    margin-left: 3px;
    height: calc(100% - 4px);
    border: 0;
    resize: none;
    outline: none;
    padding: 0;
`;

const getSrcDoc = (src: string): string => `
<html style="${htmlStyles}">
    <body style="${bodyStyles}">
        <textarea style="${textAreaStyles}">${src}</textarea>
    </body>
</html>
`;

const LazyPDFViewer = lazy(() => import('./PDFViewer'));

const Content: React.FC<IContentProps> = ({ src, title }) => {
  const isUrl = src.startsWith('http');
  const isMobile = useMobile();
  const isPDF = src.endsWith('.pdf');

  if (isMobile && isPDF) return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyPDFViewer src={src} />
    </Suspense>
  );
  if (isUrl) return <iframe src={src} title={title} />;
  return (
    <iframe
      srcDoc={getSrcDoc(src)}
      title={title}
    />
  );
};

export default Content;