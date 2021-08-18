import React from 'react';
import { Categories, SortPopup } from "../components";
import ShavaBlock from "../components/ShavaBlock";
import { useSelector, useDispatch } from "react-redux";


function Home() {

  const {items} = useSelector(({shavas, filters}) => {
    return {
      items: shavas.items,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            'Куринная',
            'Говяжья',
            'Вегатарианская',
            'Острая',
            'Особая',
          ]}/>
        <SortPopup
          items={[
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'},
            {name: 'алфавиту', type: 'alphabet'},
          ]}/>
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