var avatar_url = "";

const signupHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirm = document.querySelector('#confirm-password').value.trim();

    if(password !== passwordConfirm) {
        alert('ERROR the passwords do not match, try again');
        return;
    }

    console.log(avatar_url);

    if(email && password) {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            body: JSON.stringify({ email, username, password, avatar_url }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('ERROR there already exists an account with that email');
        }
    }
};

$('.avatar-img-cont').on('click', "img", (event) => {
    avatar_url = $(event.target).attr('data-url');
    return;
});

document.querySelector('#signup').addEventListener('submit', signupHandler);