import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Button } from "react-bootstrap";

const AsyncGapi = () => {
  /* const API_KEY = "AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk"; */
  const API_KEY = "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";
  const CLIENT_ID =
    "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ];
  /*   const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/files",
  ]; */
  const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

  const [tokenClient, setTokenClient] = useState();
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [filedownid, setFiledownid] = useState();
  const [iddown, setIddown] = useState("");

  const gapiLoaded = async () => {
    await gapi.load("client", intializeGapiClient);
  };
  /*  */

  const listFiles = async (searchTerm = null) => {
    const awua = await gapi.client.drive.files.list({
      pageSize: 500,
      fields:
        "nextPageToken, files(id, name, mimeType, modifiedTime, kind,webContentLink, webViewLink, fullFileExtension			)",
      q: searchTerm,
    });

    /*     .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        setDocuments(res.files);
        console.log(documents);
      }); */
    setFiledownid(awua);
  };

  /*  */
  const intializeGapiClient = async () => {
    const res = await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    listFiles();
  };
  /*  */

  useEffect(() => {
    gapiLoaded();
  }, []);

  useEffect(() => {
    setIddown(filedownid);
    console.log(filedownid);
  }, [filedownid]);

  /*  */

  return (
    <div>
      <Button onClick={() => gapiLoaded()}>async</Button>
    </div>
  );
};

export default AsyncGapi;
