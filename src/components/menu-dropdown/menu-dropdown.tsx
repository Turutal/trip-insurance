import React from 'react';

type DropDownType = {
  text: string;
  link: string;
};

const MenuDropDown: React.FC<DropDownType> = ({ text, link }) => {
  return (
    <div className="menu-drop-down">
      <a href={link}>{text}</a>
    </div>
  );
};

export default MenuDropDown;
