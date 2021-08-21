import React, { Component, useCallback, useEffect } from 'react';
import { Categories, SortPopup } from "../components";
import ShavaBlock from "../components/ShavaBlock/ShavaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchShavas } from "../redux/actions/shavas";
import axios from "axios";
import ShavaLoadingBlock from "../components/ShavaBlock/ShavaLoadingBlock";


const categoryNames = [
  'Классические',
  'Вегетарианские',
  'Мясные',
  'Острые',
  'Особые',
];

const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({shavas}) => shavas.items);
  const isLoaded = useSelector(({shavas}) => shavas.isLoaded);

  useEffect(() => {
    dispatch(fetchShavas());
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems}/>
      </div>
      <h2 className="content__title">Все шаурмы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map(obj => (
                <ShavaBlock
                  key={obj.id}
                  isLoading={true}
                  {...obj}
                />
              ))
            :Array(10).fill(<ShavaLoadingBlock/>)
        }
      </div>
    </div>
  );
}

export default Home;