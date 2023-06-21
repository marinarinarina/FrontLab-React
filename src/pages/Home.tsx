import { Link } from 'react-router-dom';
import { Container, Title } from './styles';

const Home = () => {
	return (
		<Container>
			<Title>메인페이지</Title>
			<ul>
				<li>
					<Link to="/signin">로그인</Link>
				</li>
				<li>
					<Link to="/signup">회원가입</Link>
				</li>
				<li>
					<Link to="/todo">투두리스트</Link>
				</li>
			</ul>
		</Container>
	);
};

export default Home;
