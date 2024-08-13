// רשימת משתמשים וסיסמאות
const users = {
    "admin": "adminpassword", // מנהל מערכת
    "user1": "password1",
    "user2": "password2"
};

// בדיקת התחברות
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(users[username] && users[username] === password) {
        alert('ברוך הבא ' + username);
        if (username === "admin") {
            document.getElementById('uploadSection').style.display = 'block'; // הצגת אפשרות ההעלאה למנהל
        } else {
            document.getElementById('contentSection').style.display = 'block'; // הצגת תוכן למשתמש רגיל
        }
    } else {
        alert('שם משתמש או סיסמה שגויים');
    }
};
