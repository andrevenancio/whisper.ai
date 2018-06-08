let provider = null;

export const init = (config) => {
    firebase.initializeApp(config);
    provider = new firebase.auth.TwitterAuthProvider();
    // Also notice that you can retrieve the Twitter provider's OAuth token
    // which can be used to fetch additional data using the Twitter APIs.
};

export const login = async () => {
    const response = await firebase.auth().signInWithPopup(provider);
    return response;
};

export const logout = async () => {
    const response = await firebase.auth().signOut();
    return response;
};

export const getUser = () => {
    return firebase.auth().currentUser;
};
