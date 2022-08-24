import React from 'react'
import { Icon, IconProps, Modal, Table } from 'semantic-ui-react'
import { initFalsy, reportFilesNames } from '../constant/constant';
import { fileUrl } from '../utils/common';
import DocumentViewer from './DocumentViewer';


const DocsViewer = () => {

    const [isModal, setModal] = React.useState(initFalsy);
    const [url, setUrl] = React.useState('');

    const loadDocs = (type: string) => {
        console.log(type, reportFilesNames.pdf)

        switch (type) {
            case reportFilesNames.doc:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
            case reportFilesNames.docx:
                setModal(!initFalsy);
                setUrl("https://docs.google.com/document/d/1z-aDaO9EpEUEgsWu3pHnThw1c71kURys/edit?usp=drive_web&ouid=102594233414614109729&rtpof=true")
                break;
            case reportFilesNames.otd:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
            case reportFilesNames.pdf:
                setModal(!initFalsy);
                setUrl("http://www.africau.edu/images/default/sample.pdf")
                break;
            case reportFilesNames.rtf:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
            case reportFilesNames.txt:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
            case reportFilesNames.xls:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
            case reportFilesNames.xlsx:
                setModal(!initFalsy);
                setUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt")
                break;
        }
    }

    const IconProps: IconProps = {
        name: 'eye',
        title: 'View Docs',
        className: "hand-pointer"
    }

    return (
        <React.Fragment>
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={10}>File Type</Table.HeaderCell>
                    <Table.HeaderCell width='six'>View</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>Sample-doc</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('doc')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-docs</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('docx')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-otd</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('otd')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-pdf</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('pdf')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-rtf</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('rtf')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-txt</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('txt')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-xls</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('xls')} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sample-xlsx</Table.Cell>
                    <Table.Cell><Icon {...IconProps} onClick={() => loadDocs('xlsx')} /></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        {
            isModal && 
            <Modal
                onClose={() => setModal(initFalsy)}
                open={isModal}
            >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <DocumentViewer url={fileUrl(encodeURIComponent(url))} />
                </Modal.Content>
            </Modal>
        }
        </React.Fragment>
    )
}

export default DocsViewer;
