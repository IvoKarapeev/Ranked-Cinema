const requester = async (method,url,data) => {
    try {
        const user = localStorage.getItem('auth');

        const auth = JSON.parse(user || '{}');

        let headers = {};

        if (auth.AccessToken) {
            headers['X-Authorization'] = auth.AccessToken
        };

        let buildRequest;
        if (method === 'GET') {
           buildRequest = fetch(url,{ headers });
        }else {
            buildRequest = fetch(url,{
                method,
                headers:{
                    ...headers,
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        
        const response = await buildRequest;
        const result = await response.json();
        
        if (!response.ok) {
            return {}
        }else {
            return result;
        };


    } catch (error) {
        return {}
    }
}

export const get = requester.bind({}, 'GET');
export const post = requester.bind({}, 'POST');
export const patch = requester.bind({}, 'PATCH');
export const put = requester.bind({}, 'PUT');
export const del = requester.bind({}, 'DELETE');