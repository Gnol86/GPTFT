import { create } from "zustand";

export const useStore = create((set) => ({
    data: undefined,
    index: -1,
    focus: undefined,
    clearData: () => set({ data: [] }),
    setIndex: (index) => set({ index }),
    uploadFile: (file) => {
        if (file.name.split(".").pop() === "json") {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const text = e.target.result;
                    const data = JSON.parse(text);
                    set({ data });
                } catch (e) {
                    alert("Invalid JSON file");
                }
            };
            reader.readAsText(file);
        } else if (file.name.split(".").pop() === "jsonl") {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const text = e.target.result;
                    const data = text.split("\n").map((d) => JSON.parse(d));
                    set({ data });
                } catch (e) {
                    alert("Invalid JSONL file");
                }
            };
            reader.readAsText(file);
        } else {
            alert("File type not supported");
        }
    },
    addConversation: () =>
        set((state) => ({
            data: [
                ...state.data,
                {
                    messages: [{ role: "system", content: "" }],
                },
            ],
            index: state.data.length,
        })),

    addMessage: (index) =>
        set((state) => {
            const newData = [...state.data];
            newData[index].messages.push({
                // id: newData[index].messages.length,
                role:
                    newData[index].messages.length === 0
                        ? "system"
                        : newData[index].messages[
                              newData[index].messages.length - 1
                          ].role === "user"
                        ? "assistant"
                        : "user",
                content: "",
            });
            return { data: newData };
        }),

    deleteConversation: (index) =>
        confirm("Are you sure?") &&
        set((state) => {
            const newData = [...state.data];
            newData.splice(index, 1);
            return { data: newData, index: -1 };
        }),

    deleteMessage: (index, messageIndex) =>
        confirm("Are you sure?") &&
        set((state) => {
            const newData = [...state.data];
            newData[index].messages.splice(messageIndex, 1);
            return { data: newData };
        }),

    editMessage: (index, messageIndex, role, content, focus = undefined) =>
        set((state) => {
            const newData = [...state.data];
            newData[index].messages[messageIndex].role = role;
            newData[index].messages[messageIndex].content = content;
            return { data: newData, focus: focus };
        }),

    downloadJson: (data) => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(data)], {
            type: "text/plain;charset=utf-8",
        });
        element.href = URL.createObjectURL(file);
        element.download = "data.json";
        document.body.appendChild(element);
        element.click();
    },

    downloadJsonL: (data) => {
        const a = document.createElement("a");
        const file = new Blob([data.map((d) => JSON.stringify(d)).join("\n")], {
            type: "text/plain;charset=utf-8",
        });
        a.href = URL.createObjectURL(file);
        a.download = "data.jsonl";
        a.click();
    },
}));
