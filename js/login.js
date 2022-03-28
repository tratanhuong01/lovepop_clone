const listDataLogin = [
    {
        id: 0,
        form: formForgetPassword,
        title: 'Reset your password'
    },
    {
        id: 1,
        form: formRegister,
        title: 'Create Account'
    },
    {
        id: 2,
        form: formLogin,
        title: 'Login'
    }
]

const handeFormLoginMain = (index) => {
    if (listDataLogin[index]) {
        titleAuthentication.innerHTML = listDataLogin[index].title;
        listDataLogin.forEach((el) => {
            el.form.style.display = el.id !== listDataLogin[index].id ? 'none' : 'block';
        })
    }
}

btnRegister.addEventListener('click', () => {
    handeFormLoginMain(1)
})

btnForgetPassword.addEventListener('click', () => {
    handeFormLoginMain(0)
})

btnSignin.addEventListener('click', () => {
    handeFormLoginMain(2)
})

btnCancelForm.addEventListener('click', () => {
    handeFormLoginMain(2)
})