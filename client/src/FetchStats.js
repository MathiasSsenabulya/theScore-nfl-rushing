const FetchStats = async (params) => {
    let apiURL = '/api/rushing?';
    apiURL += "sortCol" in params ? `sortBy=${params.sortCol}&` : '';
    apiURL += "player" in params ? `player=${params.player}&` : '';
    apiURL += "startAt" in params ? `startAt=${params.startAt}&` : '';

    const responseObj = await fetch(encodeURI(apiURL))
    .then(response => response.json())
    .catch(err => console.log(err));

    return responseObj ;
}

export default FetchStats;