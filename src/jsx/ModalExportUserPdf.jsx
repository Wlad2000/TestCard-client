import React, { useState } from 'react'
import { socket } from './App';
import { useItemState } from './context';
import Modal from './Modal'
import ModalExportUserPdfPreview from './ModalExportUserPdfPreview';
import { Button, Rectangle, Text } from './QuickBase'

const ModalExportUserPdf = (props) => {
    const [showPopupExportUsers, setShowPopupExportUsers] = useState(false);
    const { currentUser } = useItemState();

    const handleExportUsers = () => {
        setShowPopupExportUsers(true)
      };

    const handleGetUserPdf = () => {
        
        socket.emit('getUserDataPDF', currentUser.id);
        socket.on('pdfGenerated', (pdfPath) => {
        const blob = new Blob([pdfPath], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `user_${currentUser.id}.pdf`);
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
      });

      props.close()
    };

  return (
    props.opened &&
    <Modal title="Export User Info" close={props.close}>
        <Rectangle
            display = "flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
            paddingTop ="10%"
        >
            <Text
             paddingBottom ="5%"
                text={`Export to PDF info about user: ${currentUser.name}`}
            />
            <Rectangle>
                <Button 
                    textAlign = "center"
                    width = "100%"
                    borderRadius = "5px"
                    padding = "0.5rem 1rem"
                    borderColor = "#70297e"
                    backgroundColor = "#80156a"
                    color = "white"
                    textDecoration = "none"
                    margin = "0.5rem 0.5rem"
                    cursor = "pointer"
                    onClick={handleExportUsers} 
                    text = "Preview info PDF"
                />
                <Button 
                    textAlign = "center"
                    width = "100%"
                    borderRadius = "5px"
                    padding = "0.5rem 1rem"
                    borderColor = "#70297e"
                    backgroundColor = "#80156a"
                    color = "white"
                    textDecoration = "none"
                    margin = "0.5rem 0.5rem"
                    cursor = "pointer"
                    onClick={handleGetUserPdf} 
                    text = "Dowland info PDF"
                />
            </Rectangle>



        </Rectangle>
        <ModalExportUserPdfPreview opened={showPopupExportUsers} close={() => setShowPopupExportUsers(false)}/>
    </Modal>
  )
}

export default ModalExportUserPdf