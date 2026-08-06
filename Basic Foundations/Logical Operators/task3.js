let login = prompt("Input Login:", '');

if (login == 'Admin'){
    let password = prompt("Input Password:", '');
    if(password == 'TheMaster'){
        alert("Welcome!")
    } else if(password !== null && password !== 'TheMaster'){
        alert("Wrong Password")
    } else{
        alert("Cancelled")
    }
} else if (login !== null && login !== 'Admin'){
    alert("Unknown User!")
} else{
    alert("Cancelled")
}