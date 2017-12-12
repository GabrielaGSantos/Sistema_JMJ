$(document).ready(()=>{
    $.ajax({
        type: "get",
        url: "/api/listar/jmj",// serializes the form's elements.
        success: function(data)
        {
            console.log(data)
           data.forEach(jmj => {
               $("#lista_jmj").append(`<tr>
               <td>${jmj.ano}</td>
               <td>&emsp; &emsp; 1</td>
               <td style="padding-left: 20em"> <a href="/jmj/visualizar?id_jmj=${jmj.id_jmj}" class="button">Visualizar </a></td>
               <td style="padding-right: 2.1em"> <a href="/jmj/editar?id_jmj=${jmj.id_jmj}" class="button">Editar </a></td>
               <td><a href="/jmj/excluir?id_jmj=${jmj.id_jmj}" class="button">Excluir</a></td>
             </tr>`)
           });
        }
      });
})