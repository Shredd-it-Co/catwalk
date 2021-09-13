import React from 'react';

interface CarouselCardProps {
  category: string,
  title: string,
}

const cardStyle = {
  display: 'inline-block',
  width: '150px',
  height: '240px',
  overflow: 'hidden'
};

const imageStyle: Record<string, unknown> = {
  height: '150px',
  width: 'auto',
  objectFit: 'contain',
  overflow: 'hidden'
};

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return <div style={cardStyle}>
    <img style={imageStyle} src="https://i.kym-cdn.com/photos/images/newsfeed/000/920/899/715.jpg" />
    <p>{props.category}</p>
    <p>{props.title}</p>
  </div>;
}

export default CarouselCard;
