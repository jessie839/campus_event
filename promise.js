function registerStudent(isSuccessful){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isSuccessful){
                resolve("Registration confirmed");
            }else{
                reject(new Error("Registration failed"));
            }
        },1000);
    });
}
registerStudent(true)
    .then(message => console.log(message))
    .catch(error => console.error(error.message));