import React from "react";
import { useStore } from "../store";

const Save = () => {
    const { data, downloadJson, downloadJsonL } = useStore();
    if (data === undefined || data.length === 0) return null;
    return (
        <div className="flex flex-row gap-2">
            <button
                className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-md py-3 px-5"
                onClick={() => window.location.reload()}
            >
                Clear Data
            </button>
            <button
                className="bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-md py-3 px-5"
                onClick={() => downloadJson(data)}
            >
                Download JSON
            </button>
            <button
                className="bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-md py-3 px-5"
                onClick={() => downloadJsonL(data)}
            >
                Download JSONL
            </button>
        </div>
    );
};

export default Save;
