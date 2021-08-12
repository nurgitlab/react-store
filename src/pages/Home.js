import React from 'react';
import { Categories, SortPopup } from "../components";


function Home() {
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
        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li>обычная</li>
              <li className="active">двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>

        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>


        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>

        <div className="shava-block">
          <img
            className="shava-block__image"
            src="https://smakfoodcourt.ru/wp-content/uploads/2019/07/%D1%8Bshaurmavsurnom-768x512.jpg"
            alt="Shava"
          />
          <h4 className="shava-block__title">Шаурма уйгурская</h4>
          <div className="shava-block__selector">
            <ul>
              <li className="active">обычная</li>
              <li>двойная</li>
            </ul>
            <ul>
              <li className="active">майонез
              </li>
              <li>соус острый</li>
              <li>соус фирменный</li>
            </ul>
          </div>
          <div className="shava-block__bottom">
            <div className="shava-block__price">от 100 ₽</div>
            <div className="button button--outline button--add">
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
              <i>2</i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;