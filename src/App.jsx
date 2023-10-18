import React from "react";
import { useStore } from "./store";

import Conversations from "./components/Conversations";

import InitData from "./components/InitData";
import SelectConversation from "./components/SelectConversation";
import Save from "./components/Save";
import AddConversationButton from "./components/AddConversationButton";

function App() {
    const { data, index } = useStore();

    return (
        <div className="p-5 sm:p-10 w-full">
            <h1 className="text-3xl font-bold mb-5">GPT Fine tuning</h1>

            {data === undefined ? (
                <InitData />
            ) : (
                <div className="flex flex-col gap-5">
                    <Save />
                    <AddConversationButton />
                    <SelectConversation />
                    {index > -1 && <Conversations index={index} />}
                    <Save />
                </div>
            )}
        </div>
    );
}

export default App;
