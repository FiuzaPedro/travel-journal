//import logo from './logo.svg'
// import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import data from './data/data.js';
import Navbar from './components/Navbar';
import TravelItem from './components/TravelItem';
import './css/style.css';
import './css/mediaquery.css';

function clickArrow() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener('scroll', function () {
  let winScrollPosition = window.scrollY;
  let upArrow = document.getElementById('upArrow');
  if (winScrollPosition > 600) {
    upArrow.style.opacity = 1;
  } else {
    upArrow.style.opacity = 0;
  }
})

function App() {

  const dataImported = data.map((item) => {
    return (
      <TravelItem
        key={item.title}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="itemsContainer">{dataImported}</div>
      <span id='upArrow' className='upArrow' onClick={clickArrow}><FontAwesomeIcon icon={faAngleUp} /></span>
    </div>
  );
}

export default App;
