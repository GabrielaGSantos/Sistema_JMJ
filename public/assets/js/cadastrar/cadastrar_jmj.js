$(document).ready(() => {
    $("#cadastrar_jmj").submit(function (e) {

        var url = "/jmj/cadastrar"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#cadastrar_jmj").serialize(), // serializes the form's elements.
            dataType: 'json',
            success: function (data) {
                if (data.error)
                    alert(data.error);
                else 
                    alert(data.message);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
})