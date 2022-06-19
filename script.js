var params = new URL(location.href).searchParams
var xss = params.get('xss')
if(xss){
    document.body.innerHTML = xss;
}