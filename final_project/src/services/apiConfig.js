import axios from 'axios'



const apiUrls = {
      production: "",
      development: "http://localhost:3000",
    };
    
    if (window.location.hostname === "localhost") {
      apiUrl = apiUrls.development;
    } else {
      apiUrl = apiUrls.production;
    }
    



export default backEnd

