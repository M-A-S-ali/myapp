import Accordian from "./components/Accordian";
import ImageSlider from "./components/Image Slider";
import LoadMoreData from "./components/Load-more-data";
import RandomColor from "./components/Random color";
import ScrollIndicator from "./components/Scroll-indicator";
import StarRating from "./components/Star Rating";
import TreeView from "./components/Tree-view";
import menus from "./components/Tree-view/data";
import LightDarkMode from "./components/ligth-dark-mode";
import QRCodeGenerator from "./components/qr-code-generator";
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from "./components/custom-model-popup/modal-test";
import GithubProfileFinder from "./components/Github-profile-finder";

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={15} page={10} />
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
      <TabTest />
      <ModalTest/> 
      <GithubProfileFinder/>

    </div>
  );
}

export default App;
