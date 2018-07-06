let base = '//0.0.0.0:8080/';

export const setApiBaseUrl = (endpoint) => {
    base = endpoint;
};

export const SEARCH = () => `${base}api/search`;
