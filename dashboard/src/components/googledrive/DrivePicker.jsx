import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import { Button } from "react-bootstrap";

const DrivePicker = () => {
  const [openPicker, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com",
      developerKey: "AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk",
      viewId: "DOCS",

      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,

      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  return (
    <div>
      <Button onClick={() => handleOpenPicker()}>Open Picker</Button>
    </div>
  );
};

export default DrivePicker;

