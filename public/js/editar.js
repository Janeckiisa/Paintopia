

document.addEventListener("DOMContentLoaded", function(){
    const userOptions = document.getElementById('user-options');
    const userAvatar = document.getElementById('user-avatar');
    // const editUser = document.getElementById('edit-user');
    // const logout = document.getElementById('logout');

    userAvatar.addEventListener('click', function(event) {
        event.stopPropagation();
        userOptions.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        userOptions.classList.remove('show');
    });

    userOptions.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});