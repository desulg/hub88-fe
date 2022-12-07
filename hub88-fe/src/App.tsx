import './App.css';
import ButtonForm from './views/ButtonForm';
import NoButtonForm from './views/NoButtonForm';


const App = () => {

  return (
    <div className="main">
      <ButtonForm />
      <NoButtonForm />
    </div>
  );
};

export default App;
