import React from 'react';

import { Icons } from '../../components';

interface IProps {
  title: string;
  subtitle?: string;
  count: number;
  id: number;
}

const dropdownList: IProps[] = [
  {
    title: 'Дети до 3-х лет',
    count: 0,
    id: 1,
  },
  {
    title: 'Дети',
    subtitle: 'от 4 до 17 лет',
    count: 0,
    id: 2,
  },
  {
    title: 'Взрослые',
    subtitle: 'от 18 до 69 лет',
    count: 0,
    id: 3,
  },
  {
    title: 'Взрослые',
    subtitle: 'от 70 до 79 лет',
    count: 0,
    id: 4,
  },
];

const PeopleCountDropdown: React.FC = () => {
  return (
    <div className="people-count-dropdown">
      {dropdownList.map((item) => (
        <div className="people-count-dropdown__wrapper" key={item.id}>
          <div>
            <span className="people-count-dropdown__title">{item.title}</span>
            <span className="people-count-dropdown__subtitle">
              {item.subtitle}
            </span>
          </div>
          <div className="people-count-dropdown__counter">
            <button>
              <Icons.Minus />
            </button>
            <span className="people-count-dropdown__count">{item.count}</span>
            <button>
              <Icons.Plus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCountDropdown;
