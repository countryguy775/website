const liveFunctionApi = 'https://visitcountapp.azurewebsites.net/api/Visit_Trigger?';

const getVisitCount = () => {
    let count = 10;
    fetch(liveFunctionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Webpage called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    });

    return count;
}