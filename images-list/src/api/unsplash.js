import axios from 'axios';

import { unsplashConfig } from '../constants/constants';

export default axios.create({
  baseURL: unsplashConfig.baseUrl,
  headers: {
    'Authorization': `Client-ID ${ unsplashConfig.accessKey }`,
  }
});
