import Browser from "../applications/browser/Browser";
import Calculator from "../applications/calculator/Calculator";
import Camera from "../applications/camera/Camera";
import Editor from "../applications/editor/Editor";
import Files from "../applications/Files/Files";
import MusicPlayer from "../applications/musicPlayer/MusicPlayer"
import Terminal from "../applications/terminal/Terminal";

const applicationregistery = [
  { applicationId: 1, name: "Crawl", taskbarApplication: false, component: Browser },
  { applicationId: 2, name: "Calculator", taskbarApplication: false, component: Calculator },
  { applicationId: 3, name: "Lens", taskbarApplication: false, component: Camera },
  { applicationId: 4, name: "Ink", taskbarApplication: true, component: Editor },
  { applicationId: 5, name: "Files", taskbarApplication: true, component: Files },
  { applicationId: 6, name: "Melody", taskbarApplication: true, component: MusicPlayer },
  { applicationId: 7, name: "Glyph", taskbarApplication: true, component: Terminal },
];

export default applicationregistery;
