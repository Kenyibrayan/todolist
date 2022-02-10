const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");

const guardarTareas = () ==>    {
const tarea = {
    input_tarea: input.value
};
 if(localStorage.getItem ("tareas")   null ) {
     let arreglo = [];
     arreglo.push(tarea);
     localStorage.setItem("tareas" , JSON.stringify(arreglo));
    
 } else { 
     let obtener = JSON.parse(localStorage.getItem("tareas"));
     obtener.push(tarea);
     localStorage.setItem("tareas", JSON.stringify(obtener));
 }
 input.value = "";

};
btn_todo.addEventListener("click",  ()  {
    if(input.value ≡  "" input.value.trim () "") {
        window.alert("Imput vacio, ingreso datos");
    } else {
        guardarTareas();

    }

});