const wpFetch = async (url, options = {}) => {
    const defaultOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
    };
    const httpOptions = { ...defaultOptions, ...options }

    const res = await fetch(url, httpOptions);
    const json = await res.json();
    return json;
}

export default wpFetch;
