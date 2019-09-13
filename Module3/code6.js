var getUserdetails = new Promise((resolve, reject) =>{
    console.log('User Details Retrived');
    resolve();
}).then(() => {
    throw new Error('Something Failed');
    console.log('Do this');
}).catch(() => {
    console.log('Do that');
}).then(() => {
    console.log('Do this, no matter what happend before');
})