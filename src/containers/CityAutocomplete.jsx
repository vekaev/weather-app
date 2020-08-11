import React from 'react';
import axios from 'axios';
import { Select } from 'antd';
import { cityList } from '../cityList';
import { useHistory, useParams } from 'react-router-dom';
const { Option } = Select;

export const CityAutocomplete = () => {
  const history = useHistory();
  let { topicId } = useParams();

  console.log(history);
  let sendRequest = (status, value) => {
    console.log(value);
    history.push(`/${value}`);
    axios
      .get(
        status == 'current'
          ? `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`
          : `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`,
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
      defaultValue={topicId ? topicId : ''}
      onChange={() => sendRequest('choosen_city', value)}
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
