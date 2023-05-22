import React, { useState } from 'react';

import { Icons, MenuDropDown } from '../../components';

const dropDownArray = [
  { text: 'Страхование для Шенгена', link: '' },
  { text: 'Страхование в России', link: '' },
  { text: 'Горнолыжная страховка', link: '' },
  { text: 'Годовая страховка', link: '' },
];

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const onClickDropDown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDropDown(!isDropDown);
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="container">
        <a href=" " className="header__logo">
          <Icons.Logo />
        </a>

        <nav className="header-menu">
          <div className="header-menu__item-wrapper">
            <a
              onClick={onClickDropDown}
              className={`header-menu__item ${
                isDropDown && 'header-menu__item--svg--rotate'
              }`}
              href=" "
            >
              Продукты
              <Icons.Arrow color="#fff" />
            </a>

            <div className="header-menu__dropdown">
              {isDropDown &&
                dropDownArray.map((item) => (
                  <MenuDropDown text={item.text} link={item.link} />
                ))}
            </div>
          </div>

          <a className="header-menu__item" href=" ">
            Отзывы
          </a>

          <a className="header-menu__item" href=" ">
            Партнерам
          </a>
        </nav>
        <button className="header__subscribe-button">
          <Icons.Mail />
          <span>Скидки</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
