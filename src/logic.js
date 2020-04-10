const failover = async () => {
    let URL = {
        aws : 'http://localhost:3000',
        azure : 'http://localhost:7071'
    }
    try{
        const data = await fetch(`${URL.aws}/dev/status`);
        return URL.aws;
    }catch(err){
        console.log(err);
        return URL.azure;
    }
}

const getData = async (url) => {
    const result = await fetch(`${url}/dev/get`);
    const resultbody = await result.json();
    return resultbody;
}


module.exports = {
    failover,
    getData
}