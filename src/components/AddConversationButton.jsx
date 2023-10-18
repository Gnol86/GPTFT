import React from "react";
import { useStore } from "../store";

const AddConversationButton = () => {
    const { addConversation } = useStore();
    return (
        <button
            className="bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-md py-3 px-5"
            onClick={addConversation}
        >
            Add Conversation
        </button>
    );
};

export default AddConversationButton;
