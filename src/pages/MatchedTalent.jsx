import React from 'react'

const MatchedTalent = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
        <div className="max-w-6/10 -ml-[500px]">
            <img src={Rectangle} alt="" className=''/>
        </div>
        <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md">
        <h2 className='text-green-500 text-sm font-black relative bottom-[10px] left-[160px]'>2 of 3</h2>
        <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Select All The Skills You Want</h1>
                       
        </div>  
    </section>
    
  )
}

export default MatchedTalent