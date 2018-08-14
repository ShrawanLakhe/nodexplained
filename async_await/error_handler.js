//exception handler code

const saveUserToDB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("user information saved.");
            reject("oops!!!issue.");

        }, 1000);
    });
}

const saveTravellerInfoPromise = () => {
    try {
        console.log('saving traveller information...')
        const jsonObj = JSON.parse("er");
        saveUserToDB()
            .then((saveMessage) => {
                console.log('saveMessage', saveMessage);
            })
            .catch((err) => {
                console.log('err', err)
            })
    } catch(err) {
        console.log('err', err);
    }
}

saveTravellerInfoPromise();


//Exception handling using try/catch statement for both synchronous and asynchronous code
const saveTravellerInfo = async () => {
    try {
        const jsonObj = JSON.parse("er");
        console.log('jsonVal', jsonObj);
        const saveMessage = await saveUserToDB();
        console.log('saveMessage', saveMessage);
    } catch(err) {
        console.log('=============== err message ===============', err);
    }
}

saveTravellerInfo();