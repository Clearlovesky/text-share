document.addEventListener('DOMContentLoaded', function () {  
    document.querySelector('.downlink').addEventListener('click', function () {  
        openApp() 
    }, false)  
}, false)  ;
function openApp(){  
    var ua = window.navigator.userAgent.toLowerCase();  
    //微信  
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){  
        window.location.href='downLoadForPhone';  
    }else{//非微信浏览器  
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {  
            var loadDateTime = new Date();  
            window.setTimeout(function() {  
                var timeOutDateTime = new Date();  
                if (timeOutDateTime - loadDateTime < 5000) {  
                    window.location = "http://app.hicloud.com/app/C100259119";//ios下载地址  
                } else {  
                window.close();  
                }  
            },2000);  
            window.location = "five://";  
          }else if (navigator.userAgent.match(/android/i)) {  
            var state = null;  
            try {  
                window.location = 'five://';  
                setTimeout(function(){  
                    window.location= "http://app.hicloud.com/app/C100259119"; //android下载地址  
  
                },500);  
            } catch(e) {}  
        }  
    }  
}  
document.addEventListener('DOMContentLoaded', function () {  
    document.querySelector('.downlink-1').addEventListener('click', function () {  
        openApp() 
    }, false)  
}, false);
