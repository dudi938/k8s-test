function getValue(){
    runHttpRequest()
}


function runHttpRequest(){
    var serviceUrl = "http://localhost:31000/getValue"

    $.get(serviceUrl, function(data, status){
        var tb =  $('#results-tb')
        $('#results-tb').val(data)
    });
}