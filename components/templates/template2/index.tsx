import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillCodepenCircle } from "react-icons/ai";

const Template2 = () => {
  return (
    <div className="w-full min-h-screen bg-pink-100 text-gray-700 flex py-[3rem]">
      <div className="w-full border-y-[3px] mb-[3rem] border-gray-300">
        <div className="w-full p-[3rem]">
          {/* header starts here */}

          <div className="w-full flex items-center gap-[5rem]">
            <div className="w-[25%] aspect-square relative rounded-full overflow-hidden">
              <Image
                src="/template-1-photo.jpg"
                alt=""
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-heading font-bold text-5xl tracking-wide text-center">
                {" "}
                Babar Azam{" "}
              </h3>

              <div className="flex items-center px-[3rem] mt-3">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 font-semibold text-xl">
                  Software Developer
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="w-full flex justify-center gap-5 items-center mt-[1rem]">
                <AiOutlineMail className="text-2xl cursor-pointer" />
                <IoMdCall className="text-2xl cursor-pointer" />
                <AiFillLinkedin className="text-2xl cursor-pointer" />
                <AiFillGithub className="text-2xl cursor-pointer" />
                <BsDiscord className="text-2xl cursor-pointer" />
                <BsStackOverflow className="text-2xl cursor-pointer" />
                <AiFillCodepenCircle className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>

          {/* header ends here */}

          <div className="mt-[3rem] flex gap-5">
            {/* left section starts here */}

            <div className="w-1/2 border-t-[3px] border-t-gray-300">
              <div className="flex flex-col pr-5">
                {/* overview starts here */}
                <div className="w-full flex flex-col items-start justify-center">
                  <div className="w-full flex flex-col items-start mt-[2rem]">
                    <h3 className="text-2xl uppercase font-heading font-bold mb-2">
                      {" "}
                      Overview{" "}
                    </h3>
                    <p className="font-body">
                      Conceptualized and designed innovative packaging solutions
                      for Google products, ensuring brand consistency and market
                      competitiveness. Collaborated with cross-functional teams,
                      including marketing, product development, and production,
                      to understand project requirements and deliver design
                      solutions that met business goals.
                    </p>
                  </div>
                </div>
                {/* overview ends here */}

                {/* skills section starts here */}
                <div className="w-full mt-[2rem] flex flex-col items-start justify-center border-t-[3px] border-t-gray-300">
                  <div className="w-full flex flex-col items-start mt-[1rem]">
                    <h3 className="text-2xl uppercase font-heading font-bold mb-2">
                      {" "}
                      Skills{" "}
                    </h3>
                    <p className="text-lg uppercase font-heading font-semibold mt-3">
                      {" "}
                      Frontend{" "}
                    </p>
                    <div className="w-full flex flex-col mt-4 gap-3">
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          React{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Next.js{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Tailwind CSS{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Bootstrap{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold"> MUI </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Redux{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg uppercase font-heading font-semibold mt-[3rem]">
                      {" "}
                      Backend{" "}
                    </p>
                    <div className="w-full flex flex-col mt-4 gap-3">
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Node.js{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Nest.js{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Django{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-2">
                        <h3 className="flex-1 text-lg font-semibold">
                          {" "}
                          Flask{" "}
                        </h3>
                        <div className="w-[50%] bg-gray-400 rounded-full h-2">
                          <div
                            className="bg-gray-700 h-2 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
               {/* skills section ends here */}
              </div>
            </div>
             {/* left side ends here */}

               {/* left section starts here */}

            <div className="flex-1 border-t-[3px] border-t-gray-300">
               {/* experience starts here */}
            <h3 className="text-2xl uppercase font-heading font-bold mb-2 mt-[2rem]">
                      Experience
              </h3>
               
            <ol className="relative border-l-[3px] border-gray-300 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer (SDE-I) </h3>
                    <p className="mb-4 font-body">
                    In my role as a Full-Stack Developer at XYZ Company, I effectively managed front-end and back-end development for a variety of projects. 
                    </p>
                   
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Back-End Developer (DEF Solutions)</h3>
                    <p className="font-body">In my role as a Full-Stack Developer at XYZ Company, I effectively managed front-end and back-end development for a variety of projects. </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End Developer (ABC Corporation)</h3>
                    <p className="font-body">In my role as a Full-Stack Developer at XYZ Company, I effectively managed front-end and back-end development for a variety of projects.</p>
                </li>
            </ol>
              {/* experience ends here */}
              {/* education starts here */}
              <h3 className="text-2xl uppercase font-heading font-bold mb-2 mt-[2rem]">
                      Education
              </h3>
               
            <ol className="relative border-l-[3px] border-gray-300 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MSc in Computer Science </h3>
                    <p className="mb-2 font-body">
                    In my role as a Full-Stack Developer at XYZ Company, I effectively managed front-end and back-end development for a variety of projects. 
                    </p>
                   
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-2 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BSc in Computer Science</h3>
                    <p className="font-body">In my role as a Full-Stack Developer at XYZ Company, I effectively managed front-end and back-end development for a variety of projects. </p>
                </li>
               
            </ol>
            {/* education ends here */}
            </div>
             {/* left side ends here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
