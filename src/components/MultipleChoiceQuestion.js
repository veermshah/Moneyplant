import React, { useState } from "react";

const MultipleChoiceQuestion = ({ question, options, onSelect }) => {
    return (
        <div className="border rounded p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{question}</h2>
            <ul className="list-none p-0">
                {options.map((option, index) => (
                    <li key={index} className="mb-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                id={index}
                                name={question}
                                value={option}
                                onChange={() => onSelect(index)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
            {/* <p className="mt-2">Selected Option: {selectedOption}</p> */}
        </div>
    );
};

export default MultipleChoiceQuestion;
