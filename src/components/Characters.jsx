import React from "react";

const Characters = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* Section Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba (255, 255, 255, 0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* Left side - Avatar info and selection */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* Selected Avatar */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            {/*  Avatar Statistics */}
            <div className="space-y-3 mb-16">
              {/* Power stats */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-600 to-white"></div>
                </div>
              </div>

              {/* stable stats */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-600 to-white"></div>
                </div>
              </div>

              {/* stable stats */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrate</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-600 to-white"></div>
                </div>
              </div>

              {/* stable stats */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-600 to-white"></div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
