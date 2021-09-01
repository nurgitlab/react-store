import React, { useState } from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import Button from "../Button";


function ShavaBlock({
                      id,
                      name,
                      imageUrl,
                      price,
                      types,
                      sauces,
                      onClickAddShava,
                      addedCount
                    }) {
  const availableTypes = ['обычная', 'двойная'];
  const availableSauces = ['майонезный', 'острый', 'фирменный'];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSauce, setActiveSauce] = useState(sauces[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSauce = (index) => {
    setActiveSauce(index);
  };

  const onAddShava = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      sauce: availableSauces[activeSauce],
      type: availableTypes[activeType],
    };
    onClickAddShava(obj);
  };

  return (
    <div className="shava-block">
      <img
        className="shava-block__image"
        src={imageUrl}
        alt="Shava"
      />
      <h4 className="shava-block__title">{name}</h4>
      <div className="shava-block__selector">
        <ul>
          {availableTypes.map((type, index) =>
            (<li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>))}
        </ul>
        <ul>
          {availableSauces.map((sauce, index) =>
            (<li
              key={sauce}
              onClick={() => onSelectSauce(index)}
              className={classNames({
                active: activeSauce === index,
                disabled: !sauces.includes(index),
              })}
            >
              {sauce}
            </li>))}
        </ul>
      </div>
      <div className="shava-block__bottom">
        <div className="shava-block__price">от {price} ₽</div>
        <Button
          onClick={onAddShava}
          className="button--add"
          outline
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

ShavaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sauces: PropTypes.arrayOf(PropTypes.number),
  onAddShava: PropTypes.func,
  addedCount: PropTypes.number,
};

ShavaBlock.defaultProps = {
  name: 'Default',
  imageUrl: 'http://arenda-info.by/wp-content/uploads/2021/01/1535899253_404-image-2x-1024x506.png',
  price: 0,
  types: [],
  sauces: [],
};

export default ShavaBlock;