import { useState } from 'react';
import Slider from 'react-slick';
import './ProductSlider.css';
import { BarbequeImages, Garden, Restaurant, Trail } from '../../../Images';

export default function ProductSlider() {
    const sliderDetails = [
        {
            images: BarbequeImages,
            text: "Barbeque"
        },
        {
            images: Garden,
            text: "Garden"
        },
        {
            images: Restaurant,
            text: "Restaurant"
        },
        {
            images: Trail,
            text: "Trail"
        }
    ]
    return (<div className='imageGalleryContainer'> {sliderDetails.map((sliderDetails) => <ProductSliderSingle sliderDetails={sliderDetails} />)}</div>)
}
const ProductSliderSingle = ({ sliderDetails }: any) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const { images, text } = sliderDetails;
    return (<div className='galleryCol'>

        <h3 className="cardTitle"> {text}</h3>
        <Slider asNavFor={nav2} ref={(slider1: any) => setNav1(slider1)} >
            {images.map((image: any) => {
                return (
                    <div>   <div className='productImage' key={image} style={{ backgroundImage: `url(${image})` }} /></div>
                )
            })
            }
        </Slider>
        <Slider
            asNavFor={nav1}
            ref={(slider2: any) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
        >
            {/* <div className='thumbContainer'> */}
            {images.map((image: any) => {
                return (
                    <div >   <div className='thumb' key={image} style={{ backgroundImage: `url(${image})` }} /></div>
                )
            })
            }
            {/* </div> */}
        </Slider>
    </div>
    );
}

// const ProductSliderItem = ({ images }: any) => {
//     return (<>
//         <div>
//             <h3>1a</h3>
//         </div>
//         <div>
//             <h3>1a</h3>
//         </div>
//         {images.map((image: any) => {
//             return (
//                 <div>   <div className='productImage' key={image} style={{ backgroundImage: `url(${image})` }} /></div>
//             )
//         })
//         }
//     </>)
// }
