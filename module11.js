document.getElementById("page-title").textContent = "Upcoming Campus Events";

var cards = document.querySelectorAll(".event-card");
cards.forEach(function (card) {
  card.classList.add("highlight");
});

var name = document.getElementById("name").value;
document.getElementById("name-output").textContent = name;

var event = {
  title: "Campus Workshop",
  date: "November 5, 2026"
};

var card = document.createElement("div");
card.innerHTML = "<h3>" + event.title + "</h3><p>" + event.date + "</p>";
document.getElementById("event-list").appendChild(card);