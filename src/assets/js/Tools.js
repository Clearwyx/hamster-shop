export default{
  getTime: function (date){
    date = date || 0;
    var msTime = date;
    var hour = parseInt(msTime/ 60 / 60 % 24);
    var minute = parseInt(msTime / 60 % 60);
    var second = parseInt(msTime % 60);

    var time = {
      hour: (hour < 10 ? "0"+hour : hour),
      min: (minute < 10 ? "0"+minute : minute),
      sec: (second < 10 ? "0"+second : second)
    };
    return time;
  }
}
