import React from "react";

const DropDown = () => {
  return (
    <div className="hidden lg:block">
      <div className="fixed inset-0 z-10">
        <div className="w-[400px] bg-greyBG h-screen absolute right-60 top-20 rounded-lg px-4 py-6">
          <div className="text-gray-400 flex flex-col gap-3 ">
            <ul className="flex flex-col gap-3">
              <li>
                <button className="hover:text-white">All DevTools</button>
              </li>
              <li>
                <button className="hover:text-white">This Week</button>
              </li>
              <li>
                <button className="hover:text-white">Upcoming Tools</button>
              </li>
              <li>
                <button className="hover:text-white">
                  Best DevTools on Product Hunt
                </button>
              </li>
            </ul>
            <div>
              <p className="text-white my-3">Categories</p>
              <div className="grid grid-cols-2 justify-between ml-2">
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <button className="hover:text-white">Open Source</button>
                  </li>
                  <li>
                    <button className="hover:text-white">AI</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Code</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Analytics</button>
                  </li>
                  <li>
                    <button className="hover:text-white">API</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Design</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Hosting</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Marketing</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Framework</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Crypto</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Charts</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Monitoring</button>
                  </li>
                  <li>
                    <button className="hover:text-white">CMS</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Tailwind CSS</button>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <button className="hover:text-white">DevOps</button>
                  </li>
                  <li>
                    <button className="hover:text-white">CI</button>
                  </li>
                  <li>
                    <button className="hover:text-white">NoCode</button>
                  </li>
                  <li>
                    <button className="hover:text-white">QA</button>
                  </li>
                  <li>
                    <button className="hover:text-white">DB</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Helpers</button>
                  </li>
                  <li>
                    <button className="hover:text-white">UI Library</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Emails</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Language</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Web3</button>
                  </li>
                  <li>
                    <button className="hover:text-white">IDE</button>
                  </li>
                  <li>
                    <button className="hover:text-white">
                      WorkFlow Automation
                    </button>
                  </li>
                  <li>
                    <button className="hover:text-white">Security</button>
                  </li>
                  <li>
                    <button className="hover:text-white">Boilerplate</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
