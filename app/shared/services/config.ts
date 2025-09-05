export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  
  TIMEOUT: 10000, 
  
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, 
  
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  CACHE: {
    STALE_TIME: 2 * 60 * 1000, 
    GC_TIME: 5 * 60 * 1000,   
  },
} as const;

export type Environment = 'development' | 'staging' | 'production';

export const getEnvironmentConfig = (env: Environment) => {
  switch (env) {
    case 'development':
      return {
        baseURL: 'http://localhost:3000/api',
        timeout: 15000,
        retryAttempts: 1,
      };
    case 'staging':
      return {
        baseURL: 'https://staging-api.example.com',
        timeout: 10000,
        retryAttempts: 2,
      };
    case 'production':
      return {
        baseURL: 'https://api.example.com',
        timeout: 8000,
        retryAttempts: 3,
      };
    default:
      return API_CONFIG;
  }
};
