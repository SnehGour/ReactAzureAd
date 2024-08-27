export const msConfig = {
    auth: {
        clientId: '401c2be7-f56c-4d65-a44c-f36d719b48f8',
        authority: 'https://login.microsoftonline.com/1fea8d78-f353-4b2e-b145-3b2f5f1f0649',
        redirectUri: '/',
        postLogoutRedirectUri: '/',
        navigateToLoginRequestUrl: false
    },
    caches: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
}

export const loginRequest = {
    scopes:['user.read']
}