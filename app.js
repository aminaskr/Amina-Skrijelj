var slider_img=document.querySelector('.as1');
var images=['as1.PNG','as2.PNG','as3.JPG','as4.JPG' ];
var i=0;
function prev(){

    if(i<=0)i=images.length;

    i--;
    return setImg();

}function next(){
    if(i>=images.length -1)i=-1;

    i++;
    return setImg();

}

function setImg(){
    return slider_img.setAttribute('src','images/' + images[i])};