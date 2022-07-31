var date = document.getElementById('date');
var inputnumber = document.getElementById('number');
var btn = document.getElementById('btn');

var months = [
    {
        'month': 'January',
        'days': 31
    },
    {
        'month': 'Febraury',
        'days': 28
    },
    {
        'month': 'March',
        'days': 31
    },
    {
        'month': 'April',
        'days': 30
    },
    {
        'month': 'May',
        'days': 31
    },
    {
        'month': 'June',
        'days': 30
    },
    {
        'month': 'July',
        'days': 31
    },
    {
        'month': 'August',
        'days': 31
    },
    {
        'month': 'September',
        'days': 30
    },
    {
        'month': 'October',
        'days': 31
    },
    {
        'month': 'November',
        'days': 30
    },
    {
        'month': 'December',
        'days': 31
    }
];
console.log(months);

btn.addEventListener('click', retirement);

function retirement() {
    var dob = new Date(date.value);
    var year = dob.getFullYear();
    var ageyears = parseInt(inputnumber.value) + parseInt(year);

    var totalmonths = '';
    var totaldays = '';
    var totalyears = '';

    for (i = 0; i < months.length; i++) {
        //console.log(i);
        totalmonths += '<td colspan="' + months[i].days + '">' + months[i].month + '</td>';


        for (k = 1; k <= months[i].days; k++) {
            //console.log(k);
            totaldays += '<td id="color1">' + k + '</td>';
        }
    }
    for (j = year; j <= ageyears; j++) {
       // console.log(j);
        totalyears += '<tr id="color"><td>' + j + '</td>' + totaldays + '</tr>';
    }

    var monthrow = '<tr><td></td>' + totalmonths + '</tr>';
    //console.log(monthrow);
    //console.log(totalmonths);
    //console.log(totaldays);
    //console.log(totalyears);
    var table = document.getElementById('table');
    table.innerHTML = monthrow + totalyears;



 var nowdate=new Date();
 var nowyear=nowdate.getFullYear();
 //var color=document.getElementById('color');

 for(var i=year; i<=nowyear; i++){
    console.log(i);
 
     if(year>nowyear){
        
        console.log(table.style.backgroundColor='red'); 
     }
     if(year<nowyear){
        
         console.log(table.style.backgroundColor='green'); 
     }
     if(year==nowyear)
     
        console.log(table.style.backgroundColor='yellow'); 
     }
    }

 
 


