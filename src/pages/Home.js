import React from 'react';
import { Categories, SortPopup } from "../components";
import ShavaBlock from "../components/ShavaBlock";


function Home({items}) {
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
            'популярности',
            'цене',
            'алфавиту',
          ]}/>
      </div>
      <h2 className="content__title">Все шаурмы</h2>
      <div className="content__items">
        {
          items.map(obj => (
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