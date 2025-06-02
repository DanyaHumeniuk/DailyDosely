

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#e0e5ec] justify-center items-center gap-4 px-4">
      <div className="flex flex-col gap-6 w-full h-full items-center justify-center mx-auto">

        <div className="flex flex-col w-full max-w-2xl aspect-video sm:max-w-lg lg:max-w-4xl bg-[#e0e5ec] rounded-[50px] shadow-neu gap-2 justify-center items-center p-4">
          <div className="flex w-full bg-[#e0e5ec] rounded-[50px] shadow-neu h-full"></div>
          <div className="flex flex-row w-full rounded-[50px] h-full gap-2">
            <div className="flex rounded-full bg-[#e0e5ec] w-1/2 h-full border border-black"></div>
            <div className="flex bg-[#e0e5ec] border border-black rounded-[50px] w-full h-full"></div>
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