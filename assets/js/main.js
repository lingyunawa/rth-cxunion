function newSave(){
    document.querySelectorAll('div#btn-container button.btns').forEach(button => {
        // button.disabled = true;
        button.setAttribute('style', 'display:none')
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://154.7.177.68:3927/ynfou/post", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 请求成功完成
            console.log(xhr.responseText);
        }
    };
    xhr.send("stop");

}

function loadSave(){
    window.open('https://www.bilibili.com/video/BV1RG411M7N8');
}

function quitGame(){
    window.close();
}