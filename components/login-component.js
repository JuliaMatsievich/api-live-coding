import { loginUser, registerUser } from "../api.js";

export function renderLoginComponent({ appEl, setToken, fetchTodosAndRender }) {
	let isLoginMode =  true;

	const renderForm = () => {
		const appHtml = `
		<div class="form">
		<h3 class="form-title">Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>
	
		${isLoginMode ? '' : `<div class="form-row">
		Имя:
		<input
			type="text"
			id="name-input"
			class="input"
		/>
		</div>
		<br />`}
		
		<div class="form-row">
		Логин:
		<input
			type="text"
			id="login-input"
			class="input"
		/>
		</div>
		<br />
		<div class="form-row">
			Пароль:
			<input
			type="password"
			id="password-input"
			class="input"
			/>
		</div>
		<br>
		<button class="button" id="login-button">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
		<br>
		<br>
		<br>
		<button class="button" id="toggle-button">Перейти ${isLoginMode ? 'к регистрации' : 'ко входу'}</button>
		
	</div>
	 `;
	 
		appEl.innerHTML = appHtml;
	 
		document.getElementById("login-button").addEventListener("click", () => {
			const login = document.getElementById('login-input').value;
			const password = document.getElementById('password-input').value;

			if(isLoginMode) {
				if(!login) {
					alert('Введите логин');
					return;
				}
	
				if(!password) {
					alert('Введите пароль');
					return;
				}
	
				loginUser({
					login: login,
					password: password
				})
				.then(user => {
					setToken(`Bearer ${user.user.token}`);	 
					fetchTodosAndRender();
				})
				.catch((error) => {
					alert(error.message);
				})
			} else {
				const name = document.getElementById('name-input').value;
				if(!login) {
					alert('Введите логин');
					return;
				}
	
				if(!password) {
					alert('Введите пароль');
					return;
				}

				if(!name) {
					alert('Введите имя');
					return;
				}

				registerUser({
					login: login,
					password: password,
					name: name,
				})
				.then(user => {
					setToken(`Bearer ${user.user.token}`);	 
					fetchTodosAndRender();
				})
				.catch((error) => {
					alert(error.message);
				})
			}
		});
	
		document.getElementById("toggle-button").addEventListener("click", () => {
			isLoginMode = !isLoginMode;
			renderForm();
		})
	}

	renderForm();
 }