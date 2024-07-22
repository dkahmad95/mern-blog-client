
const apiUrl = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  // const baseURL = "http://localhost:5000/api/"
  return baseURL
}

export default apiUrl;