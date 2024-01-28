import React, { useState, useEffect } from "react";
import "../FullScreenModal.css"; // Import your CSS file for styling
import Header from "../components/Header";
import BreatheAnimation from "../components/BreatheAnimation";
import { useNavigate } from "react-router-dom";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";

const Advisor = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([0, 0, 0, 0, 0, 0, 0]);

    const navigate = useNavigate();

    const handleOptionSelect = (questionIndex, optionIndex) => {
        // Convert optionIndex to a number using parseInt
        optionIndex = parseInt(optionIndex, 10);

        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptions = [...prevSelectedOptions];
            updatedOptions[questionIndex] = optionIndex;
            return updatedOptions;
        });
    };

    function scaleValue(originalValue, minOriginal, maxOriginal, minScaled, maxScaled) {
        return ((originalValue - minOriginal) / (maxOriginal - minOriginal)) * (maxScaled - minScaled) + minScaled;
      }

    const handleSubmit = () => {
        const sumOfIndices = selectedOptions.reduce((acc, value) => acc + value, 0);
        const scaledValue = scaleValue(sumOfIndices, 0, 17, 5, 50);
        localStorage.setItem("risk", scaledValue);
    };

    const questionsData = [
        {
            question:
                "In general, how would your best friend describe you as a risk taker?",
            options: [
                "A real gambler",
                "Willing to take risks after completing adequate research",
                "Cautious",
                "A real risk avoider",
            ],
        },
        {
            question:
                "You are on a TV game show and can choose one of the following. Which would you take?",
            options: [
                "$1000 in cash",
                "A 50% chance at winning $5,000",
                "A 25% chance at winning $10,000",
                "A 5% chance at winning $100,000",
            ],
        },
        {
            question:
                "When you think of the word risk which of the following words comes to mind first?",
            options: ["Loss", "Uncertainty", "Opportunity", "Thrill"],
        },
        {
            question: "You are able to save money regularly.",
            options: ["Completely false", "Somewhat True", "Completely True"],
        },
        {
            question:
                "You can pay all your monthly bills on time -- including any credit card or other debt.",
            options: ["Completely false", "Somewhat True", "Completely True"],
        },
        {
            question:
                "If you lose money investing today, your current lifestyle would not be impacted.",
            options: ["Completely false", "Somewhat True", "Completely True"],
        },
        {
            question:
                "You do not need to draw down more than 5% of your investment portfolio for any major financial goal in the next five years.",
            options: ["Completely false", "Somewhat True", "Completely True"],
        },

        // Add more questions as needed
    ];

    function sendIt(e) {}

    // useEffect(() => {
    //     const url = "http://localhost:8000/api/portfolio/";
    //     fetch(url, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + localStorage.getItem("refresh"),
    //         },
    //     })
    //         .then((response) => {
    //             if (response.status === 401) {
    //                 navigate("/login");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         });
    // }, []);

    useEffect(() => {
        // Open the modal when the component mounts
        setModalOpen(true);

        // Optionally, you can close the modal after a certain duration
        const timeout = setTimeout(() => {
            setModalOpen(false);
        }, 5000); // Close the modal after 5 seconds

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []); // The empty dependency array ensures that this effect runs only once on mount

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="app">
            <Header active="advisor" />
            {modalOpen && (
                <div className="fullscreen-modal">
                    <div className="modal-content">
                        <BreatheAnimation />
                    </div>
                </div>
            )}

            <div className="max-h-[575px] mt-40">
                <h1 className="text-3xl font-bold mb-4">
                    Risk Tolerance Questionnaire
                </h1>
                <div className="overflow-auto">
                    {questionsData.map((data, index) => (
                        <MultipleChoiceQuestion
                            key={index}
                            question={data.question}
                            options={data.options}
                            onSelect={(optionIndex) =>
                                handleOptionSelect(index, optionIndex)
                            }
                        />
                    ))}
                </div>
                <a
                    type="submit"
                    onClick={handleSubmit}
                    href={"/portfolio"}
                    className="my-8 text-white hover:bg-[#359381] bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </a>
            </div>
        </div>
    );
};

export default Advisor;
