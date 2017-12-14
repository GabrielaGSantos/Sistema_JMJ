$(document).ready(() => {
    $.ajax({
        type: "get",
        url: "/api/listar/jmj",// serializes the form's elements.
        success: function (data) {
            console.log(data)
            data.forEach(jmj => {
                $("#escolher_jmj").append(`
                <option value="ano">${jmj.ano}</option>`)
            });
        }
    });
})