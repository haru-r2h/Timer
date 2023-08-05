(function() {
    var start = new Date;
    start.setHours(18, 0, 0); // 6pm
  
    function pad(num) {
      return ("0" + parseInt(num)).slice(-2);
    }
  
    function timer() {
      var now = new Date;
      if (now > start) { // too late, go to tomorrow
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
      document.getElementById('time').innerHTML =
        hh + ":" + mm + ":" + ss;
      setTimeout(timer, 1000);
    }
  
    document.addEventListener('DOMContentLoaded', timer);
  })();