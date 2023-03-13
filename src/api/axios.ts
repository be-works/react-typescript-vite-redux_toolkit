import axios, { AxiosRequestConfig } from 'axios';

// define common config for Axios
const instanceAxios = {
  baseURL: process.env.API_USER,
};

const axiosConfig = axios.create(instanceAxios);

const request = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfig({
    method: method,
    url: url,
    data: data,
    ...rest,
  });

const requestToken = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  return axiosConfig({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...rest,
  });
};

const axiosConfigInter = axios.create(instanceAxios);

// Add a request interceptor
axiosConfigInter.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosConfigInter.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const requestInter = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfigInter({
    method: method,
    url: url,
    data: data,
    ...rest,
  });

const requestInterToken = ({
  method,
  url,
  data,
  ...rest
}: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  return axiosConfigInter({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...rest,
  });
};

export { request, requestToken, requestInter, requestInterToken };
