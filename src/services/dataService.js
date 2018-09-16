const dataService = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json()).then((data) => resolve(data)).catch((err) => reject(err));
        })
    },

    post: (url, data) => {
        const options = {};
        options.body = data;
        options.method = 'POST';
        options.headers = {
            "Content-type": "application/json; charset=UTF-8"
        };
        options.body = options.body ? JSON.stringify(options.body) : {};
        return new Promise((resolve, reject) => {
            fetch(url, options).then(res => res.json()).then((data) => resolve(data)).catch((err) => reject(err));
        })
    },

    put: (url, data) => {
        const options = {};
        options.body = data;
        options.method = 'PUT';
        options.headers = {
            "Content-type": "application/json; charset=UTF-8"
        };
        options.body = options.body ? JSON.stringify(options.body) : {};
        return new Promise((resolve, reject) => {
            fetch(url, options).then(res => res.json()).then((data) => resolve(data)).catch((err) => reject(err));
        })
    },

    delete: (url) => {
        const options = {};
        options.method = 'DELETE';
        return new Promise((resolve, reject) => {
            fetch(url, options).then(res => res.json()).then((data) => resolve(data)).catch((err) => reject(err));
        })
    }
};

export default dataService;