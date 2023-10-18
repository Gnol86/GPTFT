import React from "react";
import { useStore } from "../store";
import { v4 as uuidv4 } from "uuid";

import Message from "./Message";
import AddConversationButton from "./AddConversationButton";

const Conversations = ({ index }) => {
    const { data, deleteConversation, addMessage } = useStore();
    return (
        <>
            <div className="p-5 rounded-md bg-slate-300">
                <div className="flex flex-col gap-2 mt-2">
                    {data[index].messages.map((message, messageIndex) => {
                        return (
                            <Message
                                key={uuidv4()}
                                message={message}
                                index={messageIndex}
                                convesationIndex={index}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-row gap-2 mt-2">
                    <button
                        className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-md py-3 px-5"
                        onClick={() => {
                            deleteConversation(index);
                        }}
                    >
                        Delete Conversation
                    </button>
                    <button
                        className="bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-md py-3 px-5"
                        onClick={() => {
                            addMessage(index);
                        }}
                    >
                        Add Message
                    </button>
                </div>
            </div>
            <AddConversationButton />
        </>
    );
};

export default Conversations;
