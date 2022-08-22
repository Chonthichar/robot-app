//promise is kind of exactly add what it is. It promise that this object will
// enventually get an object it was either be an resolved value or reject but the promise will be in the state in pending eigther resolve or reject been called
// after 1 sexond i want tgis to hold the value when i get success
//to make it success must said


const myPromise = new Promise((resolve, reject) => {
    if (true) {


        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have failed')
    }
});

myPromise.then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));