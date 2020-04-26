const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let today = document.querySelector("#weekday");
let monthday = document.querySelector("#monthday")
let month = document.querySelector("#month");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let ampm = document.querySelector("#ampm");
setInterval(() => {
  let now = new Date();
  let day = days[now.getDay()];
  let monthname = months[now.getMonth()];
  let notArmy = now.getHours() - 12;
  today.innerHTML = `${day}, `;
  monthday.innerHTML = `${now.getDate()} of `;
  month.innerHTML = monthname;
  if (now.getHours() > 12) {
    hour.innerHTML = notArmy;
    ampm.innerHTML = "PM"
  } else {
    hour.innerHTML = now.getHours();
    ampm.innerHTML = "AM";
  }
  minutes.innerHTML = now.getMinutes() + " ";
  if (now.getMinutes() < 10) {
    minutes.innerHTML = "0" + now.getMinutes();
  }
}, 1000)








/* actual to do list stuff */

const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");
const deleteButton = document.querySelectorAll("ul a");


const inputLength = () => input.value.length;

const removeItem = (event) => {
  event.target.parentNode.remove();

}

for (let buttons of deleteButton) {
  buttons.addEventListener("click", removeItem);
}

const newTask = () => {
  let v = input.value;
  let li = document.createElement("li");
  li.innerHTML = "<label><input type='checkbox'><i></i><span>" + v + "</span><a href='#'>–</a></label>";
  ul.appendChild(li);
  input.value = "";
  let button = document.querySelectorAll("ul a");
  let removeli = (event) => {
    event.target.parentNode.remove();
  }
  for (let one of button) {
    one.addEventListener("click", removeli);
  }

}

const addTaskEnter = (e) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    newTask();
  }
}

input.addEventListener("keypress", addTaskEnter);
