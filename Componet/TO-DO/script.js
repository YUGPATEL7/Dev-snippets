
function openDatePicker() {
  flatpickr("#dateInput", { dateFormat: "Y-m-d" }).open();
}

function openTimePicker() {
  flatpickr("#timeInput", { enableTime: true, noCalendar: true, dateFormat: "H:i" }).open();
}


document.addEventListener("DOMContentLoaded", function () {
  displayNotes(); // Load notes when page loads
});

document.getElementById("submitButton").addEventListener("click", function () {
  let inputText = document.getElementById("userText").value.trim();
  let date = document.getElementById("dateInput").value;
  let time = document.getElementById("timeInput").value;

  if (inputText !== "" && date !== "" && time !== "") {
    let notes = JSON.parse(localStorage.getItem("Todo")) || [];

    let task = {
      text: inputText,
      date: date,
      time: time
    };

    notes.push(task);
    localStorage.setItem("Todo", JSON.stringify(notes));

    displayNotes();
    scheduleAlert(date, time, inputText);
  }

  document.getElementById("userText").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("timeInput").value = "";
});

function scheduleAlert(date, time, noteText) {
  let taskTime = new Date(`${date}T${time}`).getTime(); // Ensure correct format
  let currentTime = new Date().getTime();
  let timeDifference = taskTime - currentTime;

  if (timeDifference > 0) {
    // console.log(`✅ Alert set for "${noteText}" in ${timeDifference / 1000} seconds.`);
    setTimeout(() => {
      alert(`⏰ Reminder: "${noteText}" is due now!`);
    }, timeDifference);
  } else {
    console.log("🚫 The selected time has already passed. No alert set.");
  }
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("Todo")) || [];
  let notesContainer = document.querySelector(".notes");
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    notesContainer.innerHTML += `
      <div class="note">
        ${note.text} <span class="timestamp">${note.date}, ${note.time}</span>
        <button onclick="deleteNote(${index})">🗑️</button>
      </div>
    `;

    scheduleAlert(note.date, note.time, note.text); // Schedule alert for stored notes
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("Todo")) || [];
  notes.splice(index, 1);
  localStorage.setItem("Todo", JSON.stringify(notes));
  displayNotes();
}


const helpModal = document.getElementById('helpModal');
const closeHelp = document.getElementById('closeHelp');
const helpIcon = document.getElementById('helpIcon');

helpIcon.addEventListener('click', () => {
  helpModal.classList.remove('hidden');
});

closeHelp.addEventListener('click', () => {
  helpModal.classList.add('hidden');
});
