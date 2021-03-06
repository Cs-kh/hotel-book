import React ,{useState , useEffect} from 'react'
import {Link , useLocation} from 'react-router-dom'
import img10 from '../assets/card/10.jpg'
import img11 from '../assets/card/11.jpg'
import {AiFillHeart} from 'react-icons/ai'
const News = () => {
    const [activeTab, setActiveTab] = useState('featured')
    const location = useLocation();
    useEffect(() => {
     if (location.pathname === '/news/featured') {
        setActiveTab('featured')
     }else if (location.pathname === '/news/popular') {
        setActiveTab('popular')
     }
     else{
      setActiveTab('featured')
     }
    }, [location.pathname])
    return (
        <div className='mb-12'>
            <div className="w-full mx-auto">
                <div className="my-8 px-6">
                    <h1 className='text-3xl font-semibold pb-4'>The title of news</h1>
                    <ul className='flex gap-x-6'>
                        <li><Link to='/news/featured' className={`py-1  ${activeTab === 'featured' ? ' opacity-80' :'opacity-50'}`} onClick={() => setActiveTab('featured')}>Featured</Link></li>
                        <li><Link to='/news/popular' className={`py-1  ${activeTab === 'popular' ? ' opacity-80' :'opacity-50'}`} onClick={() => setActiveTab('popular')}>Popular</Link></li>
                    </ul>
                </div>
                {/* --------card section ----------- */}
                <div className="flex gap-x-4 items-center justify-center md:gap-x-10 flex-wrap gap-y-8">
                    {/* -------- card --------- */}
                    <div className="w-[300px] lg:w-[400px] xl:w-[500px] h-96 object-contain rounded-md relative  flex items-end"> 
                    <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                            <img src={img10} className='w-full h-full object-cover rounded-md ' alt="" />
                          <div className="absolute pl-10 text-white ">
                              <h1 className='text-2xl'>Here is the name of the news</h1>
                              <p className='text-sm opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                              <div className="flex gap-x-6  items-center my-6">
<div className="flex gap-x-3">
    <img src={img11} className='rounded-full w-10 h-10' alt="" />
    <div className="">
    <h6 className='text-sm md:text-base'>Danil Kozlove</h6>
    <span className='opacity-90 text-xs'>05 Jan 2020</span>
    </div>
</div>
<div className="">
    <AiFillHeart className='text-3xl text-white'/>
</div>
                              </div>
                          </div>
                        
                    </div>
                    {/* -------- end of card-------------- */}
                    {/* -------- card --------- */}
                    <div className="w-[300px] lg:w-[400px] xl:w-[500px] h-96 object-contain rounded-md relative  flex items-end"> 
                    <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                            <img src={img10} className='w-full h-full object-cover rounded-md ' alt="" />
                          <div className="absolute pl-10 text-white ">
                              <h1 className='text-2xl'>Here is the name of the news</h1>
                              <p className='text-sm opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                              <div className="flex gap-x-6  items-center my-6">
<div className="flex gap-x-3">
    <img src={img11} className='rounded-full w-10 h-10' alt="" />
    <div className="">
    <h6 className='text-sm md:text-base'>Danil Kozlove</h6>
    <span className='opacity-90 text-xs'>05 Jan 2020</span>
    </div>
</div>
<div className="">
    <AiFillHeart className='text-3xl text-white'/>
</div>
                              </div>
                          </div>
                        
                    </div>
                    {/* -------- end of card-------------- */}
                    {/* -------- card --------- */}
                    <div className="w-[300px] lg:w-[400px] xl:w-[500px] h-96 object-contain rounded-md relative  flex items-end"> 
                    <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                            <img src={img10} className='w-full h-full object-cover rounded-md ' alt="" />
                          <div className="absolute pl-10 text-white ">
                              <h1 className='text-2xl'>Here is the name of the news</h1>
                              <p className='text-sm opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                              <div className="flex gap-x-6  items-center my-6">
<div className="flex gap-x-3">
    <img src={img11} className='rounded-full w-10 h-10' alt="" />
    <div className="">
    <h6 className='text-sm md:text-base'>Danil Kozlove</h6>
    <span className='opacity-90 text-xs'>05 Jan 2020</span>
    </div>
</div>
<div className="">
    <AiFillHeart className='text-3xl text-white'/>
</div>
                              </div>
                          </div>
                        
                    </div>
                    {/* -------- end of card-------------- */}
                    {/* -------- card --------- */}
                    <div className="w-[300px] lg:w-[400px] xl:w-[500px] h-96 object-contain rounded-md relative  flex items-end"> 
                    <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                            <img src={img10} className='w-full h-full object-cover rounded-md ' alt="" />
                          <div className="absolute pl-10 text-white ">
                              <h1 className='text-2xl'>Here is the name of the news</h1>
                              <p className='text-sm opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                              <div className="flex gap-x-6  items-center my-6">
<div className="flex gap-x-3">
    <img src={img11} className='rounded-full w-10 h-10' alt="" />
    <div className="">
    <h6 className='text-sm md:text-base'>Danil Kozlove</h6>
    <span className='opacity-90 text-xs'>05 Jan 2020</span>
    </div>
</div>
<div className="">
    <AiFillHeart className='text-3xl text-white'/>
</div>
                              </div>
                          </div>
                        
                    </div>
                    {/* -------- end of card-------------- */}
                 
                </div>
                {/* --------end of card section ---------- */}
            </div>
        </div>
    )
}

export default News
