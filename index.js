const apiUrl = 'https://api.waifu.im/fav';

const headers = new Headers();
headers.append('Accept-Version', 'v5');
headers.append('Authorization', 'Bearer id_O5Lyfs0dsVMln1bUpvxYe9b3dKQU0Hub66X-OJCKEYjCaLrSDQrHCdXX1pPCFQ4SwpoLoBIEWlCzzFPaeR3CePITIRO4jdV67_smi4w6LxhHcH9GRCvs4vWnm0VsdffJGT8tvYApOO2n1QxppxarOjD345ApOXkCp4qSpk3g');

fetch(apiUrl, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data as needed
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });
