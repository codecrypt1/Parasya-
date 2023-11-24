import React from "react";
import SelectCustom from "./SelectCustom";

const SignupForm = () => {
  let options = [
    {
      id: 1,
      value: "College of Engineering, Trivandrum",
      label: "College of Engineering, Trivandrum",
    },
    {
      id: 2,
      value: "Government Engineering College, Thrissur",
      label: "Government Engineering College, Thrissur",
    },
    {
      id: 3,
      value: "Thangal Kunju Musaliar College of Engineering, Kollam",
      label: "Thangal Kunju Musaliar College of Engineering, Kollam",
    },
    {
      id: 4,
      value: "NSS College of Engineering, Palakkad",
      label: "NSS College of Engineering, Palakkad",
    },
    {
      id: 5,
      value: "Mar Athanasius College of Engineering, Kothamangalam",
      label: "Mar Athanasius College of Engineering, Kothamangalam",
    },
    {
      id: 6,
      value: "Government College of Engineering, Kannur",
      label: "Government College of Engineering, Kannur",
    },
    {
      id: 7,
      value: "Rajiv Gandhi Institute of Technology, Kottayam",
      label: "Rajiv Gandhi Institute of Technology, Kottayam",
    },
    {
      id: 8,
      value: "Government Engineering College, Trivandrum",
      label: "Government Engineering College, Trivandrum",
    },

    {
      id: 9,
      value: "Government Engineering College, Kozhikode",
      label: "Government Engineering College, Kozhikode",
    },
    {
      id: 10,
      value: "Government Engineering College, Sreekrishnapuram, Palakkad",
      label: "Government Engineering College, Sreekrishnapuram, Palakkad",
    },
    {
      id: 11,
      value: "Government Engineering College, Wayanad",
      label: "Government Engineering College, Wayanad",
    },
    {
      id: 12,
      value: "Government Engineering College, Idukki",
      label: "Government Engineering College, Idukki",
    },
  ];
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 pt-6">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-cyan-900 dark:text-white"
          >
            StudentHub Connect
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-cyan-800 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cayn-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="name@student.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="college"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <SelectCustom label="Select your college" options={options} />
                </div>
                <div>
                  <label
                    for="id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your College Id
                  </label>
                  <input
                    type="text"
                    name="college_id"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cayn-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="22B857"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-cayn-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-cyan-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupForm;
