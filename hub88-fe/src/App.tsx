import { useCallback, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';

const GET_COUNTRYBYCODE = gql`
  query getCountryByCode($countryCode: String!) {
    countries(filter: {
      code: { eq: $countryCode }
    }) {
      name,
      code
    }
  }
`;

const App = () => {
  const [code, setCode] = useState('');
  
  const handleCodeChange = useCallback((newCode: string) => {
    setCode(newCode);
  }, []);
  const [getCountryByCode, { loading, error, data }] = useLazyQuery(GET_COUNTRYBYCODE);

  return (
    <div className="main">
      <div className='main__actions-container'>
        <Input handleCodeChange={handleCodeChange} />
        <button className='main__button' onClick={() => getCountryByCode({ variables: { countryCode: code } })}>Submit!</button>
      </div>

      {loading && <p>Loading ...</p>}
      {error && `Error! ${error}`}

      {
        !loading && !error &&
        <Table data={data?.countries}></Table>
      }
    </div>
  );
};

export default App;
