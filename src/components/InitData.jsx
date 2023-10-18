import React from "react";
import { useStore } from "../store";

import UploadButton from "./UploadButton";
import DataExemple from "./DataExemple";

const InitData = () => {
    const { clearData } = useStore();
    return (
        <div className="w-full">
            <div className="m-auto w-fit">
                <h2 className="text-2xl font-bold mb-5 text-center w-full">
                    Create new data or Upload your file
                </h2>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center w-full">
                    <button
                        className="bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-md p-5 w-80"
                        onClick={clearData}
                    >
                        Create new data set
                    </button>
                    <div className="flex flex-row lg:flex-col items-center">
                        <div className="grow inline-block w-32 lg:w-0.5 h-0.5 lg:h-24 bg-stone-300"></div>
                        <div className="flex-none p-3 text-stone-400">OR</div>
                        <div className="grow inline-block w-32 lg:w-0.5 h-0.5 lg:h-24 bg-stone-300"></div>
                    </div>
                    <UploadButton />
                </div>
            </div>
            <DataExemple />
        </div>
    );
};

export default InitData;
