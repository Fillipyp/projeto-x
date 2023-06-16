import logo from './logo.svg';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { Button, Textarea, Grid, Link } from '@nextui-org/react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color="error">
          Edit <code>src/App.js</code> and save to reload.
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <Grid.Container gap={2.5} css={{ mt: '4px' }}>
          <Grid>
            <Textarea placeholder="Default Textarea" />
          </Grid>
          <Grid>
            <Textarea
              underlined
              color="primary"
              labelPlaceholder="Underlined Textarea"
            />
          </Grid>
          <Grid>
            <Textarea
              bordered
              color="secondary"
              labelPlaceholder="Bordered Textarea"
            />
          </Grid>
        </Grid.Container>
        <Link href="https://google.com" color="error">
          teste
        </Link>
      </header>
    </div>
  );
};

export default App;
