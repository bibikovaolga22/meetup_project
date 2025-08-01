const eventsContainer = document.querySelector(".events_list");
const desktopSearch = document.querySelector(".desktop_nav_container .input1");
const mobileSearch = document.querySelector(".mobile_nav_container form");

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
  timeZoneName: "short",
};

function renderEvents(eventList) {
  const ul = document.createElement("ul");
  eventsContainer.textContent = "";
  eventList.forEach((event) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const imageContainer = document.createElement("div");
    const span = document.createElement("span");
    const eventType = document.createElement("div");
    eventType.classList.add("online_event");
    const icon = document.createElement("img");
    icon.src = "/assets/images/icons/online_event.svg";
    const text = document.createElement("h4");
    text.textContent = "Online Event";
    eventType.append(icon, text);
    imageContainer.classList.add("image_container");
    imageContainer.style.backgroundImage = `url(${event.image})`;
    p.textContent = event.date.toLocaleString("en-US", options);
    h3.textContent = event.title;
    if (event.type === "offline") {
      span.textContent = event.category + ` (${event.distance} km)`;
    } else {
      span.textContent = event.category;
      imageContainer.append(eventType);
    }
    div.append(p, h3, span);
    li.append(imageContainer, div);
    ul.append(li);
  });
  eventsContainer.append(ul);
}

renderEvents(eventsStore);

function filterType(select) {
  const value = select.value;
  if (value === "any_type") {
    renderEvents(eventsStore);
  } else if (value === "online") {
    const onlineEvents = eventsStore.filter((event) => event.type === "online");
    renderEvents(onlineEvents);
  } else if (value === "offline") {
    const offlineEvents = eventsStore.filter(
      (event) => event.type === "offline"
    );
    renderEvents(offlineEvents);
  }
}
function filterDistance(select) {
  const value = select.value;
  if (value === "any_distance") {
    renderEvents(eventsStore);
  } else if (value === "five") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 5
    );
    renderEvents(filtered);
  } else if (value === "ten") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 10
    );
    renderEvents(filtered);
  } else if (value === "fifteen") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 15
    );
    renderEvents(filtered);
  } else if (value === "twenty-five") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 25
    );
    renderEvents(filtered);
  } else if (value === "fifty") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 50
    );
    renderEvents(filtered);
  } else if (value === "seventy-five") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 75
    );
    renderEvents(filtered);
  } else if (value === "hundred") {
    const filtered = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 100
    );
    renderEvents(filtered);
  }
}

function filterCategory(select) {
  const value = select.value;
  if (value === "any_category") {
    renderEvents(eventsStore);
  } else if (value === "social") {
    const filtered = eventsStore.filter((socialEvent) => {
      return socialEvent.category === "Social Activities";
    });
    renderEvents(filtered);
  } else if (value === "hobby") {
    const filtered = eventsStore.filter((socialEvent) => {
      return socialEvent.category === "Hobbies and Passions";
    });
    renderEvents(filtered);
  } else if (value === "health") {
    const filtered = eventsStore.filter((socialEvent) => {
      return socialEvent.category === "Health and Wellbeing";
    });
    renderEvents(filtered);
  } else if (value === "business") {
    const filtered = eventsStore.filter((socialEvent) => {
      return socialEvent.category === "Business";
    });
    renderEvents(filtered);
  } else if (value === "technology") {
    const filtered = eventsStore.filter((socialEvent) => {
      return socialEvent.category === "Technology";
    });
    renderEvents(filtered);
  }
}

desktopSearch.addEventListener("input", (e) => {
  const filterByTitle = eventsStore.filter((event) => {
    const value = e.target.value;
    const eventTitle = event.title;
    return eventTitle.toLowerCase().startsWith(value.toLowerCase());
  });
  renderEvents(filterByTitle);
});
mobileSearch.addEventListener("input", (e) => {
  const filterByTitle = eventsStore.filter((event) => {
    const value = e.target.value;
    const eventTitle = event.title;
    return eventTitle.toLowerCase().startsWith(value.toLowerCase());
  });
  renderEvents(filterByTitle);
});
