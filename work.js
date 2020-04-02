/*----- RUN 1 -----*/

function takeInputs()
{

var curr_age = parseInt(document.getElementById("currage").value);
var curr_sal = parseInt(document.getElementById("currsal").value);
var ret_with = parseInt(document.getElementById("retwith").value);
var I_growth = parseInt(document.getElementById("growth").value);
var infl =     parseInt(document.getElementById("inf").value);


var div = document.getElementById("retire"); div.innerHTML = "";
div.innerHTML += workcal(curr_age,curr_sal);

}

function workcal(curr_age,curr_sal)
{

var result = ""; 
var acount =curr_age+1;
var beg_bal = 0;
var inv_gr = 0;
var con_inc = ((10*curr_sal)/100);
var ret_inc = 84425;
var ret_draw = 84425;
var end_ret = 0;
   
    result += "<tr>";
    result += "<td>" + acount + "</td>";
    result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
    result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
    result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + Math.round((end_ret+con_inc).toFixed(2))+ "</td>";
    result += "</tr>";

		 while (acount < 64)
		 {
             
             beg_bal = beg_bal + inv_gr + con_inc;
             inv_gr = ((5*beg_bal)/100);
             con_inc = con_inc + ((2*con_inc)/100);
             end_ret = beg_bal + inv_gr + con_inc;

             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
			 result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
             result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + Math.round(end_ret.toFixed(2))+ "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bb = Math.round(end_ret);
    var ig = Math.round(((5*end_ret)/100));
    var ri = Math.round(ret_inc);
    var rd = Math.round(ret_draw);
    var er = Math.round(end_ret + ((5*end_ret)/100) - ret_inc);
    
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bb + "</td>";
    result += "<td> $ " + ig + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + ri + "</td>";
    result += "<td> $ " + rd + "</td>";
    result += "<td> $ " + er + "</td>";
    result += "</tr>";
    acount++;
    
         while (acount < 77)
		 {
             
             bb = er;
             ig = Math.round(((5*bb)/100));
             ri = ri + ((1.5*ri)/100);
             rd=ri;
             er = Math.round(bb + ig - ri);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + bb + "</td>";
			 result += "<td> $ " + ig + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri) + "</td>";
             result += "<td> $ " + Math.round(rd) + "</td>";
             result += "<td> $ " + er + "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bbal = Math.round(er);
    var igr = Math.round(((5*er)/100));
    var rin = Math.round(ri + ((1.5*ri)/100));
    var rdr = Math.round(rd);
    var eret = Math.round(bbal+igr);
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bbal + "</td>";
    result += "<td> $ " + igr + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + rin + "</td>";
    result += "<td> $ " + eret + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "</tr>";
    acount++;
    
        while (acount < 103)
		 {
             
             
             ri = ri + ((1.5*ri)/100);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + 0 + "</td>";
			 result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri + ((1.5*ri)/100)) + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
			 result += "</tr>";

			 acount++;
		 }

var canvas = document.getElementById('chart');
new Chart(canvas, {
  type: 'line',
  data: {
    labels: [0,26, 38, 45, 50, 54, 56, 59, 62, 63, 65, 67, 69, 71,74,77,78,79,80,90,100],
    datasets: [{
      label: 'Retirement Savings',
      borderColor: "#3cba9f",
      yAxisID: 'A',
      data: [0,6000, 105523, 214028, 323333, 435821, 502116, 616191, 750386, 800114, 908001, 826734, 731868, 621848, 424602,  90977, 0]
    }, {
      label: 'Retirement Withdrawals',
      borderColor: "#3e95cd",
      yAxisID: 'B',
      data: [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 84425, 86977, 89606, 92314, 93699, 96531, 97979, 99448,100940, 95526,0,0,0,0]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
      }]
    }
  }
});

		
    return result;
    
}


/*----- RUN 2 -----*/

function runnputs()
{

var curr_age = parseInt(document.getElementById("currage").value);
var curr_sal = parseInt(document.getElementById("currsal").value);
var ret_with = parseInt(document.getElementById("retwith").value);
var I_growth = parseInt(document.getElementById("growth").value);
var infl =     parseInt(document.getElementById("inf").value);


var div = document.getElementById("run2ret"); div.innerHTML = "";
div.innerHTML += runncal(curr_age,curr_sal);

}

function runncal(curr_age,curr_sal)
{

var result = ""; 
var acount =(curr_age+1);
var beg_bal = 0;
var inv_gr = 0;
var con_inc = ((10*curr_sal)/100);
var ret_inc = 84425;
var ret_draw = 84425;
var sssec = 34085;
var end_ret = 0;
   
    result += "<tr>";
    result += "<td>" + acount + "</td>";
    result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
    result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
    result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + Math.round((end_ret+con_inc).toFixed(2))+ "</td>";
    result += "</tr>";

		 while (acount < 64)
		 {
             
             beg_bal = beg_bal + inv_gr + con_inc;
             inv_gr = ((5*beg_bal)/100);
             con_inc = con_inc + ((2*con_inc)/100);
             end_ret = beg_bal + inv_gr + con_inc;

             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
			 result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
             result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + Math.round(end_ret.toFixed(2))+ "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bb = Math.round(end_ret);
    var ig = Math.round(((5*end_ret)/100));
    var ri = Math.round(ret_inc);
    var sec= Math.round(sssec);
    var rd = Math.round(ri-sssec);
    var er = Math.round(bb+ig-rd);
    
    /*end_ret + ((5*end_ret)/100) - ret_inc*/
    
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bb + "</td>";
    result += "<td> $ " + ig + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + ri + "</td>";
    result += "<td> $ " + sec + "</td>";
    result += "<td> $ " + rd + "</td>";
    result += "<td> $ " + er + "</td>";
    result += "</tr>";
    acount++;
    
         while (acount < 93)
		 {
             
             bb = er;
             ig = Math.round(((5*bb)/100));
             ri = ri + ((1.5*ri)/100);
             sec = sec + ((1.5*sec)/100);
             rd = ri - sec;
             er = Math.round(bb + ig - rd);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + bb + "</td>";
			 result += "<td> $ " + ig + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri) + "</td>";
             result += "<td> $ " + Math.round(sec) + "</td>";
             result += "<td> $ " + Math.round(rd) + "</td>";
             result += "<td> $ " + er + "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bbal = Math.round(er);
    var igr = Math.round(((5*er)/100));
    var rin = Math.round(ri + ((1.5*ri)/100));
    var sca = Math.round(sec + ((1.5*sec)/100));
    var rdr = Math.round(rd);
    var eret = Math.round(bbal+igr);
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bbal + "</td>";
    result += "<td> $ " + igr + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + rin + "</td>";
    result += "<td> $ " + sca + "</td>";
    result += "<td> $ " + eret + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "</tr>";
    acount++;
    
        while (acount < 103)
		 {
             
             ri = ri + ((1.5*ri)/100);
             sec = sec + ((1.5*sec)/100);
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + 0 + "</td>";
			 result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri + ((1.5*ri)/100)) + "</td>";
             result += "<td> $ " + Math.round(sec + ((1.5*sec)/100)) + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
			 result += "</tr>";

			 acount++;
		 }

var canvas = document.getElementById('char2t');
new Chart(canvas, {
  type: 'line',
  data: {
    labels: [0,26, 38, 45, 50, 54, 56, 59, 62, 63, 65, 79,86,90,94,100,103],
    datasets: [{
      label: 'Retirement Savings',
      borderColor: "#3cba9f",
      yAxisID: 'A',
      data: [0,6000, 105523, 214028, 323333, 435821, 502116, 616191, 750386, 800114, 908001,721691,488867,291142,32209,0,0 ]
    }, {
      label: 'Retirement Withdrawals',
      borderColor: "#3e95cd",
      yAxisID: 'B',
      data: [0,0,0,0,0,0,0,0,0,0,50340,62007,68818,73041,33819,0,0]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
      }]
    }
  }
});

		
    return result;
    
}


/*----- RUN 3 -----*/

function inputtakes()
{

var curr_age = parseInt(document.getElementById("currage3").value);
var curr_sal = parseInt(document.getElementById("currsal3").value);
var ret_with = parseInt(document.getElementById("retwith").value);
var I_growth = parseInt(document.getElementById("growth").value);
var infl =     parseInt(document.getElementById("inf").value);


var div = document.getElementById("retirerun3"); div.innerHTML = "";
div.innerHTML += runnworkcal(curr_age,curr_sal);

}

function runnworkcal(curr_age,curr_sal)
{

var result = ""; 
var acount =(curr_age+1);
var beg_bal = 0;
var inv_gr = 0;
var con_inc = ((12*curr_sal)/100);
var ret_inc = 84425;
var ret_draw = 84425;
var end_ret = 0;
   
    result += "<tr>";
    result += "<td>" + acount + "</td>";
    result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
    result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
    result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + Math.round((end_ret+con_inc).toFixed(2))+ "</td>";
    result += "</tr>";

		 while (acount < 64)
		 {
             
             beg_bal = beg_bal + inv_gr + con_inc;
             inv_gr = ((5*beg_bal)/100);
             con_inc = con_inc + ((2*con_inc)/100);
             end_ret = beg_bal + inv_gr + con_inc;

             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
			 result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
             result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + Math.round(end_ret.toFixed(2))+ "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bb = Math.round(end_ret);
    var ig = Math.round(((5*end_ret)/100));
    var ri = Math.round(ret_inc);
    var rd = Math.round(ret_draw);
    var er = Math.round(end_ret + ((5*end_ret)/100) - ret_inc);
    
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bb + "</td>";
    result += "<td> $ " + ig + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + ri + "</td>";
    result += "<td> $ " + rd + "</td>";
    result += "<td> $ " + er + "</td>";
    result += "</tr>";
    acount++;
    
         while (acount < 81)
		 {
             
             bb = er;
             ig = Math.round(((5*bb)/100));
             ri = ri + ((1.5*ri)/100);
             rd=ri;
             er = Math.round(bb + ig - ri);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + bb + "</td>";
			 result += "<td> $ " + ig + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri) + "</td>";
             result += "<td> $ " + Math.round(rd) + "</td>";
             result += "<td> $ " + er + "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bbal = Math.round(er);
    var igr = Math.round(((5*er)/100));
    var rin = Math.round(ri + ((1.5*ri)/100));
    var rdr = Math.round(rd);
    var eret = Math.round(bbal+igr);
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bbal + "</td>";
    result += "<td> $ " + igr + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + rin + "</td>";
    result += "<td> $ " + eret + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "</tr>";
    acount++;
    
        while (acount < 100)
		 {
             
             
             ri = ri + ((1.5*ri)/100);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + 0 + "</td>";
			 result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri + ((1.5*ri)/100)) + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
			 result += "</tr>";

			 acount++;
		 }

var canvas = document.getElementById('chartrun2');
new Chart(canvas, {
  type: 'line',
  data: {
    labels: [0,26, 38, 45, 50, 54, 56, 59, 62, 63, 65, 70,78,82,90,100],
    datasets: [{
      label: 'Retirement Savings',
      borderColor: "#3cba9f",
      yAxisID: 'A',
      data: [0,6000, 126627, 256833, 387999, 522985, 602539, 739430, 900463, 960173, 1089602, 910628, 433410,75596,0,0]
    }, {
      label: 'Retirement Withdrawals',
      borderColor: "#3e95cd",
      yAxisID: 'B',
      data: [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 84425, 90950,102454,79376,0,0]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
      }]
    }
  }
});

		
    return result;
    
}


/*----- RUN 4 -----*/

function runn4puts()
{

var curr_age = parseInt(document.getElementById("currage").value);
var curr_sal = parseInt(document.getElementById("currsal").value);
var ret_with = parseInt(document.getElementById("retwith").value);
var I_growth = parseInt(document.getElementById("growth").value);
var infl =     parseInt(document.getElementById("inf").value);


var div = document.getElementById("run4ret"); div.innerHTML = "";
div.innerHTML += runn4cal(curr_age,curr_sal);

}

function runn4cal(curr_age,curr_sal)
{

var result = ""; 
var acount =(curr_age+1);
var beg_bal = 0;
var inv_gr = 0;
var con_inc = ((12*curr_sal)/100);
var ret_inc = 84425;
var ret_draw = 84425;
var sssec = 34085;
var end_ret = 0;
   
    result += "<tr>";
    result += "<td>" + acount + "</td>";
    result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
    result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
    result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + Math.round((end_ret+con_inc).toFixed(2))+ "</td>";
    result += "</tr>";

		 while (acount < 64)
		 {
             
             beg_bal = beg_bal + inv_gr + con_inc;
             inv_gr = ((5*beg_bal)/100);
             con_inc = con_inc + ((2*con_inc)/100);
             end_ret = beg_bal + inv_gr + con_inc;

             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
			 result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
             result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + Math.round(end_ret.toFixed(2))+ "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bb = Math.round(end_ret);
    var ig = Math.round(((5*end_ret)/100));
    var ri = Math.round(ret_inc);
    var sec= Math.round(sssec);
    var rd = Math.round(ri-sssec);
    var er = Math.round(bb+ig-rd);
    
    /*end_ret + ((5*end_ret)/100) - ret_inc*/
    
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bb + "</td>";
    result += "<td> $ " + ig + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + ri + "</td>";
    result += "<td> $ " + sec + "</td>";
    result += "<td> $ " + rd + "</td>";
    result += "<td> $ " + er + "</td>";
    result += "</tr>";
    acount++;
    
         while (acount < 100)
		 {
             
             bb = er;
             ig = Math.round(((5*bb)/100));
             ri = ri + ((1.5*ri)/100);
             sec = sec + ((1.5*sec)/100);
             rd = ri - sec;
             er = Math.round(bb + ig - rd);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + bb + "</td>";
			 result += "<td> $ " + ig + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri) + "</td>";
             result += "<td> $ " + Math.round(sec) + "</td>";
             result += "<td> $ " + Math.round(rd) + "</td>";
             result += "<td> $ " + er + "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    

var canvas = document.getElementById('char4t');
new Chart(canvas, {
  type: 'line',
  data: {
    labels: [0,26, 38, 45, 50, 54, 56, 59, 62, 65, 86,90,94,100],
    datasets: [{
      label: 'Retirement Savings',
      borderColor: "#3cba9f",
      yAxisID: 'A',
      data: [0,7200, 126627, 256833, 387999, 522985, 602539, 739430, 900463, 1089602,  994799, 906106, 779702, 498556]
    }, {
      label: 'Retirement Withdrawals',
      borderColor: "#3e95cd",
      yAxisID: 'B',
      data: [0,0,0,0,0,0,0,0,50340,68818,73041,73041,77523,84767]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
      }]
    }
  }
});

		
    return result;
    
}

/*----- x END x -----*/