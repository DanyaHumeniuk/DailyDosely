import React, { useEffect, useState } from 'react';

const Hero = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="h-screen w-screen flex flex-col bg-[#e0e5ec] justify-center items-center gap-4 px-4">
      <div className="flex flex-col gap-6 w-full h-full items-center justify-center mx-auto">

        <div className="flex flex-col w-full max-w-2xl aspect-video sm:max-w-lg lg:max-w-4xl bg-[#e0e5ec] rounded-[50px] shadow-neu gap-4 justify-center items-center p-4">
          <div className="flex flex-col w-full bg-[#e0e5ec] rounded-[50px] shadow-neu h-1/2 max-h-[120px] lg:max-h-[550px] p-4">
            <div className="w-full h-1/2 flex flex-col justify-center items-start text-blue-950">
              <p className="text-xl lg:text-3xl font-semibold">
                {new Date().toLocaleDateString('en-US', {
                  month: 'numeric',
                  day: '2-digit',
                })}
              </p>
            </div>
            <div className="w-full h-1/2 bg-gray-300 rounded-[50px] flex flex-row justify-between items-center px-4 lg:px-8 text-blue-950">
              <span className="text-sm lg:text-lg">Next Medication</span>
              <span className="text-xl lg:text-2xl font-semibold">Ibuprofen</span>
              <span className="text-sm lg:text-lg text-gray-700">At: 6 PM</span>
            </div>
          </div>
          <div className="flex flex-row w-full rounded-[50px] gap-2 lg:gap-4 h-1/2 justify-center items-center">
            <div className="flex relative items-center justify-center rounded-full bg-[#e0e5ec] w-1/2 max-w-[120px] lg:max-w-[230px] aspect-square shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff]">
              {/* Hour Hand */}
              <div
                className="absolute bottom-1/2 left-1/2 w-[3px] h-[30%] bg-black origin-bottom rounded-lg"
                style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
              ></div>

              {/* Minute Hand */}
              <div
                className="absolute bottom-1/2 left-1/2 w-[2px] h-[40%] bg-black origin-bottom rounded-lg"
                style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
              ></div>

              {/* Second Hand */}
              <div
                className="absolute bottom-1/2 left-1/2 w-[1px] h-[40%] bg-black origin-bottom rounded-lg"
                style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}
              ></div>

              {/* Center Dot */}
              <div className="absolute w-1 h-1 lg:w-2 lg:h-2 border border-black bg-white rounded-full z-10"></div>
            </div>
            <div className="flex bg-[#e0e5ec] border border-black rounded-[50px] w-full h-full max-h-[120px] lg:max-h-[550px]"></div>
          </div>
        </div>

        <div className="flex w-full max-w-2xl h-full max-h-16 lg:max-w-4xl sm:max-w-lg bg-[#e0e5ec] rounded-[50px] mx-auto shadow-neu">
          <p className="text-black"></p>
        </div>

      </div>
      
    </div>
  )
}

export default Hero