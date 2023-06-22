import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/todo" element={<TodoList />}></Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
