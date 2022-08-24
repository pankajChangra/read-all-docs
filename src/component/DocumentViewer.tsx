import React from "react";
const demo = require('./demo.docx');


interface DocProps {
    url: string;
    height?: number;
    width?: number;
}



export default function IframeGoogleDoc(props: DocProps) {
    const
      minWaitInSec = 3,
      [iframeTimeoutId, setIframeTimeoutId] = React.useState(undefined),
      iframeRef: any = React.useRef(null),
      iframeLoaded = () => {
        clearInterval(iframeTimeoutId);
      },
      updateIframeSrc = async () => {
        if (!iframeRef.current) {
          iframeRef.current.src = props.url;
        }
      },
      iFrameProps = {
        height: props.height || '800',
        onError: updateIframeSrc,
        onLoad: iframeLoaded,
        ref: iframeRef,
        src: props.url === 'docx' ? demo : props.url,
        width: props.width || '100%'
      },
      fse = () => {
        const time = 1000 * minWaitInSec;
        const intervalId = window.setInterval(updateIframeSrc, time);
        setIframeTimeoutId(intervalId as any);
      };
  
    React.useEffect(fse, []);

    return <iframe title="Document Viewer" {...iFrameProps} />
};
