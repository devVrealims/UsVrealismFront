import React from 'react'
import { gapi } from 'gapi-script';

const Auth2 = () => {

    var GoogleAuth;

    var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
  
    function handleClientLoad(e) {
      e.preventDefault();
      // Load the API's client and auth2 modules.
      // Call the initClient function after the modules load.
      gapi.load('client:auth2', initClient); 
    }
  
    function initClient() {
      // In practice, your app can retrieve one or more discovery documents.
      var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
  
      // Initialize the gapi.client object, which app uses to make API requests.
      // Get API key and client ID from API Console.
      // 'scope' field specifies space-delimited list of access scopes.
      gapi.client.init({
          'apiKey': 'AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk',
        /*   'clientId': '1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com',
          'discoveryDocs': [discoveryUrl],
          'scope': SCOPE */
      }).then(function () {
  
  
        GoogleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
       /*  GoogleAuth.isSignedIn.listen(updateSigninStatus); */
  
        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = GoogleAuth.currentUser.get();
  
        console.log(user);
        
  
      });
      
    }
  

  return (
    <div>
         <button onClick={(e)=>handleClientLoad(e)}>In</button>
    </div>
  )
}

export default Auth2
