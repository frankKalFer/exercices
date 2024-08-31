$(document).ready(function () {
    $('#todo-form').submit(function (event) {
        event.preventDefault();
        var taskText = $('#task-input').val();

        if (taskText.trim() === "") {
            alert('Por favor, insira uma tarefa.');
        } else {
            var listItem = $('<li>' + taskText + '</li>');

            listItem.click(function () {
                $(this).toggleClass('completed');
            });

            $('#task-list').append(listItem);
            $('#task-input').val('');
        }
    });
});