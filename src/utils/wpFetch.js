const wpFetch = async (url, options = {}) => {
    const defaultOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
    };
    const httpOptions = { ...defaultOptions, ...options }

    const res = await fetch(url, httpOptions);
    return await res.json()
}

export default wpFetch;
