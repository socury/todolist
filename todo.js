function enterKey(){
    if(window.event.keyCode === 13){
        const todoInput = document.querySelector('#input');

        if(todoInput.value == "") {     //할일 입력창에 아무것도 없을 때
            const inputBox = document.getElementById('input');
            inputBox.classList.add('shake');
            setTimeout(() => {
                inputBox.classList.remove('shake');
            }, 500);
            return
        }

        const newLi = document.createElement('li'); 

        const newBtn = document.createElement('input'); //체크박스 만들기
        newBtn.type = 'checkbox';
        const newSpan = document.createElement('span');
        
        newLi.appendChild(newBtn);
        newLi.appendChild(newSpan);
		console.log(newLi)

        newSpan.textContent = todoInput.value;

        const todoList = document.querySelector('#todoList');
        todoList.appendChild(newLi);
        console.log(todoList)

        todoInput.value = '';
    }
    document.querySelectorAll('li').forEach(item => {
        item.addEventListener('dblclick', () => {
            item.remove();
        });
    });
}


function clearAll(){
    const clear = document.getElementById('todoList');
    clear.innerHTML = "";
    inputBox.classList.add('click');
}