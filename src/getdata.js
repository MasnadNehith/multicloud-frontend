const getData = async (url) => {
    const result = await fetch(`${url}/dev/get`);
    const resultbody = await result.json();
    return resultbody;
}

export default getData;