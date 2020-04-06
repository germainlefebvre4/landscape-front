import axios from 'axios';

function getApplications() {
    return axios
      .get('http://localhost:8080/api/applications'
      ).then((data) => {
        if(data.status == 200) {
          console.log("inside")
          return data.status
        } else {
            console.log("An error occured");
        }
      }).catch()
}

export default { namespace: true, getExceptions }