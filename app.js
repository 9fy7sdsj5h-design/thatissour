let events = [];

fetch("events.json")
  .then(response => response.json())
  .then(data => {
    events = data;
    nextEvent();
  });

function nextEvent() {

    const item =
        events[Math.floor(Math.random() * events.length)];

    document.getElementById("eventText").innerText =
        item.event;

    document.getElementById("sourbertText").innerText =
        "🍋 Sourbert says: \"" + item.sourbert + "\"";
}
