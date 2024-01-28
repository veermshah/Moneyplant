import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
    useEffect(() => {
        let text = document.getElementById("text");
        let leaf = document.getElementById("leaf");
        let hill1 = document.getElementById("hill1");
        let hill4 = document.getElementById("hill4");
        let hill5 = document.getElementById("hill5");

        window.addEventListener("scroll", () => {
            let value = window.scrollY;

            if (text !== null) {
                // Set a maximum scroll limit (adjust the limit as needed)
                const maxScroll = 400;

                // Apply the scroll transformations only if within the limit
                if (value <= maxScroll) {
                    text.style.marginTop = value * 2.5 + "px";
                    leaf.style.top = value * -1.5 + "px";
                    leaf.style.left = value * 1.5 + "px";
                    hill5.style.left = value * 1.5 + "px";
                    hill4.style.left = value * -1.5 + "px";
                    hill1.style.top = value * 1 + "px";
                }
            }
        });
    }, []);
    return (
        <>
            <div>
                <Header active="home" />
                <div className="App">
                    <section class="parallax">
                        <img src="hill1.png" id="hill1" />
                        <img src="hill2.png" id="hill2" />
                        <img src="hill3.png" id="hill3" />
                        <img src="hill4.png" id="hill4" />
                        <img src="hill5.png" id="hill5" />
                        <img src="tree.png" id="tree" />
                        <h2 id="text" className="font-bold">
                            Moneyplant
                            <section>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "RoboAdvising.",
                                            "Automatic Trading.",
                                            "Financial Peace.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </section>
                        </h2>

                        <img src="leaf.png" id="leaf" />
                        <img src="plant.png" id="plant" />
                    </section>

                    <section class="sec">
                        <br />
                        <br />
                        <br />
                        <h1>About</h1>
                        <br />
                        <h3>
                            Money Plant is a comprehensive financial platform:
                        </h3>
                        <p>
                            This part of the statement highlights that Money
                            Plant is not just a simple financial tool; it offers
                            a wide range of features and services that cover
                            various aspects of finance. The term "comprehensive"
                            suggests that it provides a thorough and inclusive
                            approach to financial services.
                        </p>
                        <br />
                        <h3>with a robo-advisor feature:</h3>
                        <p>
                            Here, the mention of a "robo-advisor feature"
                            indicates that Money Plant incorporates automated,
                            algorithm-driven tools to assist users in making
                            financial decisions. A robo-advisor typically uses
                            algorithms to analyze data and provide investment
                            advice tailored to individual users.
                        </p>
                        <br />
                        <h3>It analyzes stock data from the last ten years:</h3>
                        <p>
                            This part emphasizes a data-driven approach by
                            stating that Money Plant looks at historical stock
                            data spanning the last ten years. Analyzing
                            long-term data can provide insights into a stock's
                            performance over various market conditions.
                        </p>
                        <br />
                        <h3>
                            while also considering market changes in the last
                            month:
                        </h3>
                        <p>
                            In addition to historical data, Money Plant takes
                            into account recent market changes, specifically
                            those occurring in the last month. This implies that
                            the platform is designed to be dynamic and
                            responsive to current market conditions.
                        </p>
                        <br />
                        <h3>to provide personalized investment advice:</h3>
                        <p>
                            The ultimate goal of Money Plant is to offer
                            personalized investment advice. By combining
                            historical data analysis with recent market changes,
                            the platform aims to generate recommendations that
                            align with the unique financial goals and risk
                            tolerance of individual users.
                        </p>
                        <br />
                        <h3>
                            Our goal is to help you make informed decisions and
                            achieve your financial objectives:
                        </h3>
                        <p>
                            This part underlines the overarching objective of
                            Money Plant, which is to empower users to make
                            informed decisions in their financial journey. The
                            platform aims to assist users in achieving their
                            specific financial objectives, whether it be wealth
                            accumulation, retirement planning, or any other
                            financial goal. In summary, Money Plant positions
                            itself as a sophisticated financial platform with a
                            robo-advisor feature. It leverages extensive
                            historical stock data and recent market changes to
                            offer personalized investment advice, ultimately
                            aiming to guide users toward making informed
                            decisions and reaching their financial objectives.
                        </p>
                        <br />
                        <br />
                        <a href="/advisor">Get Started</a>
                    </section>
                </div>
            </div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                    <motion.dev
                        animate={{ y: [0, 24, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-white mb-1"
                    />
                </div>
            </div>
        </>
    );
}
