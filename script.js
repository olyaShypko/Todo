window.onload = function() {

  var all_list = [];
  if(localStorage.getItem('text') !=undefined){
    all_list = JSON.parse(localStorage.getItem('text'));
    out();
  }
  document.getElementById("add").onclick = function() {
    var note = document.getElementById("note").value;

    var list = {};
    list.text = note;
    list.check = false;
    var i = all_list.length;
    all_list[i] = list;
    console.log("note",all_list);
    out();
    localStorage.setItem("text",JSON.stringify(all_list));
  }

  function out(){
    var out = "";
    for(var key in all_list){
      if(all_list[key].check == true){
        out += "<input type = 'checkbox' checked>"
      }else{
        out += "<input type = 'checkbox' >"
      }
      out += all_list[key].text + '<br>'
    }
    document.getElementById("show_notes").innerHTML = out;
  }
}
