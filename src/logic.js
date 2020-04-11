const failover = async () => {
    let URL = {
        aws : 'https://yyjfe9pdf5.execute-api.us-east-1.amazonaws.com',
        azure : 'https://sls-neur-dev-multiclouddeploymentblog.azurewebsites.net'
    }
    try{
        const data = await fetch(`${URL.aws}/dev/status`);
        return URL.aws;
    }catch(err){
        console.log(err);
        return URL.azure;
    }
}

export default failover;