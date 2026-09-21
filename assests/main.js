
const form = document.getElementById("userform");
const nameinput = document.getElementById("name");
const familyinput = document.getElementById("family");
const emailinput = document.getElementById("email");
const jobinput = document.getElementById("job");
const phoneinput = document.getElementById("phone");
const genderselect = document.getElementById("gender");
const modal = document.getElementById("modal");
const overaly = document.getElementById("overaly");

let people = [];

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log();


    const newperson = {
        name: nameinput.value.trim(),
        family: familyinput.value.trim(),
        email: emailinput.value.trim(),
        job: jobinput.value.trim(),
        phone: phoneinput.value.trim(),
        gender: genderselect.value
    }

    console.log(newperson);
})