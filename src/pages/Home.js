import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopup } from "../components";
import ShavaBlock from "../components/ShavaBlock/ShavaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchShavas } from "../redux/actions/shavas";
import ShavaLoadingBlock from "../components/ShavaBlock/ShavaLoadingBlock";


const categoryNames = [
  'Классические',
  'Вегетарианские',
  'Мясные',
  'Острые',
  'Особые',
];

const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({shavas}) => shavas.items);
  const isLoaded = useSelector(({shavas}) => shavas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  useEffect(() => {
    dispatch(fetchShavas(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
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
            : Array(10)
              .fill(0)
              .map((_, index) =>
                <ShavaLoadingBlock
                  key={index}
                />)
        }
      </div>
    </div>
  );
}

export default Home;