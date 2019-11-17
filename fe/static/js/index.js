function getValue(){
    runHttpRequest()
}


function runHttpRequest(){
    var serviceUrl = "http://incerment.my-ns.svc.cluster.local"

    $.get(serviceUrl, function(data, status){
        var tb =  $('#results-tb')
        $('#results-tb').val(data)
      });
}