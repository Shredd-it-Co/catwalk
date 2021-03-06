import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyleIdxContext } from '../../overview.jsx';
import { SizeContext } from './AddToCart.jsx';

export default function QuantitySelector({ currentProductStyles }) {
  const StyleIdxContextData = useContext(StyleIdxContext);
  const { size } = useContext(SizeContext);
  const [open, setOpen] = useState(false);

  let currentStyleIdx;
  let currentSizeQuantity = 1;

  if (StyleIdxContextData) {
    ({ currentStyleIdx } = StyleIdxContextData);
    if (currentProductStyles) {
      for (const key in currentProductStyles.results[currentStyleIdx].skus) {
        if (currentProductStyles.results[currentStyleIdx].skus[key].size === size) {
          currentSizeQuantity = currentProductStyles.results[currentStyleIdx].skus[key].quantity;
        }
      }
    }
  }

  const wrapperRef2 = useRef(null);
  useOutsideAlerter(wrapperRef2);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && open) {
          setOpen(!open);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, open]);
  }

  return (
    <div className="quantitySelector" onClick={() => setOpen(!open)} ref={wrapperRef2}>
      <span className='fas fa-angle-down' >
      </span>
      {
      <Dropdown
        currentSizeQuantity={currentSizeQuantity}
        open={open}
        setOpen={setOpen}
      />}
    </div>
  );
};

function Dropdown({ currentSizeQuantity, open, setOpen }) {
  const currentQuantityArr = [];
  for (let i = 1; i <= currentSizeQuantity; i++) {
    currentQuantityArr.push(i);
  }

  return (
    <div className={`dropdown ${open ? 'dropdown-active' : null}`} >
      {currentQuantityArr.length
        ? currentQuantityArr.map((number, index) => {
          return (
            <DropdownItem
              key={'dropindex' + index}
              number={number}
              open={open}
              setOpen={setOpen}
            />
          );
        })
        : null
      }
    </div>
  );
}


function DropdownItem({ number, open, setOpen }) {
  return (
    <span className=" dropdownItem" onClick={() => setOpen(!open)}>{number}</span>
  );
}

QuantitySelector.propTypes = {
  currentStyleIdx: PropTypes.number,
  currentProductStyles: PropTypes.object,
  currentSizeQuantity: PropTypes.number,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

Dropdown.propTypes = {
  currentQuantityInfo: PropTypes.object,
  currentSizeQuantity: PropTypes.number,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

DropdownItem.propTypes = {
  currentQuantity: PropTypes.object,
  number: PropTypes.number,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};
