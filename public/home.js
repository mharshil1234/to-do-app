const doneTodos = document.querySelectorAll(".true");
doneTodos.forEach((doneTodo) => {
    doneTodo.style.opacity="0.6";
    doneTodo.querySelector(".todo-title").style.textDecoration="line-through";
    doneTodo.querySelector(".cb").innerHTML="✓";
})