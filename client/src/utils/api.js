const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

export const apiFetch = async (endpoint, { token, headers = {}, ...options } = {}) => {
  const finalHeaders = {
    "Content-Type": "application/json",
    ...headers
  };

  if (token) {
    finalHeaders.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: finalHeaders
  });

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message = isJson ? data?.error || data?.message : data;
    throw new Error(message || "Error al comunicarse con el servidor");
  }

  return data;
};

export const getApiBaseUrl = () => API_BASE_URL;
