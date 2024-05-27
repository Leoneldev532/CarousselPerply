
       
    "use client"   
import man1 from "@/public/man.jpg";
import man2 from "@/public/man2.jpg";

import woman1 from "@/public/woman1.jpg";
import gsap from "gsap";
import Image from "next/image";
       import React, { useRef, useState } from 'react'
        
        const Pages = () => {
            const [isActive,setIsActive] = useState({
                isActive1:true,
                isActive2:false,
                isActive3:false,
              }) 
            
              const  txtbloc = useRef<HTMLDivElement | null >(null)
              const  txtbloc1 = useRef<HTMLDivElement | null >(null)
              const  txtbloc2 = useRef<HTMLDivElement | null >(null)
            
              const  imagebloc = useRef<HTMLDivElement | null >(null)
              const  imagebloc1 = useRef<HTMLDivElement | null >(null)
              const  imagebloc2 = useRef<HTMLDivElement | null >(null)
            
            
            
              const tl = gsap.timeline()
              const gl = gsap.timeline()
            
            
            
              const nextSlide = () =>{
              
               
                  if(imagebloc.current && imagebloc.current.classList.contains("active")){
                    setIsActive({
                      isActive1:false,
                      isActive2:true,
                      isActive3:false,
                    })
            
                    tl.to(imagebloc.current, {
                      scale: 0,
                      duration:1,
                    })
                    .to(imagebloc1.current, {
                      scale: 1,
                      duration: 1,
                    },"-=0.2")
            
                    gl.to(txtbloc.current, {
                      
                      opacity: 0,
                      duration:0.4,
                      x:20,
                    }).to(txtbloc1.current, {
                      delay:0.4,
                      opacity: 1,
                      x:10,
                      duration:1
                    })
              
            
                }
                if(imagebloc1.current && imagebloc1.current.classList.contains("active")){
                  setIsActive({
                    isActive1:false,
                    isActive2:false,
                    isActive3:true,
                  })
            
                  tl.to(imagebloc1.current, {
                    scale: 0,
                    duration:1,
                  })
                  .to(imagebloc2.current, {
                    scale: 1,
                    duration: 1,
                  },"-=0.2")
            
                  gl.to(txtbloc1.current, {
                    opacity: 0,
                    duration:0.4,
                    x:20,
                  }).to(txtbloc2.current, {
                    delay:0.4,
                    opacity: 1,
                    x:10,
                    duration:1
                  })
            
                }
            
                if(imagebloc2.current && imagebloc2.current.classList.contains("active")){
                  setIsActive({
                    isActive1:true,
                    isActive2:false,
                    isActive3:false,
                  })
                  tl.to(imagebloc2.current, {
                    scale: 0,
                    duration:1,
                   
                  })
                  .to(imagebloc.current, {
                    scale: 1,
                    duration: 1,
                  },"-=0.2")
                  gl.to(txtbloc2.current, {
                      
                    opacity: 0,
                    duration:0.4,
                    x:20,
                  }).to(txtbloc.current, {
                    delay:0.4,
                    opacity: 1,
                    x:10,
                    duration:1
                  })
                }
            
                
            
              }
            
            
              const prevSlide = () =>{
                if(imagebloc.current && imagebloc.current.classList.contains("active")){
                  setIsActive({
                    isActive1:false,
                    isActive2:false,
                    isActive3:true,
                  })
            
                  tl.to(imagebloc.current, {
                    scale: 0,
                    duration:1,
                  })
                  .to(imagebloc2.current, {
                    scale: 1,
                    duration: 1,
                  },"-=0.2")
            
                  gl.to(txtbloc.current, {
                      
                    opacity: 0,
                    duration:0.4,
                    x:20,
                  }).to(txtbloc2.current, {
                    delay:0.4,
                    opacity: 1,
                    x:10,
                    duration:1
                  })
                }
                if(imagebloc1.current && imagebloc1.current.classList.contains("active")){
                  setIsActive({
                    isActive1:true,
                    isActive2:false,
                    isActive3:false,
                  })
                  tl.to(imagebloc1.current, {
                    scale: 0,
                    duration:1,
                  })
                  .to(imagebloc.current, {
                    scale: 1,
                    duration: 1,
                  },"-=0.2")
            
                  gl.to(txtbloc1.current, {
                      
                    opacity: 0,
                    duration:0.4,
                    x:20,
                  }).to(txtbloc.current, {
                    delay:0.4,
                    opacity: 1,
                    x:10,
                    duration:1
                  })
                }
            
                if(imagebloc2.current && imagebloc2.current.classList.contains("active")){
                  setIsActive({
                    isActive1:false,
                    isActive2:true,
                    isActive3:false,
                  })
            
                  tl.to(imagebloc2.current, {
                    scale: 0,
                    duration:1,
                  })
                  .to(imagebloc1.current, {
                    scale: 1,
                    duration: 1,
                  },"-=0.2")
                }
                gl.to(txtbloc2.current, {
                      
                  opacity: 0,
                  duration:0.4,
                  x:20,
                }).to(txtbloc1.current, {
                  delay:0.4,
                  opacity: 1,
                  x:10,
                  duration:1
                })
              }
            
            
            
            
            
            
            
          return (
            
      <section className="flex max-w-[1130px]  overflow-hidden py-4 w-full relative px-6 justify-center items-center">

      <div className='absolute  z-40 w-full flex justify-between items-center h-full'>

        <button onClick={()=>prevSlide()} className='p-4 mr-36 group hover:bg-red-500   rounded-xl flex justify-center items-center bg-gray-200 '>
        <svg xmlns="http://www.w3.org/2000/svg" className=" group-hover:text-white transition-all ease duration-300" viewBox="0 0 24 24" width={20} height={20} color={"#a3a1a1"} fill={"none"}>
    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </button>

        <button onClick={()=>nextSlide()} className='p-4 rounded-xl group hover:bg-red-500 flex justify-center items-center bg-gray-200 '>
        <svg xmlns="http://www.w3.org/2000/svg"  className=" group-hover:text-white transition-all ease duration-300" viewBox="0 0 24 24" width={20} height={20} color={"#a3a1a1"} fill={"none"}>
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </button>


      </div>



      <div className='flex justify-start items-start md:justify-center relative md:flex-row flex-col  gap-8 md:items-center w-full '>

              <div className='  flex md:pl-36 relative w-full md:w-1/2  h-auto md:px-0   justify-start md:justify-end items-start md:items-end '>

                <div ref={imagebloc} className={` ${isActive.isActive1 && "active"} scale-100 md:w-full basis-80  md:basis-full  origin-right md:origin-left  imagebloc  relative top-0 left-0   flex  justify-start md:justify-center items-center z-0  w-full  `}>

                <Image  src={woman1} alt="map" className='relative   z-20  top-0 left-0  h-[350px] md:h-[650px] object-cover '/>
                <Image  src={woman1} alt="map" className='absolute   z-10 left-[4%]    md:-left-[4%] h-[300px] md:h-[600px]   object-cover '/>
                <Image  src={woman1} alt="map" className='absolute z-0 left-[13%]     md:-left-[13%]  h-[220px] md:h-[500px]  object-cover '/>
                </div>  

              
                <div  ref={imagebloc1} className={`${isActive.isActive2 && "active"}  origin-right md:origin-left basis-20  md:basis-fulll  scale-0 absolute top-0 md:left-[28%]     imagebloc    flex justify-center items-center z-0  `}>

                <Image  src={man1} alt="map" className='relative  z-20  top-0 left-0 w-full  h-[350px] md:h-[650px] object-cover '/>
                <Image  src={man1} alt="map" className='absolute   z-10  left-[10%]  md:-left-[10%] h-[300px] md:h-[600px]  w-full  object-cover '/>
                <Image  src={man1} alt="map" className='absolute left-[24%] md:-left-[24%]  h-[220px] md:h-[500px] w-full object-cover '/>
                </div>  

                <div ref={imagebloc2} className={`${isActive.isActive3 && "active"} origin-right md:origin-left basis-20  md:basis-full    scale-0 absolute top-0 md:left-[28%]     imagebloc    flex justify-center items-center z-0  `}>

                <Image  src={man2} alt="map" className='relative  z-20  top-0 left-0 w-full  h-[350px] md:h-[650px] object-cover '/>
                <Image  src={man2} alt="map" className='absolute   z-10  left-[10%]  md:-left-[10%] h-[300px] md:h-[600px]  w-full  object-cover '/>
                <Image  src={man2} alt="map" className='absolute left-[24%] md:-left-[24%]  h-[220px] md:h-[500px] w-full object-cover '/>
                </div>  


              </div>
              <div className='flex flex-col gap-y-4 w-full md:w-1/2  justify-start items-start relative'>


                      <div ref={txtbloc} className={` txtbloc ${isActive.isActive1 && "active"}  opacity-100 relative top-0 left-0 flex flex-col gap-4 justify-start items-start w-full`}>

<h2 className='font-bold text-3xl  md:text-4xl max-w-lg text-balance '>{"The energy she brings to each lesson is amazing."}</h2>
<b className='font-bold'>{"Sara"}</b>
<span>{"English learner on HighCss"}</span>

</div>

                      <div ref={txtbloc1}    className={` txtbloc ${isActive.isActive2 && "active"}  opacity-0  absolute  top-0 left-0 flex flex-col gap-4 justify-start items-start w-full`}>

<h2 className='font-bold text-3xl  md:text-4xl max-w-lg text-balance '>{"Education is not just about knowledge, but also wisdom."}</h2>
<b className='font-bold'>{"Samuel"}</b>
<span>{"English learner on HighCss"}</span>

</div>

                    
                      <div ref={txtbloc2}  className={` txtbloc ${isActive.isActive3 && "active"}  opacity-0 absolute top-0 left-0  flex flex-col gap-4 justify-start items-start w-full`}>

<h2 className='font-bold text-3xl  md:text-4xl max-w-lg text-balance '>{"Lighting the way to a brighter future through education."}</h2>
<b className='font-bold'>{"Ousmans"}</b>
<span>{"English learner on HighCss"}</span>

</div>
                
  





                <div className='w-36  z-50  relative  h-16 gap-x-4  flex  items-center'>

                  <div className={`h-5 w-5 ${isActive.isActive1 ?  "bg-red-500 rounded-none" :"bg-gray-200 rounded-full"}   rounded-lg`}>
                  </div>
                  <div className={`h-5 w-5 ${isActive.isActive2 ?  "bg-red-500 rounded-none" :"bg-gray-200 rounded-full"}   rounded-lg`}>
                  </div>
                  <div className={`h-5 w-5 ${isActive.isActive3 ?  "bg-red-500 rounded-none" :"bg-gray-200 rounded-full"}   rounded-lg`}>
                  </div>

                </div>

       

              </div>

          </div>


      </section>

          )
        }
        
        export default Pages