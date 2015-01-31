$(document).on('ready', function() {
    var Maths = {
        add : function(x,y) {return Number(x) + Number(y)},
        subtract : function(x,y) {return x - y},
        multiply : function(x,y) {return x * y},
        divide : function(x,y) {return x / y}
    };
    var firstNum, secondNum, op, opFunc;

    $('.numButton').click(function(){
        var newData = $(this).text();
        var totalData = $('#screen').text();
        $('#screen').text(totalData + newData);
    });

    $(document).on('click', '.functionality', function() {
        firstNum = $('#screen').text();
        $('#screen').text('');
        op = $(this).data('op');
    });

    $(document).on('click', '.equals', function(){
        secondNum = $('#screen').text();
        $('#screen').text('');
        opFunc = Maths[op];
        $('#screen').text(opFunc(firstNum, secondNum));
    });
    $(document).on('click', '.clear', function(){
        firstNum = 0;
        secondNum = 0;
        $('#screen').text('');
    });
    
});