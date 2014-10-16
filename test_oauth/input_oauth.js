




function main(){

/*
document.write("i do not know ");
*/


var test_opts={
/*
test_opts_consumer: "do not know",
test_opts_signature_method:  'no way',
test_opts_nonce_length:   100  ,
test_opts_version:  '5.0'    ,
test_opts_parameter_seperator: ', ' ,
*/
consumer: {public:"zrB43B3MSYDfY3kkK6",secret:"ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7"},
signature_method:  'PLAINTEXT',
nonce_length:   29  ,
version:  '1.0'    ,
parameter_seperator: ', ' ,


};

document.write(" this is why " + "abc"+"<br/>" );

/*
document.write("test_opts_consumer " + test_opts.test_opts_consumer + "<br/>");
document.write("test_opts_signature_method " + test_opts.test_opts_signature_method + "<br/>");
document.write("test_opts_nonce_length " + test_opts.test_opts_nonce_length + "<br/>");
document.write("test_opts_version " + test_opts.test_opts_version + "<br/>");
document.write("test_opts_parameter_seperator " + test_opts.test_opts_parameter_seperator + "<br/>");
*/

document.write("test_opts.consumer.key   " + test_opts.consumer.key + "<br/>");
document.write("test_opts.signature_method   " + test_opts.signature_method + "<br/>");
document.write("test_opts.nonce_length " + test_opts.nonce_length + "<br/>");
document.write("test_opts.version   " + test_opts.version + "<br/>");
document.write("test_opts.parameter_seperator   " + test_opts.parameter_seperator + "<br/>"+"<br/>"+"<br/>");



var myoauth=new OAuth(test_opts);






document.write("myoauth.consumer.key   " + myoauth.consumer.key + "<br/>");
document.write("myoauth.signature_method   " + myoauth.signature_method + "<br/>");
document.write("myoauth.nonce_length " + myoauth.nonce_length + "<br/>");
document.write("myoauth.version   " + myoauth.version + "<br/>");
document.write("myoauth.parameter_seperator   " + myoauth.parameter_seperator + "<br/>"+"<br/>"+"<br/>");

myoauth.nonce=myoauth.getNonce();

document.write("myoauth.nonce   " + myoauth.nonce + "<br/>");

document.write("myoauth.getNonce()   " + myoauth.getNonce() + "<br/>");

document.write("myoauth.percentEncode   " + myoauth.percentEncode("ab!gcde") + "<br/>");



var myrequest={
 
 method: "POST",
 url: "http://bitbucket.org/api/1.0/oauth/request_token",
  
  data: '',
};


//document.write("myrequest.data.consumer.key  " + myrequest.data.consumer.key + "<br/>");



var mytoken={};

//myoauth.authorize(myrequest,mytoken);


document.write("myoauth.authorize().oauth_timestamp   " + myoauth.authorize(myrequest,mytoken).oauth_timestamp + "<br/>");

document.write("myoauth.authorize().oauth_signature  " + myoauth.authorize(myrequest,mytoken).oauth_signature + "<br/>");


document.write("myoauth.authorize.oauth_signature " + myoauth.authorize.oauth_signature + "<br/>"+"<br/>"+"<br/>");


myoauth.signature=myoauth.authorize(myrequest,mytoken).oauth_signature ;
document.write("myoauth.signature " + myoauth.signature + "<br/>");

myoauth.callback=myoauth.percentEncode(myoauth.getBaseUrl("http://local/dump"));
document.write("myoauth.callback " + myoauth.callback + "<br/>");


//document.write("myoauth.oauth_data.oauth_consumer_key  " + myoauth.authorize.oauth_consumer_key + "<br/>");



var myoauth_data={
oauth_consumer_key:"zrB43B3MSYDfY3kkK6",
oauth_signature_method:  'PLAINTEXT',
//oauth_nonce_length:   40  ,
oauth_version:  '1.0'    ,
//oauth_parameter_seperator: ', ' ,

oauth_callback:'http://local?dump',
oauth_nonce: myoauth.nonce,
oauth_timestamp:myoauth.authorize(myrequest,mytoken).oauth_timestamp,

oauth_signature: myoauth.signature,

};




document.write("myoauth_data.oauth_signature " + myoauth_data.oauth_signature  +'<br/>');

/*
var request_string2=myoauth.sortObject(myoauth.percentEncodeData(myoauth_data)  );
document.write("request_string2 " + request_string2+ "<br/>");
*/

/*
$.ajax({
    url: myrequest.url,
    type: myrequest.method,
    data: myoauth.authorize(myrequest, '')
}).done(function(data) {
    //process your data here
});
*/

var ourstring='https://bitbucket.org/api/1.0/oauth/request_token?oauth_version=1.0&oauth_nonce=7f2325b3c36bd49afa0a33044d7c6930&oauth_timestamp=1366243208&oauth_consumer_key=HUpRcDUduZrepL6sYJ&oauth_callback=http%3A%2F%2Flocal%3Fdump&oauth_signature_method=HMAC-SHA1&oauth_signature=qZyTwVA48RzmtCHvN9mYWmlmSVU%3D';

    //url: 'https%3A%2F%2Fbitbucket.org%2Fapi%2F1.0%2Foauth%2Frequest_token?oauth_callback=http%3A%2F%2Flocal%2Fdump&oauth_consumer_key=zrB43B3MSYDfY3kkK6&oauth_nonce=gr6q4NzaXgTZXnoeU5nd8Y9MBnJvD2WD07WDtVWE&oauth_signature_method=PLAINTEXT&oauth_signauture=ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7%26&oauth_timestamp=1412911400&oauth_version=1.0',


var myrequest_data = {
    url:'https://bitbucket.org/api/1.0/oauth/request_token',
	//url: 'https://bitbucket.org/api/1.0/oauth/request_token?oauth_consumer_key=zrB43B3MSYDfY3kkK6&oauth_nonce=xOyInBkiQT56t2Qk4AiJQimiCtUjO8SKYGeEYv41&oauth_signature_method=PLAINTEXT&oauth_signauture=ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7&oauth_timestamp=1412916036&oauth_version=1.0&oauth_callback=http%3A%2F%2Flocal%3Fdump',
    method: 'POST',
    data: {
        status: 'Hello Ladies + Gentlemen, a signed OAuth request!'
    }
};


//POST /test/demo_form.asp HTTP/1.1;


document.write("myoauth.signature " + myoauth.signature +'<br/>');


var my_request_token_string="https://bitbucket.org/api/1.0/oauth/request_token?"
+"oauth_signature_method="+myoauth_data.oauth_signature_method+"&"
+"oauth_version="+myoauth_data.oauth_version+"&"
+"oauth_timestamp="+myoauth_data.oauth_timestamp+"&"
+"oauth_signature="+'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7%26'+'&'
+'oauth_consumer_key='+myoauth_data.oauth_consumer_key+'&'
+'oauth_nonce='+myoauth_data.oauth_nonce+'&'
+'oauth_callback='+'http%3A%2F%2Flocal%3Fdump';
//+'oauth_callback='+'http://local?dump';
//+'oau%th_callback=https%3A%2F%2Fbitbucket.org%2Fapi%2F1.0%2Frepositories%2Fshuerhaaken%2Fxnoise%2Fchangesets%2F';
//+'&callback=https%3A%2F%2Fbitbucket.org%2Fapi%2F1.0%2Foauth%2Faccess_token';


document.write('my_request_token_string '+my_request_token_string+'<br/>');

/*
$.post( my_request_token_string, function( data ) {
  $( ".result" ).html( data );
});
*/

/*
$.post("/example/jquery/demo_test_post.asp",
    {
      name:"Donald Duck",
      city:"Duckburg"
    },
    function(data,status){
      alert("数据：" + data + "\n状态：" + status);
    });
  */

 
 

  
 $( document ).bind( "mobileinit", function() { 
   $.support.cors = true;    
   $.mobile.allowCrossDomainPages = true; 
}); 
 
 
 
 
 
 
 
 
 
 /*
 $.ajax({
    url: my_request_token_string,
    type: "post",
    data: myoauth.authorize(myrequest_data, ''),
	 headers: {
		'contentType':   
		//'multipart/form-data',  
		//'application/x-www-form-urlencoded', 
		//'application/json',
		//'text/plain',
		//'application/javascript',
		//'application/jsonp',
		'text/javascript',
		//'text/html',
		Accept: 'text/javascript'  ,
		},
	 
	 
	// headers: myoauth.toHeader(myoauth.authorize(myrequest_data, ''))
}).done(function(data) {
  
	
	
	document.write('out response is '+data+'<br/>');
	//process your data here
});
*/
 

 
 
 /*
 
 var oauth = OAuth({
    consumer: {
        public: 'zrB43B3MSYDfY3kkK6',
        secret: 'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7'
    },
    signature_method: 'HMAC-SHA1'
});
//Your request data

var request_data = {
    url: 'https://bitbucket.org/api/1.0/oauth/request_token',
    method: 'POST',
    data: {
        status: 'Hello Ladies + Gentlemen, a signed OAuth request!'
    }
};


//Your token (optional for some requests)

var token = {
    //public: 'zrB43B3MSYDfY3kkK6',
    //secret: 'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7'
};


//oauth.authorize(request_data, token);



//Call a request
*/

/*
var  me;

$.ajax({
    url: my_request_token_string,
    type: 'post',
    //data: oauth.authorize(request_data, token),
	
	data:{
	oauth_consumer_key:'zrB43B3MSYDfY3kkK6'
	},

	success:function(me) {document.write('respose is here ' + me+'<br/>');},
	
	beforesend: function(){ response.setHeader("Access-Control-Allow-Origin", "*");},
	
	
	
	
	});
 
 
  document.write("me is "+ me);
  */
  
  
  
  /*
 var he={
 id:123,
 age:15,
 };
 
 document.write("we are  here "+ he.id);
 */
 
 
 
 /*
  $.ajax({  
        
		url:my_request_token_string,  
       // type:"get",
		dataType:'jsonp',  
        data:{
		//oauth_consumer_key:  'zrB43B3MSYDfY3kkK6',
		//oauth_consumer_secrete:'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7',
		formate: "json",
		},  
       jsonp:'callback',  
		//jsonpCallback:"callback",
        success:function(data) {  
            console.log(data);
        },  
        
    });  
	*/




/*
jQuery.getJSON(my_request_token_string+'&callback=?', 
function(data) {
    alert("data: " + data);
});
*/



/*


var my_request_token_string10="https://bitbucket.org/api/1.0/oauth/request_token?"
+"oauth_signature_method="+myoauth_data.oauth_signature_method+"&"
+"oauth_version="+myoauth_data.oauth_version+"&"
+"oauth_timestamp="+myoauth_data.oauth_timestamp+"&"
+"oauth_signature="+'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7%26'+'&'
//+'oauth_consumer_key='+myoauth_data.oauth_consumer_key+'&'
+'oauth_nonce='+myoauth_data.oauth_nonce+'&'
+'oauth_callback='+'http%3A%2F%2Flocal%3Fdump';

$.ajax({
          type: 'get',
          url: my_request_token_string10,
          
		 // dataType: "jsonp",
          //jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
         // jsonpCallback:"callback",//自定义的jsonp回调函数名，默认未jquery自动生成的随机函数名，也可以写“?”jquery会自动处理
         data:{
		// oauth_signature_method:   myoauth_data.oauth_signature_method,
		// oauth_version:  myoauth_data.oauth_version,
		 //oauth_timestamp:myoauth_data.oauth_timestamp,
		 //oauth_signature:'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7%26',
		 oauth_consumer_key: 'zrB43B3MSYDfY3kkK6',
		
		 //oauth_nonce: myoauth_data.oauth_nonce,
		// oauth_callback: 'http%3A%2F%2Flocal%3Fdump',
		 
		 },
		  success: function(o){
              alert("success");
              console.log(o);
          }
    });
*/

/*
  $.getJSON("http://apis.juhe.cn/idcard/index?callback=?",
            {
                "cardno" : '789',
                "dtype" : "jsonp",
                "key" : "3d6f145566cf943bc8c19fc54f1090db"
            }, function(data) {
               document.write('we get it ');  
            document.write('data.resultcod '+data.resultcode);  
			});  
          

	/*
	
	$.getJSON("http://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new",
            {
            
            }, function(data) {
               document.write('randum numb is ' + data);  
            });  
     
	 */
	 
	 
/*
	 
	 
	 var url_getjson='http://bitbucket.org/api/1.0/oauth/request_token?callback=?';
	 
	 var data_getjson={
	 
	 'oauth_signature_method':  myoauth_data.oauth_signature_method,
'oauth_version':    myoauth_data.oauth_version,
'oauth_timestamp':  myoauth_data.oauth_timestamp,
'oauth_signature':  'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7&',
'oauth_consumer_key':  myoauth_data.oauth_consumer_key,
'oauth_nonce':    myoauth_data.oauth_nonce,
'oauth_callback':  'http://local?dump',
	// "dtype" : "jsonp",
'oauth_consumer_secrete': 'ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7'	,
	}
	 
	 
    $.getJSON(url_getjson,
            
             data_getjson,
            function(data) {
               document.write('randum numb is ' + data);  
            }
			
			
			)			

*/


/*
 $.getJSON("http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?",
            {
                
            }, function(data) {
             
            document.write('placeName '+data.placeName);  
			});
*/

	/*		
	$.getJSON(my_request_token_string+'&callback=?',
            {
                
            }, function(data) {
             
            document.write('our target '+data);  
			});
	*/
	
	
	


	
	
	/*
	 $.ajax({  
        url:my_request_token_string,  
        dataType:'jsonp',  
        data:JSON.stringify({data:"test"}),  
        jsonp:'callback',  
        success:function(result) {  
			document.write('result is '+result);
		},  
        
		 contentType:
		 //"application/json; charset=utf-8",
		'application/x-www-form-urlencoded',
		//'multipart/form-data',
		
		//"application/json; charset=utf-8",
		
		//'text/javascript',
		
		Accept: 'application/json; charset=utf-8' ,
		
		headers: {
		'contentType':   
		//'multipart/form-data',  
		//'application/x-www-form-urlencoded', 
		//'application/json',
		//'text/plain',
		//'application/javascript',
		//'application/jsonp',
		'text/javascript',
		//'text/html',
		Accept: 'text/javascript'  ,
		
		
		
		
		},
		
		

});  
	
*/



/*
			
		var request = createCORSRequest( "post", my_request_token_string );
if ( request ){
    // Define a callback function
    request.onload = function(data){
	document.write('our data is '+ data);
	};
    // Send request
    request.send();
}	

*/			
	
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('post',my_request_token_string,false);
	xmlhttp.send(null);
	xmldoc=xmlhttp.responseText;
document.write(xmlhttp.responseText);

		
			
			}





