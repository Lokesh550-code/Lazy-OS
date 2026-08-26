import Browser from "../applications/browser/Browser";
import Camera from "../applications/camera/Camera";
import Editor from "../applications/editor/Editor";
import Files from "../applications/Files/Files";
import Terminal from "../applications/terminal/Terminal";

const applicationregistery = [
  { applicationId: 1, name: "Browser", taskbarApplication: false, component: Browser },
  { applicationId: 2, name: "Camera", taskbarApplication: false, component: Camera },
  { applicationId: 3, name: "Editor", taskbarApplication: true, component: Editor },
  { applicationId: 4, name: "Files", taskbarApplication: true, component: Files },
  { applicationId: 5, name: "Terminal", taskbarApplication: true, component: Terminal },
];

export default applicationregistery;
