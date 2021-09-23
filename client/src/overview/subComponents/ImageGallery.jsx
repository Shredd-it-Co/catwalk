import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../overview.jsx';

export default function ImageGallery({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const stylePics = [];
  const previewPics = [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPreviewIdx, setCurrentPreviewIdx] = useState(0);
  let slideLength = 0;
  let currentStyleIdx;
  // let setCurrentStyleIdx;
  if (StyleIdxContextData && currentProductStyles) {
    ({ currentStyleIdx } = StyleIdxContextData);
    currentProductStyles.results[currentStyleIdx].photos.forEach((photo) => {
      stylePics.push(photo.url);
    });
    currentProductStyles.results[currentStyleIdx].photos.forEach((photo) => {
      previewPics.push(photo.thumbnail_url);
    });
    slideLength = stylePics.length;
  }

  const changeSlide = (event, handle) => {
    if (handle === 'next') {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      setCurrentPreviewIdx(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    } else if (handle === 'prev') {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      setCurrentPreviewIdx(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }
  };

  const previewClicked = (event, index) => {
    setCurrentPreviewIdx(index);
    setCurrentSlide(index);
  };

  useEffect(() => {
    setCurrentSlide(0);
    setCurrentPreviewIdx(0);
  }, [currentStyleIdx]);

  return (
    <div className='imageGallery'>
      <div className='previewContainer'>
        {previewPics.map((previewPic, index) => {
          return (
            <span key={'previewPic' + index} className='previewBox' onClick={() => previewClicked(event, index)}
            style={{
              border: index === currentPreviewIdx ? '2px solid white ' : '2px dashed black '
            }}>
              <img src={previewPic} className='preview'></img>
            </span>
          );
        })}
      </div>

      { currentSlide === 0
        ? null
        : <button className={ 'fas fa-chevron-left left-arrow arrow'} onClick={ () => changeSlide(event, 'prev') } />}
      { currentSlide === slideLength - 1
        ? null
        : <button className={ 'fas fa-chevron-right right-arrow arrow'} onClick={ () => changeSlide(event, 'next') } />}
      {stylePics.map((stylePic, index) => {
        return (
          <div key={'stylePic' + index} className={index === currentSlide ? 'slide-active' : 'slide'}>
             {index === currentSlide && (<img src={stylePic} alt='style image' className='image' />)}
          </div>
        );
      })}
    </div>
  );
};

ImageGallery.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object
};