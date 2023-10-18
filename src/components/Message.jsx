import React from "react";

import { useStore } from "../store";
import clsx from "clsx";

const Message = ({ index, convesationIndex }) => {
    const { data, focus, deleteMessage, editMessage } = useStore();

    const [content, setContent] = React.useState(
        data[convesationIndex].messages[index].content
    );
    const [role, setRole] = React.useState(
        data[convesationIndex].messages[index].role
    );

    const textAreaRef = React.useRef(null);

    React.useEffect(() => {
        if (!focus) return;

        if (focus.id === textAreaRef.current.getAttribute("id")) {
            textAreaRef.current.focus();
            textAreaRef.current.scrollTop = focus.scrollTop;
            textAreaRef.current.selectionStart = focus.selectionStart;
            textAreaRef.current.selectionEnd = focus.selectionEnd;
        }
    }, [focus]);

    React.useEffect(() => {
        if (
            content === data[convesationIndex].messages[index].content &&
            role === data[convesationIndex].messages[index].role
        )
            return;

        const timeoutId = setTimeout(() => {
            editMessage(
                convesationIndex,
                index,
                role,
                content,
                textAreaRef.current &&
                    textAreaRef.current === document.activeElement
                    ? {
                          id: textAreaRef.current.getAttribute("id"),
                          scrollTop: textAreaRef.current.scrollTop,
                          selectionStart: textAreaRef.current.selectionStart,
                          selectionEnd: textAreaRef.current.selectionEnd,
                      }
                    : null
            );
        }, 1000);
        // on annule le timeout si on change de message
        return () => clearTimeout(timeoutId);
    }, [content, role]);

    return (
        <div className="py-5 flex flex-col gap-3 border-b border-stone-400 last:border-b-0 first:pt-0">
            <div className="flex flex-row gap-2 items-center">
                <span className="text-lg">{index + 1}</span>
                {index > 0 &&
                data[convesationIndex].messages[index - 1].role === "system" &&
                data[convesationIndex].messages.length - 1 === index ? (
                    <select
                        className={clsx(
                            "p-2 rounded-md bg-white",
                            role !== data[convesationIndex].messages[index].role
                                ? "bg-yellow-200"
                                : ""
                        )}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="system">System</option>
                        <option value="user">User</option>
                    </select>
                ) : (
                    <span className="text-lg capitalize">
                        {data[convesationIndex].messages[index].role}
                    </span>
                )}
            </div>
            <span>
                <textarea
                    id={`textarea-${convesationIndex}-${index}`}
                    ref={textAreaRef}
                    className={clsx(
                        "w-full bg-white p-2 h-64 rounded-md",
                        content !==
                            data[convesationIndex].messages[index].content
                            ? "bg-yellow-200"
                            : ""
                    )}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </span>

            {index === data[convesationIndex].messages.length - 1 &&
                index > 0 && (
                    <button
                        className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-md py-3 px-5"
                        onClick={() => {
                            deleteMessage(convesationIndex, index);
                        }}
                    >
                        Delete message
                    </button>
                )}
        </div>
    );
};

export default Message;
