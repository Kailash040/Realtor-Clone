// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwipe mt-10 h-40 mb-10 w-[90%]" >
        <SwiperSlide><img src="https://images.lawpath.com.au/2019/07/stencil.blog-post-feature-15.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyamin-mellish-1396122.jpg&fm=jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
