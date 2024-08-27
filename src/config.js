export const msConfig = {
    auth: {
        clientId: 'ClientId',
        authority: 'https://login.microsoftonline.com/TenantId',
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