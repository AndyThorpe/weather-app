
export const FETCH_DATA_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SAVE_SEARCH = 'SAVE_SEARCH';


export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataError = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const saveSearch = result => ({
  type: SAVE_SEARCH,
  payload: { result }
});


export function fetchWeather(location, existing) {
  const appId = 'ca7cd5aebf7e123fb1ec131dc24e3431';
    return dispatch => {
      dispatch(fetchDataBegin());
      return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + appId )
        .then(handleErrors)
        .then(response => response.json())  
        .then(json => {
          let data = json;
          console.log(data);
          let result = {
            location: data.name,
            weather: data.weather,
            temp: data.main.temp
          };

          if(!(existing instanceof Array)){
            existing = [existing];
         }
          existing.push(result);
          dispatch(fetchDataSuccess(existing));
          return existing;
        })
        .catch(error => dispatch(fetchDataError(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    console.log('error');

    return response;
  }
