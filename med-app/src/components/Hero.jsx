

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 justify-center items-center gap-4 px-4">
      <div className="flex flex-col gap-2 w-full h-full items-center justify-center mx-auto">

        <div className="flex w-full max-w-2xl aspect-video sm:max-w-lg lg:max-w-4xl bg-white rounded-[50px]">
          <p className="text-black">Top Box Content</p>
        </div>

        <div className="flex w-full max-w-2xl h-full max-h-16 lg:max-w-4xl sm:max-w-lg bg-white rounded-[50px] mx-auto">
          <p className="text-black">Bottom Box Content</p>
        </div>

      </div>
      
    </div>
  )
}

export default Hero