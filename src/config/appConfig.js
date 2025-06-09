// Файл конфигурации с проблемами форматирования
export const appConfig = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://api.production.example.com'
    : 'https://api.development.example.com',
  
  apiVersion: 'v1',
  
  auth: {
    tokenStorageKey: 'app_auth_token',
    refreshTokenStorageKey: 'app_refresh_token',
    tokenExpiryKey: 'app_token_expiry',
    sessionTimeout: 30 * 60 * 1000, // 30 минут
  },
  
  features: {
    darkMode: true,
    notifications: true,
    analytics: process.env.NODE_ENV === 'production',
    experimentalFeatures: process.env.NODE_ENV !== 'production',
  },
  
  pagination: {defaultPageSize: 10,maxPageSize: 100},
  
  timeouts: {
    apiRequest: 30000,
    longPolling: 60000,
    animation: 300,
  },
  
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    enabled: true,
    remote: process.env.NODE_ENV === 'production',
  },
  
  socialLogin: {
    google: {enabled: true,clientId: 'google-client-id'},
    facebook: {enabled: true,appId: 'facebook-app-id'},
    twitter: {enabled: false,apiKey: 'twitter-api-key'},
  }
};

export const getApiUrl = (endpoint) => {
  const baseUrl = appConfig.apiUrl;
  const version = appConfig.apiVersion;
  
  return `${baseUrl}/${version}/${endpoint}`.replace(/\/+/g, '/').replace('://', '://');
};

export const getFeatureFlag = (featureName) => {
  return appConfig.features[featureName] || false;
};

export default appConfig;
