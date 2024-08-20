import React from 'react'

const About = React.forwardRef((props,ref) => {

  const dark = props.mode

  return (
    <div ref={ref}  className='mx-auto max-w-[1500px] p-10 flex flex-col gap-6'>
      <h2 className={`${dark ? 'text-[#F7F7F8]' : 'text-[#3A1078]'} text-5xl text-center font-semibold text-[#3A1078]`}>About Event</h2>
      <p className={`${dark ? 'text-[#F7F7F8]' : 'text-black'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequuntur pariatur excepturi reiciendis accusamus necessitatibus, facere obcaecati libero laborum voluptate quaerat soluta impedit, iste asperiores? Velit rem molestiae incidunt. Unde libero omnis in ex quis. Optio ipsam qui vel sint adipisci nam cupiditate, labore itaque nihil fugiat veritatis molestias aut dicta officiis atque accusamus eum saepe eveniet repellat iure. Doloribus officia praesentium saepe repellendus provident fugiat dolor aut eum dolores minima nihil est mollitia dolore consequuntur, aperiam quaerat nesciunt repellat ullam voluptas dicta. Veniam, facere blanditiis, doloremque repellendus ea adipisci, rem quae perspiciatis voluptates magnam eaque iure excepturi quam eos dignissimos in nostrum vitae esse id? Illum ad numquam voluptatibus repellendus voluptates vitae minus delectus ipsa nisi, porro placeat dolores vel officiis temporibus necessitatibus aspernatur iste aliquid earum deleniti dolorum distinctio facilis dolore! Consequuntur aspernatur neque a repellendus eaque ratione id quae, qui voluptates, reiciendis quisquam praesentium officia fugiat nulla!.     
      </p>
    </div>
  )
})

export default About
