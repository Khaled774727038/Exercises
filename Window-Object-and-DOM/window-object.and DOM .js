var alertmsg= document.getElementById('alertMessage');
alertmsg.addEventListener("click",function(){
    window.alert("Hello World !")
})


var thename =window.prompt("Enter your name")
window.alert("Hello "+thename);

// 7-DOM Manipulation:
// 7-1
var divTextinhtml= document.getElementById("text");
var divScndBtn= document.getElementById('btn-1');
divScndBtn.addEventListener("click", function(){
divTextinhtml.textContent = "New text added by khaled " ;
});

// 7-2
function iT(){ 
    var item=document.createElement("li"); 
    item.textContent="New text";
    var toDoList = document.getElementById('for-list');
    toDoList.appendChild(item);
}
var addToListBtn = document.getElementById("btn-2")
addToListBtn.addEventListener("click", function(){
    iT()
    });
       //7-3 
    var linkdenImg= document.getElementById('linkden-img');
    var linkdenBtn= document.getElementById('linkden-btn');
    linkdenBtn.addEventListener("click", function(){
       changeImg() ;
        });
    function changeImg(){
        linkdenImg.src = "logo.png";
    }




    //7-4 
    function validateForm() {
        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (for demonstration purposes)
        if (username === 'khaled' && password === '12345') {
            document.getElementById('loginMessage').textContent = 'Login successful!';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password. Please try again.';
        }
    }