import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql, useLazyQuery } from '@apollo/client';
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

  console.log(data)
  // if (loading) return <p>Loading ...</p>;
  // if (error) return `Error! ${error}`;

  return (
    <div className="App">
      <Input handleCodeChange={handleCodeChange} />
      <button onClick={() => getCountryByCode({ variables: { countryCode: code } })}></button>
      <Table data={data?.countries}></Table>
    </div>
  );
};

export default App;
