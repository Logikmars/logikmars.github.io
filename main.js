var btn = document.getElementById('btn')
var secbtn = document.getElementById('secbtn')
var form = document.getElementById('myForm');
var modal = document.getElementById('modal');
var modalimg = document.getElementById('modalimg');
var formData = new FormData(form);
formData.append('name', document.getElementById('name').value);
formData.append('email', document.getElementById('email').value);
formData.append('text', document.getElementById('text').value);

btn.onclick = function() {
    fetch('action.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Проверка наличия тела ответа
            if (!response.body) {
                throw new Error('Response body is undefined');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Обработка успешного ответа
                alert(data.message);
                modal.style.opacity = 1;
                modalimg.style.animation = 'mails 2s ease';
                setTimeout(() => {
                    modal.style.opacity = 0;
                    modalimg.style.animation = 'n';
                }, 1500);
                // Дополнительные действия после успешной отправки
            } else {
                // Обработка ошибки
                alert(data.message);
            }
        })
        .catch(error => {
            // Обработка ошибок
            console.error('There was a problem with the fetch operation:', error);
            alert('There was a problem with the fetch operation. Check the console for details.');
        });

};

secbtn.onclick = function() {
    fetch('action.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Проверка наличия тела ответа
            if (!response.body) {
                throw new Error('Response body is undefined');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Обработка успешного ответа
                alert(data.message);
                // Тут будет выезжать плашка об удачной отправке сообщения
                modal.style.opacity = 1;
                modalimg.style.animation = 'mails 2s ease';
                setTimeout(() => {
                    modal.style.opacity = 0;
                    modalimg.style.animation = 'n';
                }, 1500);
                // Дополнительные действия после успешной отправки
            } else {
                // Обработка ошибки
                alert(data.message);
            }
        })
        .catch(error => {
            // Обработка ошибок
            console.error('There was a problem with the fetch operation:', error);
            alert('There was a problem with the fetch operation. Check the console for details.');
        });
};