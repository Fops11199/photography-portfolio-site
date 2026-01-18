import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      {/* Fallback route */}
      <Route>404: Page Not Found</Route>
    </Switch>
  );
}

export default App;
