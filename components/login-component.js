export function renderLoginComponent({ appEl, setToken, fetchTodosAndRender }) {
	let isLoginMode =  false;

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
			type="text"
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
		  setToken("Bearer bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck");
	 
		  fetchTodosAndRender();
		});
	
		document.getElementById("toggle-button").addEventListener("click", () => {
			isLoginMode = !isLoginMode;
			renderForm();
		})
	}

	renderForm();
 }