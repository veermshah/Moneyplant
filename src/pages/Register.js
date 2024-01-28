import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    function register(e) {
        e.preventDefault();
        const url = "http://localhost:8000/api/register/";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: document.getElementById("email").value,
            password: document.getElementById("password").value,
          }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }
    
    return (
        <>
            <Header active="login" />
            <form
                className="flex flex-col items-center justify-center mt-48"
                onSubmit={register}
            >
                <h1 className="text-3xl font-semibold text-gray-800 text-left">
                    Register
                </h1>
                <div className="mt-8">
                    <div className="mb-6 flex">
                        <div className="mr-2">
                            <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex">
                        <div className="mr-2">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white hover:bg-[#359381] bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Register
                    </button>
                </div>
            </form>
        </>
    );
}
