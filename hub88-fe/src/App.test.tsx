import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

test('renders inputs and button', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  expect(screen.getByTestId('noButtonForm')).toBeInTheDocument;
  expect(screen.getByTestId('buttonForm')).toBeInTheDocument;
  expect(screen.getByRole('button')).toBeInTheDocument;
});

test('check buttonForm input field value', () => {
  const utils = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const input = utils.getByTestId('buttonForm') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'EE'}})
  expect(input.value).toBe('EE')
});

test('check noButtonForm input field value', () => {
  const utils = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const input = utils.getByTestId('noButtonForm') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'DE'}})
  expect(input.value).toBe('DE')
});

test('check buttonForm table output', async () => {
  const utils = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const input = utils.getByTestId('buttonForm') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'DE'}})
  const button = screen.getByRole('button')
  fireEvent.click(button)
  await screen.findByText('DE')
  await screen.findByText('Germany')
});

test('check table output in case of lowercase input', async () => {
  const utils = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const input = utils.getByTestId('buttonForm') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'ee'}})
  const button = screen.getByRole('button')
  fireEvent.click(button)
  await screen.findByText('EE')
  await screen.findByText('Estonia')
});

test('check noButtonForm table output', async () => {
  const utils = render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const input = utils.getByTestId('noButtonForm') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'RU'}})

  await screen.findByText('RU')
  await screen.findByText('Russia')
});
