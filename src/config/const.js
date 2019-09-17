const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8001/products' : 'https://your.server.url';

export default baseURL;
