$(document).ready(function() {

    $('#regButton').on('click', function() {
        const taskValue = $('#taskInput').val().trim();
        if (taskValue) {
            const todoItem = createTodoItem(taskValue);
            $('#todoList').append(todoItem);
            $('#taskInput').val('');
        }
    });

    $('#todoList').on('click', '.finButton', function() {
        const taskElement = $(this).closest('.todoItem').find('.todoText');
        const isCompleted = taskElement.css('text-decoration').includes('line-through');
        taskElement.css('text-decoration', isCompleted ? 'none' : 'line-through');
    });

    $('#todoList').on('click', '.delButton', function() {
        $(this).closest('.todoItem').remove();
    });
});

// todoItem を作成する関数
function createTodoItem(taskValue) {
    const li = $('<li>').addClass('todoItem');
    const taskText = $('<div>').addClass('todoText').text(taskValue);
    const buttonArea = $('<div>').addClass('buttonArea');
    const finButton = $('<input>').attr({
        type: 'button',
        value: '達成'
    }).addClass('finButton');

    const delButton = $('<input>').attr({
        type: 'button',
        value: '削除'
    }).addClass('delButton');
    
    buttonArea.append(finButton, delButton);
    li.append(taskText, buttonArea);
    
    return li;
}