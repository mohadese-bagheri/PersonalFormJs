
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

// افزودن کاربر جدید به لیست
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


// دکمه نمایش همه کاربران
document.getElementById("showmodal").addEventListener("click",
    () => {
        if (people.length == 0) { modal.innerHTML = `<h3> هنوز کاربری ثبت نشده است.</h3>`; }
        else {
            modal.innerHTML = `<h3> لیست کاربران :</h3> `;
            const list = document.createElement("ul");


            //  people.map((person, index) =>  اگر از map استفاده شود حتما باید return داشته باشیم. 
            // استفادع میکنیم برای همین از foreach 
            people.forEach((person, index) => {

                const { name, family, email, job, phone, gender } = person;
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
       handleshowmodal();
    }
)


// بستن مدال با کلیلک روی پس زمینه
overaly.addEventListener("click", () => {
    overaly.style.opacity = "0";
    overaly.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";

});


// پیدا کردن با ایمیل
document.getElementById("findByEmail").addEventListener("click",
    () => {
        const emailToFind = prompt("ایمیل مورد نظر را وارد کنید!");
        const person = people.filter(p => p.email === emailToFind.trim())

        if (person.length > 0) {
            person.forEach((person, index) => {
                const { name, family, email, job, phone, gender } = person;
                modal.innerText = ` ${index + 1} . ${person.name}  ${person.family}
                ایمیل: ${person.email}
                جنسیت: ${person.gender || `---`}
                شغل: ${person.job || `---`}
                شماره تماس: ${person.phone || `---`}`;
            });

        } else {
            modal.innerHTML = `فرد مورد  نظر پیدا نشد.`;
        }

        handleshowmodal();
    }
)

// آیا همه شاغلند 
document.getElementById("checkIFAllHaveJob").addEventListener(
    "click", () => {
        const allhavejob = people.every(p => p.job.trim() !== "");
        modal.innerHTML = allhavejob
            ? " <p> ✅همه افراد دارای شغل هستند</p>"
            : " <p> ❌ همه افراد دارای شغل نیستند</p>";


        handleshowmodal();
    }
)

// آیا حداقل یک مرد هست؟
document.getElementById("checkIFAnyHasMen").addEventListener(
    "click", () => {

        const hasmen = people.some(p => p.gender === "مرد");

        modal.innerHTML = hasmen
            ? " <p>حداقل یک آقا ثبت شده است. </p>"
            : " <p>هیچ آقایی ثبت نشده است❌ </p>";

        handleshowmodal();

    }
)

const handleshowmodal = () => {
    overaly.style.opacity = "1";
    overaly.style.visibility = "visible";

    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}