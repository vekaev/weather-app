import React from 'react';
import axios from 'axios';
import { Select } from 'antd';
import { cityList } from '../cityList';
import { Redirect, useHistory } from 'react-router-dom';
const { Option } = Select;

export const CityAutocomplete = () => {
  const history = useHistory();

  let sendRequest = (value) => {
    console.log(value);
    history.push(`/${value}`);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=e70b3d12e10d1735e93d7770e126a258`,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Select
      showSearch
      style={{ width: 400 }}
      placeholder='Select capital'
      optionFilterProp='children'
      onChange={sendRequest}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {cityList.map((item, index) => {
        if (item.city) {
          return (
            <Option key={index} value={item.city}>
              {item.city}
            </Option>
          );
        }
      })}
    </Select>
  );
};
