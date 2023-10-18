import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useStore } from "../store";
import clsx from "clsx";

import { FaFileAlt } from "react-icons/fa";

const UploadButton = () => {
    const { uploadFile } = useStore();
    const onDrop = useCallback((acceptedFiles) => {
        uploadFile(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "application/json": [".json", ".jsonl"],
        },
    });
    return (
        <div className="w-80">
            <label
                {...getRootProps()}
                className={clsx(
                    "flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-stone-200 p-6 transition-all hover:border-stone-500",
                    isDragActive && "border-stone-500 bg-stone-100"
                )}
            >
                <div className="space-y-1 text-center">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <FaFileAlt />
                    </div>
                    <div className="text-gray-600">
                        <span className="font-bold">Click to upload</span> or
                        drag and drop
                    </div>
                    <p className="text-sm text-gray-500">JSON, JSONL</p>
                </div>
                <input
                    id="UploadButton"
                    type="file"
                    className="sr-only"
                    {...getInputProps()}
                    onChange={(e) => {
                        handleChange(e.target.files[0]);
                    }}
                />
            </label>
        </div>
    );
};

export default UploadButton;
