$(document).ready(() => {
    $.ajax({
        type: "get",
        url: "/api/listar/jmj",// serializes the form's elements.
        success: function (data) {
            console.log(data)
            data.forEach(jmj => {
                $("#lista_jmj").append(`<tr>
               <td>${jmj.ano}</td>
               <td>${jmj.pais}</td>
               <td>&emsp; &emsp; 1</td>
               <td> <a href="/jmj/visualizar?id_jmj=${jmj.id_jmj}" class="button">Visualizar </a></td>
               <td> <a href="/jmj/editar/${jmj.id_jmj}" class="button">Editar </a></td>
               <td><a href="/jmj/excluir/${jmj.id_jmj}" class="button">Excluir</a></td>
             </tr>`)
            });
        }
    });
})