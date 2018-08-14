async function getTouristDestinationInfo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                place: "Annapurna Circuit Trek",
                country: "Nepal",
                image_url: "https://www.welcomenepal.com/uploads/Trekking-6.jpg"
            });
        }, 2000);
    });
}

const showInformation  = async () => {
    const destination = await getTouristDestinationInfo();
    console.log('destination', destination);
}

showInformation()

async function funcNumber() {
    const number = await 3;
    console.log('number', number)//prints 3
}

funcNumber();



//clean code example
const checkExistingUserInfo = () => {
    return Promise.resolve(true);
}

const generateSecuredPassword = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("secure_password");
        }, 2000);
    });
}

const saveUserToDB = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("user information saved.");
        }, 1000);
    });
}

const saveTravellerInfoPromise = () => {
    console.log('saving traveller information...')
    checkExistingUserInfo()
        .then((exists) => {
            if(exists) {
                console.log('already exists');
                throw 'already exists';
            } else {
                return generateSecuredPassword();
            }
        })
        .then((password) => {
            return saveUserToDB();
        })
        .then((saveMessage) => {
            console.log('saveMessage', saveMessage);
        })
        .catch((err) => {
            console.log('err', err)
        })
}

saveTravellerInfoPromise();

const saveTravellerInfo = async () => {
    try {
        console.log('saving traveller information...')
        const exists = await checkExistingUserInfo();
        if(exists) {
            console.log('already exists');
        } else {
            const password = await generateSecuredPassword();
            const saveMessage = await saveUserToDB();
            console.log('saveMessage', saveMessage);
        }
    } catch(err) {
        console.log('err', err);
    }

}

saveTravellerInfo();


// module.exports = getTouristDestinationInfo;