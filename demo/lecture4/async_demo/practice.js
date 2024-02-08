document.getElementById('nameForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
  
    // Constructing API URLs
    //age-
    const agifyUrl = `https://api.agify.io?name=${name}`;
    //gender-
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    //nationality-
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.
});