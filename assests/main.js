
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

    if (!newperson.name || !newperson.family || !newperson.email) {
        alert("لطفا فیلد های الزامی را پر کنید.");
    }

    people.push(newperson);
    form.reset();


    console.log(people);
})

document.getElementById("showmodal").addEventListener("click",
    () => {
        if (people.length == 0) { modal.innerHTML = `<h3> هنوز کاربری ثبت نشده است.</h3>`; }
        else {
            modal.innerHTML = `<h3> لیست کاربران :</h3> `;
            const list = document.createElement("ul");

            people.map((person, index) => {
                const li = document.createElement("li");
                li.innerText = ` ${index + 1} . ${person.name}  ${person.family}
                ایمیل: ${person.email}
                جنسیت: ${person.gender || `---`}
                شغل: ${person.job || `---`}
                شماره تماس: ${person.phone || `---`}`;
                list.appendChild(li);
            }

            )
            modal.appendChild(list);
        }
        overaly.style.opacity = "1";
        overaly.style.visibility = "visible";
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    }
)

overaly.addEventListener("click", () => {
    overaly.style.opacity = "0";
    overaly.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";

});