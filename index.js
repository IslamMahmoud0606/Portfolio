function menu() {
    link_mdd.style.top = `0px`;
}

function closs() {
    link_mdd.style.top = `-1000px`;
}


function sendMail() {

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_u8tpfeg", "template_97n538g", params).then(function (res) {


        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        alert("success!");
    })

}


ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,

});


ScrollReveal().reveal('.me_par, .about_img, .mass', { origin: 'left' });
ScrollReveal().reveal('.img-icon, .about, .dess', { origin: 'top' });
ScrollReveal().reveal('.servces, .pro_box, .allBox', { interval: 100 });
