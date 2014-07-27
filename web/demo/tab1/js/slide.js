//tab js
function setTab(cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById("tabtit"+i);
  var con=document.getElementById("cont"+i);
  if(menu!=null)
  	menu.className=(i==cursel?"hoverLi":"");
    con.style.display=(i==cursel?"block":"none");
 }}