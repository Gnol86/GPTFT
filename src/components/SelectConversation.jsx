import React from "react";
import { useStore } from "../store";

const SelectConversation = () => {
    const { data, index, setIndex } = useStore();
    if (data === undefined || data.length === 0) return null;
    return (
        <div className="bg-slate-200 rounded-md p-5">
            <div>
                <span className="font-bold">Total : </span>
                {data.length} conversation{data.length > 1 && "s"}
            </div>
            <span className="font-bold">Conversation selected : </span>
            <select
                className=" bg-transparent rounded-md ring-0 focus:ring-0 focus:border-0"
                value={index}
                onChange={(e) => setIndex(parseInt(e.target.value))}
            >
                <option value={-1}>None</option>
                {data.map((item, i) => {
                    return (
                        <option key={i} value={i}>
                            {i + 1}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectConversation;
