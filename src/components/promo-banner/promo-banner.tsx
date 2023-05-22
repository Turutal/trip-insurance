import React, { useState } from 'react';

import { Icons, DatePicker, PeopleCountDropdown } from '../../components';
const PromoBanner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="promo-banner container">
      <h1 className="promo-banner__title">Страхование путешественников</h1>
      <h2 className="promo-banner__subtitle">
        Полис, который действительно работает
      </h2>

      <form action="" className="search-form">
        <div className="search-form__wrapper">
          <input
            className="search-form__text search-form__block"
            type="text"
            placeholder="Куда едем?"
            minLength={3}
            maxLength={25}
          />

          <DatePicker value={startDate} setValue={setStartDate} />

          <DatePicker value={endDate} setValue={setEndDate} />

          <div className="search-form__count-wrapper">
            <div
              className={`search-form__count search-form__block ${
                showDropdown && 'search-form__count--svg--rotate'
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>1 человек</span>
              <Icons.Arrow color="#5200D9" />
            </div>

            {showDropdown && (
              <div className="search-form__count-dropdown">
                <PeopleCountDropdown />
              </div>
            )}
          </div>
        </div>

        <button className="search-form__submit">Узнать стоимость</button>
      </form>
    </section>
  );
};

export default PromoBanner;
