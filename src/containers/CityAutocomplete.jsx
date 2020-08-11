import React from 'react';
import axios from 'axios';
import { cityList } from '../cityList';
import { useHistory } from 'react-router-dom';
import { Select } from 'semantic-ui-react';
export const CityAutocomplete = () => {
  const history = useHistory();

  let sendRequest = (status, value) => {
    let setValue = value.value;
    history.push(`/${setValue}`);
    axios
      .get(
        status == 'current'
          ? `http://api.openweathermap.org/data/2.5/weather?q=${setValue}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`
          : `http://api.openweathermap.org/data/2.5/weather?q=${setValue}&units=metric&appid=e70b3d12e10d1735e93d7770e126a258`,
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
      placeholder='Select a city'
      onChange={(e, { value }) => sendRequest('choosen_city', { value })}
      options={cityList}
      defaultValue={false}
    >
      {/*{cityList.map((item, index) => {*/}
      {/*  if (item.city) {*/}
      {/*    // console.log(topicId == item.city, item.city, topicId);*/}
      {/*    return (*/}
      {/*      <option*/}
      {/*        // selected={topicId == item.city}*/}
      {/*        key={index}*/}
      {/*        value={item.city}*/}
      {/*      >*/}
      {/*        {item.city}*/}
      {/*      </option>*/}
      {/*    );*/}
      {/*  }*/}
      {/*})}*/}
    </Select>
  );
};
