function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
        alert("請輸入使用者名稱");
    } else if (pass.value == "") {
        alert("請輸入密碼");
    } else if (username.value == "admin" && pass.value == "123456") {
        window.location.href = "welcome.html";
    } else {
        alert("請輸入正確的使用者名稱和密碼！")
    }
}

function loginByAPI(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    var label_response_get_test = document.getElementById("label_response_get_test");
    var raw = "{\"Command\": \"Login\"," +
        "\"Information\": [{\"Id\": 14561,\"Name\": \"" + username.value + "\"," +
        "\"Password\": \"" + pass.value + "\", \"TotalDistance\": 153.0, \"InviteCode\": \"\"," +
        "\"CarType\": \"\", \"CarSN\": \"\", \"CarYear\": \"\"," +
        "\"CarInfo1\": \"\", \"CarInfo2\": \"\", \"CarInfo3\": \"\", \"CarInfo4\": \"\"}]}";

    label_response_get_test.innerHTML = 'Test Start';

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://script.google.com/macros/s/AKfycbzc5ALg-RbdMBU5CeeTYFXTo3YS_OFIiqGwW3Nh6yP_t_HA-38/exec", requestOptions)
        .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Response is not OK');
            }
        ).then(function(result) {
            //label_response_get_test.innerHTML = JSON.stringify(result);
            label_response_get_test.innerText = "Command: " + result['CommandResponse'] + '\nResult: ' + result['Result'];
            //alert(JSON.stringify(result) + '\n' + JSON.stringify(result['CommandResponse']));
        }
    ).catch(error => alert('error')
    );

}

function loadstart(){
    alert("load start");
}

function load(){
    //alert("load finish");
}

function loginByAPI3(){
    var username = document.getElementById("username")
    var pass = document.getElementById("password")
    var data = "{\"Command\": \"Login\"," +
        "\"Information\": [{\"Id\": 14561,\"Name\": \"" + username.value + "\"," +
        "\"Password\": \"" + pass.value+ "\", \"TotalDistance\": 153.0, \"InviteCode\": \"\"," +
        "\"CarType\": \"\", \"CarSN\": \"\", \"CarYear\": \"\"," +
        "\"CarInfo1\": \"\", \"CarInfo2\": \"\", \"CarInfo3\": \"\", \"CarInfo4\": \"\"}]}";

    alert(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        alert("State: " + this.readyState);
        if(this.readyState === 4) {
            console.log(this.responseText);
            alert("Get Response:" + xhr.status.toString());
            alert(JSON.stringify(this.responseText));
        }

    });



    xhr.open("POST", "https://script.google.com/macros/s/AKfycbztEiehfAxQcrIaXAggIF_K9SWAV_KewhyNG7pA815TooakylE/exec");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}

function loginByAPI2(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var username = document.getElementById("username")
    var pass = document.getElementById("password")
    var raw = "{\"Command\": \"Login\"," +
        "\"Information\": [{\"Id\": 14561,\"Name\": \"" + username.value + "\"," +
        "\"Password\": \"" + pass.value+ "\", \"TotalDistance\": 153.0, \"InviteCode\": \"\"," +
        "\"CarType\": \"\", \"CarSN\": \"\", \"CarYear\": \"\"," +
        "\"CarInfo1\": \"\", \"CarInfo2\": \"\", \"CarInfo3\": \"\", \"CarInfo4\": \"\"}]}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://script.google.com/macros/s/AKfycbztEiehfAxQcrIaXAggIF_K9SWAV_KewhyNG7pA815TooakylE/exec", requestOptions)
        .then(function(response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Response is not OK');
            }
        ).then(function(result) {
            alert(result);
        }
        ).catch(error => alert('error')
    );

}

function GetAPITest(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://script.google.com/macros/s/AKfycbztEiehfAxQcrIaXAggIF_K9SWAV_KewhyNG7pA815TooakylE/exec", requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => alert('error'));

}

function login_test() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
        alert("請輸入使用者名稱");
    } else if (pass.value == "") {
        alert("請輸入密碼");
    } else if (username.value == "admin" && pass.value == "123456") {
        window.location.href = "welcome.html";
    } else {
        alert("請輸入正確的使用者名稱和密碼！")
    }
}