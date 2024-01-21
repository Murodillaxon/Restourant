import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: '20px',
    height: '430px',
    width: '800px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
};
const sliderBox = {
    height: '430px',
    width: '800px',
    borderRadius: '20px'
}
const Slider = () => (
    <Carousel autoplay style={sliderBox}>
        <div>
            <img src='https://jumanji.uz/images/carousel/N1jhUXKM.jpg' style={contentStyle}></img>
        </div>
        <div>
            <img src='https://jumanji.uz/images/carousel/YOi5B28j.jpg' style={contentStyle}></img>
        </div>
        <div>
            <img src='https://jumanji.uz/images/carousel/NyazTFFr.jpg' style={contentStyle}></img>
        </div>
        <div>
            <img src='https://jumanji.uz/images/carousel/nrsl8Yhv.jpg' style={contentStyle}></img>
        </div>
    </Carousel>
);
export default Slider;
