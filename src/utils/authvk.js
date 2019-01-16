const defaultOptions = {
    onAuth: () => { },
    apiUrl: '//vk.com/js/api/openapi.js?122',
    tagId: 'vk_auth'
}

function addScript(src) {
    return new Promise((resolve) => {
        const s = document.createElement('script');
        s.setAttribute('src', src);
        s.onload = resolve;
        document.body.appendChild(s);
    });
}

function init({tagId, onAuth}) {
    return async function resolver(resolve, reject) {
        const data = await getLoginStatusVk();
        if (data.session) {
            onAuth(data);
            resolve(data);
        } else {
            reject('user isn\'t logged');
        }
        console.log('VK 2', window.VK);
        window.VK.Widgets.Auth(tagId, { onAuth });
    }
}

function getLoginStatusVk() {
    return new Promise(VK.Auth.getLoginStatus);
}

export default async (options) => {
    const { 
        apiUrl,
        apiId,
        ...restOptions
    } = Object.assign(defaultOptions, options);
    if(!apiId) {
        throw new Error('Options must have valid \'apiId\' property.');
    }
    if (!window.VK) {
        await addScript(apiUrl);
    }
    window.VK.init({ apiId: 5675624 });
    return new Promise(init(restOptions))
};