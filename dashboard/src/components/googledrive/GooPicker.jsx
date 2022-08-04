import { useState } from "react";
import { gapi } from "gapi-script";
import { Button } from "react-bootstrap";
const API_KEY = "AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk";
/* const API_KEY = "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"; */
const CLIENT_ID =
  "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

const GooPicker = () => {
  const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
  const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] =
    useState(false);
  const [signedInUser, setSignedInUser] = useState();
  const handleChange = (file) => {};

  const listFiles = async (searchTerm = null) => {
    /*  setIsFetchingGoogleDriveFiles(true); */
    const awua = await gapi.client.drive.files.list({
      pageSize: 500,
      fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
      q: searchTerm,
    });

    /*     .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        setDocuments(res.files);
        console.log(documents);
      }); */

    console.log(awua);
  };

  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = (event) => {
    setListDocumentsVisibility(false);
    gapi.auth2.getAuthInstance().signOut();
  };

  const initClient = async () => {
    const response = await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });
    /*     .then(
        function (params) { */
    /*    handleAuthClick(); */

    listFiles();
    /*   } */

    /*     function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {} */
    /*    ); */
  };

  const handleClientLoad = async () => {
    const guan = await gapi.load("client:auth2", initClient);
  };

  return (
    <div>
      <Button onClick={() => handleClientLoad()}>List Drive</Button>
    </div>
  );
};

export default GooPicker;
