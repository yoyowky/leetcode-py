// https://levelup.gitconnected.com/learn-javascript-promises-by-building-a-fully-working-promise-from-scratch-c9eabe73fa3



class PromiseSimple {
    constructor(executionFunction) {
      this.promiseChain = [];
      this.handleError = () => {};
  
      this.onResolve = this.onResolve.bind(this);
      this.onReject = this.onReject.bind(this);
  
      executionFunction(this.onResolve, this.onReject);
    }
  
    then(handleSuccess) {
      this.promiseChain.push(handleSuccess);
  
      return this;
    }
  
    catch(handleError) {
      this.handleError = handleError;
  
      return this;
    }
  
    onResolve(value) {
      let storedValue = value;
  
      try {
          console.log('this.promiseChain', this.promiseChain)
        this.promiseChain.forEach((nextFunction, index) => {
            console.log(index)
            console.log('arg', storedValue);
            console.log('arg is PromiseSimple', storedValue instanceof PromiseSimple)
           storedValue = nextFunction(storedValue);
           console.log('return',storedValue)
        });
      } catch (error) {
        this.promiseChain = [];
  
        this.onReject(error);
      }
    }
  
    onReject(error) {
      this.handleError(error);
    }
}


fakeApiBackend = () => {
    const user = {
      username: 'treyhuffine',
      favoriteNumber: 42,
      profile: 'https://gitconnected.com/treyhuffine'
    };
  
    // Introduce a randomizer to simulate the
    // the probability of encountering an error
    if (Math.random() > .05) {
      return { 
        data: user, 
        statusCode: 200,
      };
    } else {
      const error = {
        statusCode: 404,
        message: 'Could not find user',
        error: 'Not Found',
      };
      
      return error;
    }
};

// Assume this is your AJAX library. Almost all newer
// ones return a Promise Object
const makeApiCall = () => {
    return new PromiseSimple((resolve, reject) => {
      // Use a timeout to simulate the network delay waiting for the response.
      // This is THE reason you use a promise. It waits for the API to respond
      // and after received, it executes code in the `then()` blocks in order.
      // If it executed is immediately, there would be no data.
      setTimeout(() => {
        const apiResponse = fakeApiBackend();
        console.log('apiResponse', apiResponse)
  
        if (apiResponse.statusCode >= 400) {
          reject(apiResponse);
        } else {
          resolve(apiResponse.data);
        }
      }, 1000);
    });
};

makeApiCall()
    .then((user) => {
      console.log('In the first .then()');
    
      return user;
    })
    .then((user) => {
      console.log(`User ${user.username}'s favorite number is ${user.favoriteNumber}`);
    
      return user;
    })
    .then((user) => {
      console.log('The previous .then() told you the favoriteNumber')
    
      return user.profile;
    })
    .then((profile) => {
      console.log(`The profile URL is ${profile}`);
    })
    .then(() => {
      console.log('This is the last then()');
    })
    .catch((error) => {
      console.log(error.message);
    });





// const loadImg = (src)=>{
//     return new PromiseSimple((resolve, reject)=>{
//         const img = document.createElement('img');
//         img.onload=()=>{
//             console.log('image is loaded');
//             resolve(img);
//         }
//         img.onerror=()=>{
//             const err = new Error(`fail to load img ${src}`);
//             reject(err);
//         }
//         img.src=src;
//     })
// }

// const url1="http://placekitten.com/1600/900";
// const url2="http://placekitten.com/g/1600/900";

// loadImg(url1).then(img => {
//     console.log('1 then')
//     // console.log(img.width); // img 1
//     document.body.appendChild(img);
//     return img;
// }).then(img => {
//     console.log('2 then')
//     // console.log(img); // img 1
//     return loadImg(url2); // 传到下一个then里的是一个promise
// }).then(img2 => { // img2是个promise
//     console.log('3 then')
//     img2.then(img => {
//         console.log(img); // img 2
//         document.body.appendChild(img);
//     })
// }).catch(err => {
//     console.log(err)
// })