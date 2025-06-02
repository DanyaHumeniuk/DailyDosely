

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#e0e5ec] justify-center items-center gap-4 px-4">
      <div className="flex flex-col gap-6 w-full h-full items-center justify-center mx-auto">

        <div className="flex flex-col w-full max-w-2xl aspect-video sm:max-w-lg lg:max-w-4xl bg-[#e0e5ec] rounded-[50px] shadow-neu gap-4 justify-center items-center p-4">
          <div className="flex w-full bg-[#e0e5ec] rounded-[50px] shadow-neu h-1/2 max-h-[120px] lg:max-h-[550px]"></div>
          <div className="flex flex-row w-full rounded-[50px] gap-2 lg:gap-4 h-1/2 justify-center items-center">
            <div className="flex rounded-full bg-[#e0e5ec] w-1/2 max-w-[120px] lg:max-w-[230px] aspect-square border border-black"></div>
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