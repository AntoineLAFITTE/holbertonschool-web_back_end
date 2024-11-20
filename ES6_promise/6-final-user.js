/* eslint-disable */
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    return Promise.allSettled([signUpPromise, uploadPromise]).then((results) => {
        return results.map((result) => {
            if (result.status === 'fullfilled') {
                return { status: 'fullfilled', value: result.value };
            }
            return { status: 'rejected', value: result.reason};
        });
    });
}
