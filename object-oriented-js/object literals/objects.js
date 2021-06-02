var userOne = {
    // property
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    // method
    login(){
        console.log(this.email, 'has logged in'); // this refer to the object userOne
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};
// this.xxx // this refer to the window, the global object
userOne.login();
userOne.logout();