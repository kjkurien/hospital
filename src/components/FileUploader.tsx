import { Button, IconButton } from "@mui/material"
import { useState, useRef } from "react"
import AttachmentIcon from "@mui/icons-material/Attachment"
import DeleteIcon from "@mui/icons-material/Delete"
import "./FileUploader.css"

const FileUploader = (props : any) => {

    const { onSelectFile, onDeleteFile, disabled } = props;
    const hiddenFileInput = useRef(null);
    const [file, setFile] = useState(null);

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
        hiddenFileInput.current.value = null;
        onDeleteFile();
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
        </div>
    )
}

export default FileUploader