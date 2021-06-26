let arr=[];
let a=[];
let t=0;
function play(){
    for(let i=0;i<5;i++)
    {
        a[i]=t-arr[i];
    }
    let max=a[0];
    let min=a[0];
    for(let i=0;i<a.length;i++)
    {
        if(max<a[i]) {
            max=a[i];
        }
        else if(min>a[i]){
            min=a[i];
        }
    }
    document.write("Output : Max ="+max+", Min =  "+min+"<br>");
    document.write('<button><a href="' + document.referrer + '">Back</a></button>');
    }
function array(){
    for(let i=0;i<5;i++)
    {
    arr[i]=+ prompt("Input "+(i+1)+" : ");
    t=t+arr[i];
    }
    document.write("Mảng : "+arr+"<br>");
    play();
}
function random(){
for(let i=0;i<5;i++)
{
arr[i]=+ Math.floor(Math.random()*100);
t=t+arr[i];
}
document.write("Mảng : "+arr+"<br>");
play();
}
