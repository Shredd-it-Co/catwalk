import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext, StyleNameContext } from '../overview.jsx';

function StyleSelector({ stylePics, currentProductStyle }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const StyleNameContextData = useContext(StyleNameContext);
  let currentStyleIdx;
  let setCurrentStyleIdx;
  let currentStyleName;
  let setCurrentStyleName;
  if (StyleIdxContextData !== undefined) {
    ({ currentStyleIdx, setCurrentStyleIdx } = StyleIdxContextData);
    ({ currentStyleName, setCurrentStyleName } = StyleNameContextData);
  }
  const thumbnailClicked = (e, index) => {
    if (currentProductStyle !== null) {
      setCurrentStyleIdx(index);
      setCurrentStyleName(currentProductStyle.results[index].name);
    }
  };


  return (
    <div className='styleSelector'>
      <div className='styleHeadLine'>
        {`Style > ${currentStyleName}`}
      </div>
      <div className='styleThumbnail'>
        {stylePics
          ? stylePics.map((stylePic, index) => {
            return (
            <span key={index} className='thumbnail' onClick={ () => thumbnailClicked(event, index) }>
              <img className={`tn${index}`} src={stylePic} style={{ width: '150%', height: '150%' }}></img>
                {index === currentStyleIdx ? <span className={`far fa-check-circle checkIcon Icon${index}` }></span> : null}
            </span>
            );
          })
          : <span>None</span>}
      </div>

    </div>
  );
};

StyleSelector.propTypes = {
  stylePics: PropTypes.array,
  currentStyleIdx: PropTypes.number,
  currentProductStyle: PropTypes.object
};

export default StyleSelector;