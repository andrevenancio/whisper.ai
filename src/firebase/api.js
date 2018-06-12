let provider = null;

export const init = (config) => {
    firebase.initializeApp(config);
    provider = new firebase.auth.TwitterAuthProvider();
};

export const setPersistence = async () => {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
};

export const login = async () => {
    const response = await firebase.auth().signInWithPopup(provider);
    console.log('login', response);
    return response;
};

export const logout = async () => {
    const response = await firebase.auth().signOut();
    return response;
};

export const getRedirectResult = async () => {
    const response = await firebase.auth().getRedirectResult();
    // firebase.auth().onAuthStateChanged((user) => {
    //     console.log('STATE CHANGE', user);
    // });
    return response;
};

export const getUser = () => {
    return firebase.auth().currentUser;
};

export const getProvider = () => {
    return provider;
};
