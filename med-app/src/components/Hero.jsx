import React, { useEffect, useState } from 'react';

const Hero = () => {

  const [time, setTime] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [medicationEntry, setMedicationEntry] = useState({ name: "", image: null });



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

  const [medicationName, setMedicationName] = useState("");
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setMedicationEntry((prev) => ({ ...prev, image: imageURL }));
    }
  };


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
            <div className="flex bg-[#e0e5ec] border border-black rounded-[50px] w-full h-full max-h-[120px] lg:max-h-[550px] items-center px-4 gap-4">
              {medicationEntry.image && (
                <img src={medicationEntry.image} alt="Medication" className="w-16 h-16 lg:w-40 lg:h-40 object-cover rounded-[20px]" />
              )}

              {medicationEntry.name && (
                <p className="text-sm lg:text-xl font-semibold text-blue-950">
                  {medicationEntry.name}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around items-center w-full max-w-2xl h-full max-h-16 lg:max-w-4xl sm:max-w-lg bg-[#e0e5ec] rounded-[50px] mx-auto shadow-neu gap-12 px-4">
          <label className="cursor-pointer flex items-center justify-center bg-[#e0e5ec] rounded-full w-1/2 max-w-lg h-10 shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] text-gray-500 text-sm lg:text-lg">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <span>Upload image</span>
          </label>
          <div className="flex justify-center items-center">
            <input 
              type="text" 
              placeholder="Enter medication name" 
              className="flex-grow bg-transparent outline-none placeholder-gray-500 text-sm lg:text-lg" 
              value={medicationName} onChange={(e) => setMedicationName(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === "Enter" && medicationName.trim() !=="") {
                  e.preventDefault()
                  setMedicationEntry((prev) => ({ ...prev, name: medicationName }))
                  setMedicationName("")
              }}} />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Hero