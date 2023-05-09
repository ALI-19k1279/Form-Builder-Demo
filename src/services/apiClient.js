import axios from "axios";

export const BuildMode = {
  BUILD_MODE_DEV: "dev",
  BUILD_MODE_QA: "qa",
  BUILD_MODE_STAGING: "staging",
  BUILD_MODE_PROD: "prod",
};

export class AppEnvironment {
  showEvironmentSelector = false;
  static buildMode = null;
  static config = {};
  static versionString = "";
  static validVersion = "";
  static configure(config = {}) {
    AppEnvironment.buildMode = config.BUILD_MODE;
    AppEnvironment.config = config;
  }
}

export const apiClient = () => {
  //   const baseUrl = AppEnvironment.config.baseURL;
  const baseUrl = "http://localhost:4001";
  //   const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  const token = null;
  const defaultOptions = {
    headers: {
      Authorization: token ? `Bearer ${token || null}` : "",
      "Content-Type": "application/json",
    },
  };

  const imageUploadHeaders = {
    headers: {
      Authorization: token ? `Bearer ${token || null}` : "",
      "Content-Type": "multipart/form-data",
    },
  };

  return {
    get: (url, options = {}) =>
      axios.get(`${baseUrl}${url}`, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(`${baseUrl}${url}`, data, { ...defaultOptions, ...options }),
    uploadImage: (url, data, options = {}) =>
      axios.post(`${baseUrl}${url}`, data, {
        ...imageUploadHeaders,
        ...options,
      }),
    put: (url, data, options = {}) =>
      axios.put(`${baseUrl}${url}`, data, { ...defaultOptions, ...options }),
    patch: (url, data, options = {}) =>
      axios.patch(`${baseUrl}${url}`, data, { ...defaultOptions, ...options }),
    delete: (url, data, options = {}) =>
      axios.delete(`${baseUrl}${url}`, {
        data,
        ...defaultOptions,
        ...options,
      }),
  };
};
