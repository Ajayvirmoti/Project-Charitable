var res = "";
    var email ="";
    var Phone = "";
    var Text = "";
// var S = document.querySelector('#newtask input').value;
document.querySelector('#submit').onclick = function () {
    res = document.querySelector('#name').value
    email = document.querySelector('#email').value
    Phone = document.querySelector('#phone').value
    Text = document.querySelector('#text').value
   
    // console.log(res);
    // console.log(email);
    // console.log(Phone);
    // console.log(Text);
    const submitOrderHandler = async (userDat) => {
            const response = await fetch(
                "https://charitable-7d453-default-rtdb.firebaseio.com/credentials.json",
                {
                    method: "POST",
                    body: JSON.stringify({ name: res , email: email, Phone, Text}),
                }
            );
        };
        document.querySelector('#tasks').innerHTML += `
       <p> Done<p>
    `;

        submitOrderHandler();
        window.location.reload();


}