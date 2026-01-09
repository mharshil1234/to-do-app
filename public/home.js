const doneTodos = document.querySelectorAll(".true");
doneTodos.forEach((doneTodo) => {
    doneTodo.style.opacity="0.6";
    doneTodo.querySelector(".todo-title").style.textDecoration="line-through";
    doneTodo.querySelector(".cb").innerHTML="✓";
    doneTodo.querySelector(".edit-btn").style.visibility = "hidden";
});

const editBtns = document.querySelectorAll(".edit-btn");
editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
        const div = document.getElementById(editBtn.id);
        const todoInput = div.querySelector(".todo-title");
        todoInput.disabled = false;
        todoInput.focus();
        div.querySelector(".edit-btn").style.display="none";
        div.querySelector(".tick-btn").style.display="block";
        todoInput.addEventListener("keydown", (e) => {
            if(e.key==="Enter") {
                e.preventDefault();
                div.querySelector(".tick-btn").click();
            }
        });
    });
});