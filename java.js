function myFunction() {
  var date = new Date()
  hours = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();

  document.getElementById('clock').innerHTML = hours + ':' + minute + ':' + second;
}
setInterval(myFunction)



function myf() {
  var dat = new Date();
  date = dat.getDate();
  month = dat.getMonth();
  year = dat.getFullYear();

  document.getElementById('dat').innerHTML = date + '/' + month + '/' + year

}
setInterval(myf)