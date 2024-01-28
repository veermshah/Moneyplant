import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";

export default function LoginPage() {
    const navigate = useNavigate();
    function goToRegisterPage() {
        navigate("/register");
    }
    function login(e) {
        e.preventDefault();
        const url = "http://localhost:8000/api/token/";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.access);

                console.log(data);
            });
        navigate("/advisor");
    }
    return (
        <>
            <Header active="login" />
            <BackgroundVideo />
            <form
                className="flex flex-col items-center justify-center mt-48"
                onSubmit={login}
            >
                <h1 className="text-3xl font-semibold text-white">
                    Login
                </h1>
                <div className="mt-8">
                    <div className="mb-6 flex">
                        <div className="mr-2">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-white dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-white dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-lg min-w-[198px] text-black font-black hover:bg-[#359381] bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                    <a
                        type="button"
                        className="text-lg min-w-[198px] m-2 text-black font-black hover:bg-[#359381] bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        href={"/register"}
                    >
                        Register
                    </a>
                </div>
            </form>
        </>
    );
}
