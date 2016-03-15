
 define(function() {

    //dosomething...
    var xhr=new XMLHttpRequest();

    xhr.open("get","index.html")

    xhr.onreadystatechange=function(){
      console.log(xhr.readyState);
      console.log(arguments);
      console.log(xhr.response);
    }

    xhr.send();

    xhr.onerror=function(){
        console.log(arguments);
    }


  });
