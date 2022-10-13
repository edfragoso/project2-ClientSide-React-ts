import * as S from "./style";
import BoxLogin from "components/BoxLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";

const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate(RoutePath.HOME)
	}
	
	return (
		<S.Login>
			<S.LoginContent>
				<BoxLogin
					onSubmitData={handleSubmit}
					errorMessage={errorMessage}
				/>
			</S.LoginContent>
		</S.Login>
	);
};

export default Login;