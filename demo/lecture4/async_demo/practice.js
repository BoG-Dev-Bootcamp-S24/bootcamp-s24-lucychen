// URL variables for the APIs


document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;
    fetchData(agifyUrl, genderizeUrl, nationalizeUrl);
    
    async function fetchData(agifyUrl, genderizeUrl, nationalizeUrl) {
        try {
            const responses = await Promise.all([
                fetch(agifyUrl),
                fetch(genderizeUrl),
                fetch(nationalizeUrl)
            ]);

            document.getElementById('age').textContent = `Age: ${data[0].age}`;
            document.getElementById('gender').textContent = `Gender: ${data[1].gender}`;
            document.getElementById('nationality').textContent = `Nationality: ${data[2].country[0].country_id}`;
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.
});