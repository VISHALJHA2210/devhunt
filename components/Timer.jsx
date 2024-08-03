import Countdown from './Countdown';

const Timer = () => {

  return (
    <div className='w-full bg-greyBG rounded-xl mt-5 lg:mt-10 text-center'>
      <div className='flex flex-col gap-2 items-center px-4 py-6'>
        <h2 className='text-[1.4rem] text-white/90 font-bold'>Find Best Dev Tools Voted by Developers!</h2>
        <h2 className='text-[1.7rem] text-lightOrange font-bold'>Vote Closing in:</h2>

        <Countdown/>

        <p className='sm:text-lg text-md text-gray-400 text-center mt-3 leading-loose'>
            <span>100k+ developers found Dev Tools here.</span>
            <br className='hidden sm:block'/>
            <span>See how <span className='underline'>it started</span></span>
        </p>

        <div className='w-[90%] max-w-[500px] border border-darkOrange rounded-md bg-blueBG py-2 px-2 flex flex-col gap-1 items-center text-center'>
            <p className='text-gray-600 text-sm'>sponsor</p>
            <button className='text-xl text-white font-bold mt-1'>IndexRusher.com</button>
            <h2 className='sm:text-lg text-md text-gray-300 -mt-1'>Get your web pages indexed by Google to improve SEO</h2>

            <button className='bg-lightOrange transition hover:bg-darkOrange text-white text-md text-center px-10 py-1 my-4 rounded-md'>Get a LifeTime Deal</button>

        </div>

      </div>
    </div>
  );
};

export default Timer;
