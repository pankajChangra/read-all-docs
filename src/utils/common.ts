import { GoogleDocsViewerURL } from "../constant/constant";

/**
 * Google Docs viewer for Iframe
 * @param encodedUrl
 */
 export const fileUrl = (encodedUrl: any) => `${GoogleDocsViewerURL}?url=${encodedUrl}&embedded=true`;
