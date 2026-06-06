import { CustButton } from './CustButton';

export default function NewMarketing() {
  return (
    <div className='flex flex-col items-center w-full max-w-7xl h-auto mx-auto gap-4 font-inter'>
      <div className='flex flex-col items-center w-[1110px] h-[124px] gap-2'>
        <h1 className='font-semibold text-4xl leading-[44px] text-[#4D4D4D] '>Caring is the new marketing</h1>
        <p className='text-center w-[628px] h-[72px] '>{"The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."}</p>
      </div>

      <div className="flex justify-between px-[144px] w-full gap-4 h-[366px] ">
        {/* card 1 */}
        <div className='relative flex justify-center w-[368px] h-[366px] '>
          <img className='h-[286px]' src='/marketing-logo/image 18.png' />
          <div className='absolute bottom-0 flex flex-col justify-between items-center text-center w-[300px] h-[176px] rounded-lg p-4 gap-4 bg-[#F5F7FA] shadow-lg'>
            <h1 className='w-[285px] h-[84px] font-semibold text-xl leading-7 text-[#717171] '>Creating Streamlined Safeguarding Processes with OneRen</h1>
            <CustButton variant={'secondary'} iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>
        
        {/* card 2 */}
        <div className='relative flex justify-center w-[368px] h-[366px]'>
          <img className='h-[286px]' src='/marketing-logo/image 19.png' />
          <div className='absolute bottom-0 flex flex-col justify-between items-center text-center w-[300px] h-[176px] rounded-lg p-4 gap-4 bg-[#F5F7FA] shadow-lg'>
            <h1 className='w-[285px] h-[84px] font-semibold text-xl leading-7 text-[#717171] '>What are your safeguarding responsibilities and how can you manage them?</h1>
            <CustButton variant={'secondary'} iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>
        
        {/* card 3 */}
        <div className='relative flex justify-center w-[368px] h-[366px]'>
          <img className='h-[286px]' src='/marketing-logo/image 20.png' />
          <div className='absolute bottom-0 flex flex-col justify-between items-center text-center w-[300px] h-[176px] rounded-lg p-4 gap-4 bg-[#F5F7FA] shadow-lg'>
            <h1 className='w-[285px] h-[84px] font-semibold text-xl leading-7 text-[#717171] '>Revamping the Membership Model with Triathlon Australia</h1>
            <CustButton variant={'secondary'} iconPosition='right'>ReadMore</CustButton>
          </div>
        </div>
      </div>
    </div>
  )
}
