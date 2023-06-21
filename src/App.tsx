import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import TodoList from '../src/pages/TodoList';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
					<Route path="/signin" element={<Signin />}></Route>
					<Route path="/todo" element={<TodoList />}></Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
