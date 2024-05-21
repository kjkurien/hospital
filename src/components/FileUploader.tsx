import { Button, IconButton } from "@mui/material"
import { useState, useRef } from "react"
import {
    fetchAuthSession
  } from "aws-amplify/auth";
import AttachmentIcon from "@mui/icons-material/Attachment"
import DeleteIcon from "@mui/icons-material/Delete"
import "./FileUploader.css"
import axios from "axios"
import { ArrowUpward } from "@mui/icons-material"

const FileUploader = (props : any) => {

    const { onSelectFile, onDeleteFile, disabled } = props;
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File|null>();

    const handleClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }        
    }
    const handleFileChange = (event :any) => {
        setFile(event.target.files[0]);
        onSelectFile(event)
    }
    const handleDeleteFile = () => {
        setFile(null);
        onDeleteFile();
    }
    const handleSubmit = async(event: any) => {
        event.preventDefault()
        const session = await fetchAuthSession();
        
        const idToken = session.tokens?.idToken;
        const url = 'https://8r8zgngv90.execute-api.ap-south-1.amazonaws.com/test/test-hospital/occupancylist.xlsx';
        const formData = new FormData();
        if (file) {
            formData.append('file', file);
            const config = {
                headers: {
                    'Content-Type': 'application/vnd.ms-excel',
                    'Accept': "*/*",
                    'Authorization': 'Bearer ' + idToken
                },
            };
            axios.put(url, formData, config).then((response) => {
            console.log(response.data);
            });
        }
      }
    return (
        <div className="file-uploader">
            <div className={'file-div ${disabled && "disabled"}'}>
                <Button className="attachment-icon" onClick={handleClick} disabled={disabled}>
                    <AttachmentIcon />
                    <input type="file" accept="*"  ref={hiddenFileInput} onChange={handleFileChange} hidden disabled={disabled} data-testid="file-upload-input" />
                    <div className="file-name">
                        {file ? <div>{file?.name}</div> : <div>Choose file</div>}
                    </div>
                </Button>
            </div>
            <div className={'${disabled && "disabled"}'}>
                <IconButton className="delete-icon" onClick={handleDeleteFile} disabled={disabled}>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className={'${disabled && "disabled"}'}>
                <IconButton className="delete-icon" onClick={handleSubmit} disabled={disabled}>
                    <ArrowUpward />
                </IconButton>
            </div>
        </div>
    )
}

export default FileUploader