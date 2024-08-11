// visit counter code

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

// API endpoint
const localFunctionApi = 'http://localhost:7071/api/ResumeCountFunc';
const liveFunctionApi = 'https://visitfunc.azurewebsites.net/api/VisitFunc?';

const getVisitCount = () => {
    let count = 1;
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