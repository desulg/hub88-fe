import { useCallback, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Input from '../components/Input';
import Table from '../components/Table';

type CountryData = {
  name: string,
  code: string
}

const GET_ALLCOUNTRIES = gql`
  query {
    countries {name, code}
  }
`;

const NoButtonForm = () => {
  const [code, setCode] = useState('');

  let filteredCountries: Array<CountryData> = []
  const { loading, error, data } = useQuery(GET_ALLCOUNTRIES);
  console.log(data)

  const handleCodeChange = useCallback((newCode: string) => {
    setTimeout(() => {
      setCode(newCode);
    }, 1000);
  }, []);
  
  filteredCountries = data?.countries.filter((country: CountryData) => {
    return country.code === code
  })

  return (
    <div className="form">
      <div className='form__actions-container'>
        <Input handleCodeChange={handleCodeChange} />
      </div>

      {loading && <p>Loading ...</p>}
      {error && `Error! ${error}`}

      {
        !loading && !error &&
        <Table data={filteredCountries} />
      }
    </div>
  );
};

export default NoButtonForm;
