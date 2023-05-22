import React from 'react';
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import { Icons } from '../../components';

type DatePickerProps = {
  value: string | Date;
  setValue: any;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ value, setValue }) => {
  return (
    <div>
      <DatePicker
        onChange={(date: any) => setValue(date)}
        value={value}
        locale={'ru-Ru'}
        clearIcon={null}
        calendarIcon={<Icons.Calendar />}
        format="dd.MM.yyyy"
      />
    </div>
  );
};

export default CustomDatePicker;
