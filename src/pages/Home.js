import React, { useCallback } from 'react';
import { Categories, SortPopup } from "../components";
import ShavaBlock from "../components/ShavaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";


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
]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({shavas}) => shavas.items);

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
          items && items.map(obj => (
            <ShavaBlock
              key={obj.id}
              {...obj}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Home;