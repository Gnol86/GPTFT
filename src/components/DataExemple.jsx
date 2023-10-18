import clsx from "clsx";
import React from "react";

const DataExemple = () => {
    const [jsonl, setJsonl] = React.useState(false);

    return (
        <div className="mt-10 flex flex-col gap-5 items-center">
            <a
                className="text-sky-800 hover:underline hover:text-sky-600"
                href="https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates/"
            >
                Guide to Fine-tuning OpenAI GPT-3.5 Turbo
            </a>
            <h3 className="text-xl font-bold text-center w-full">
                Data exemple for 2 conversations
            </h3>
            <div className="w-full flex flex-row gap-5 justify-center">
                <button
                    className={clsx(
                        "font-bold rounded-md p-3 w-36",
                        !jsonl
                            ? "bg-slate-600 text-white"
                            : "bg-white text-slate-600 border border-slate-600 hover:bg-slate-200"
                    )}
                    onClick={() => {
                        setJsonl(false);
                    }}
                >
                    JSON
                </button>
                <button
                    className={clsx(
                        "font-bold rounded-md p-3 w-36",
                        jsonl
                            ? "bg-slate-600 text-white"
                            : "bg-white text-slate-600 border border-slate-600 hover:bg-slate-200"
                    )}
                    onClick={() => {
                        setJsonl(true);
                    }}
                >
                    JSONL
                </button>
            </div>

            {!jsonl ? (
                <div className="flex flex-col font-mono bg-slate-700 text-white p-5 rounded-md overflow-x-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl">
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">1</span>&nbsp;&nbsp;
                        {"["}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">2</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">3</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-sky-400">{`"messages"`}</span>
                        {`: [`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">4</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"system"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"You are an assistant that occasionally misspells words"`}</span>
                        {` },`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">5</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"user"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Tell me a story."`}</span>
                        {` },`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">6&nbsp;&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"assistant"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"One day a student went to schoool."`}</span>
                        {` }`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">7&nbsp;&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`]`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">8&nbsp;&nbsp;</span>&nbsp;
                        {`},`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">9&nbsp;&nbsp;</span>
                        &nbsp;&nbsp;{"{"}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">10&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-sky-400">{`"messages"`}</span>
                        {`: [`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">11&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"system"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"You are an assistant that occasionally misspells words"`}</span>
                        {` },`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">12&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"user"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Tell me a haiku."`}</span>
                        {` },`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">13&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{ `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"assistant"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Whisppers in the breze, Leave rustling, fall aproaches, Nature's dance begins."`}</span>
                        {` }`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">14&nbsp;</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`]`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">15&nbsp;</span>&nbsp;
                        {`}`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">16&nbsp;</span>
                        {`]`}
                    </span>
                </div>
            ) : (
                <div className="flex flex-col font-mono bg-slate-700 text-white p-5 rounded-md max-w-2xl overflow-x-auto">
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">1&nbsp;&nbsp;</span>
                        {"{ "}
                        <span className="text-sky-400">{`"messages"`}</span>
                        {`: [ { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"system"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"You are an assistant that occasionally misspells words"`}</span>
                        {` }, { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"user"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Tell me a story."`}</span>
                        {` }, { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"assistant"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"One day a student went to schoool."`}</span>
                        {` } ] }`}
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="opacity-50">2&nbsp;&nbsp;</span>
                        {"{ "}
                        <span className="text-sky-400">{`"messages"`}</span>
                        {`: [ { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"system"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"You are an assistant that occasionally misspells words"`}</span>
                        {` }, { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"user"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Tell me a haiku."`}</span>
                        {` }, { `}
                        <span className="text-sky-400">{`"role"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"assistant"`}</span>
                        {`, `}
                        <span className="text-sky-400">{`"content"`}</span>
                        {`: `}
                        <span className="text-lime-400">{`"Whisppers in the breze, Leave rustling, fall aproaches, Nature's dance begins."`}</span>
                        {` } ] }`}
                    </span>
                </div>
            )}
        </div>
    );
};

export default DataExemple;
