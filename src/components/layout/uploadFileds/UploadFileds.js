import { Caption, DropZone, Stack, Thumbnail } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { NoteMinor } from "@shopify/polaris-icons";

const UploadFileds = () => {
    const [files, setFiles] = useState([]);

    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setFiles((files) => [...files, ...acceptedFiles]),
        []
    );

    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

    const fileUpload = !files.length && (
        <DropZone.FileUpload actionTitle="Choose vai file di nao ban e!!" />
    );

    const uploadedFiles = files.length > 0 && (
        <div style={{ padding: "0" }}>
            <Stack vertical>
                {files.map((file, index) => (
                    <Stack alignment="center" key={index}>
                        <Thumbnail
                            size="extraSmall"
                            alt={file.name}
                            source={
                                validImageTypes.includes(file.type)
                                    ? window.URL.createObjectURL(file)
                                    : NoteMinor
                            }
                        />
                        <div>
                            {file.name} <Caption>{file.size} bytes</Caption>
                        </div>
                    </Stack>
                ))}
            </Stack>
        </div>
    );
    return (
        <DropZone
            accept="image/*"
            type="images"
            label="Choose Files"
            onDrop={handleDropZoneDrop}
        >
            {uploadedFiles}
            {fileUpload}
        </DropZone>
    );
};

export default UploadFileds;
