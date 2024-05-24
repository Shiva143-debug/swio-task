import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './App.css';

const Courosal = () => {
    return (
        <Splide
        options={{
          perPage: 4,
          perMove: 1,
          rewind: true,
          gap: '1rem',
          breakpoints: {
            600: {
              perPage: 1,
            },
            800: {
                perPage: 2,
              },
            1080: {
                perPage: 3,
              },
             1200:{
                perPage: 4,

             }
          },
        }}
        aria-label="My Favorite Images"
      >
            <SplideSlide>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg" alt="Image 1"  className='img1' />
            </SplideSlide>
            <SplideSlide>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg" alt="Image 2" className='img1'/>
            </SplideSlide>
            <SplideSlide>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg" alt="Image 2" className='img1'/>
            </SplideSlide>
            <SplideSlide>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg" alt="Image 2" className='img1'/>
            </SplideSlide>
            <SplideSlide>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg" alt="Image 2" className='img1' />
            </SplideSlide>

            
        </Splide>
    )
}
export default Courosal