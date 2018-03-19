$(".btn-github").hover(function () {
    $(".fa-github").toggleClass("resize");
});

$(".btn-linkedin").hover(function () {
    $(".fa-linkedin").toggleClass("resize");
});

$(".btn-facebook").hover(function () {
    $(".fa-facebook").toggleClass("resize");
});

function getprofile(){
    let gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let gitObject = JSON.parse(this.responseText);
      document.getElementById("profile").innerHTML = 
        `<div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">${gitObject.name}</h3>
        </div>
        <div class="panel-body">
            <ul>
                <a><li>${}</li></a>
                <a><li>${}</li></a>
                <a><li>${}</li></a>
            </ul>
        </div>
    </div>`;
    }
  };
  gitHubRequest.open("GET", "https://api.github.com/users/nguy4227/repos", true);
  gitHubRequest.send();
  }
  
  getprofile();