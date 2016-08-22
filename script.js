
var added23 = "not yet";

$("#add_button").click(function() {
    var result = 0;
    var lable = $("#result");
    var button = $("#add_button");

    //поиграем в "очко"? только 23 очка
    while (result < 23) {
        //рандомно добавляем число до 10
        result += Math.floor(Math.random() * Math.floor(Math.random() * 10));

        //если перебор все плохо
        if (result > 23) {
            added23 = "Перебор!";
            lable.css("color", "red");
        }
        //если 23 задача выполнена
        else if (result == 23) {
            added23 = "23 очка!";
            button.prop("disabled", "true");
            lable.css("color", "green");
        }
    }

    $("#result").html(added23);
});



var interval = setInterval(function() {

    var now = new Date();
    var twenty_three_hours = 1000 * 60 * 60 * 23;

    //если функция норм отработала можно добавлять 23 часа
    if (added23 == "23 очка!") {
        var tmp = +now + twenty_three_hours;
        now = new Date (tmp);
    }

    $("#time").html(now.toLocaleString() + ":" + now.getMilliseconds());


}, 1);
