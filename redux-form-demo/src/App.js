import logo from './logo.svg';
import './App.css';
import AddContentComponent from './components/AddContentComponent';
import ContentCompoent from './components/ContentComponent';
import NameMainForm from './Form/NameMainForm';

function App() {
  return <>
    <div>
      <h1>Form Demo</h1>
    </div>
    <AddContentComponent />
    <hr/>
    <ContentCompoent />
    <hr/>
    <NameMainForm />
  </>;
}

export default App;
