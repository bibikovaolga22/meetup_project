const eventsContainer = document.querySelector(".events_list");
const typeButton = document.querySelector(".type > button");
const distanceButton = document.querySelector(".distance > button");
const categoryButton = document.querySelector(".category > button");
const categoryContainer = document.querySelector(".category");
const eventType = document.querySelector(".event_type");
const anyType = document.querySelector(".any_type");
const online = document.querySelector(".online");
const offline = document.querySelector(".offline");
const distance = document.querySelector(".event_distance");
const distanceListItems = distance.children;
const eventCategory = document.querySelector(".event_category");

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
    id: 1,
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
    id: 2,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

console.log(eventsStore[0].date);

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
      span.textContent = event.category + `(${event.distance} km)`;
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

typeButton.addEventListener("click", () => {
  eventType.classList.toggle("active");
  anyType.addEventListener("click", () => {
    renderEvents(eventsStore);
    document.querySelector(".type button span").textContent = "Any type";
    eventType.classList.remove("active");
  });
  online.addEventListener("click", () => {
    const onlineEvents = eventsStore.filter((event) => event.type === "online");
    renderEvents(onlineEvents);
    document.querySelector(".type button span").textContent = "Online ";
    eventType.classList.remove("active");
  });
  offline.addEventListener("click", () => {
    const offlineEvents = eventsStore.filter(
      (event) => event.type === "offline"
    );
    renderEvents(offlineEvents);
    document.querySelector(".type button span").textContent = "Offline ";
    eventType.classList.remove("active");
  });
});

distanceButton.addEventListener("click", () => {
  distance.classList.toggle("active");
  distanceListItems[0].addEventListener("click", () => {
    renderEvents(eventsStore);
    distance.classList.remove("active");
  });
  distanceListItems[1].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 5
    );
    renderEvents(filteredFive);
    document.querySelector(".distance button span").textContent = "5 km";
    distance.classList.remove("active");
  });
  distanceListItems[2].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 10
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
  distanceListItems[3].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 15
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
  distanceListItems[4].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 25
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
  distanceListItems[5].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 50
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
  distanceListItems[6].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 75
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
  distanceListItems[7].addEventListener("click", () => {
    const filteredFive = eventsStore.filter(
      (event) => event.type === "offline" && event.distance <= 100
    );
    renderEvents(filteredFive);
    distance.classList.remove("active");
  });
});

// const categoriesList = eventsStore.map((event) => {
//   return event.category;
// });

// const newArr = ["Any", ...categoriesList];
// const newCategoriesList = [...new Set(newArr)];
// console.log(newCategoriesList);

// categoryButton.addEventListener("click", (event) => {
//   const ul = document.createElement("ul");
//   ul.classList.add("event_category");
//   newCategoriesList.forEach((event) => {
//     const li = document.createElement("li");
//     li.textContent = event;
//     ul.append(li);
//     ul.classList.add("active");
//     categoryContainer.append(ul);
//   });
//   const buttons = Array.from(document.querySelectorAll(".category ul li"));

//   buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       if (index === 0) {
//         renderEvents(eventsStore);
//       } else {
//         const filtered = eventsStore.filter((event) => {
//           return index === event.id;
//         });
//         renderEvents(filtered);
//       }
//       ul.textContent = "";
//     });
//   });
// });

categoryButton.addEventListener("click", (e) => {
  const items = document.querySelectorAll(".dropdown-item");
  console.log(items);
  eventCategory.classList.toggle("active");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.matches(".any")) {
        renderEvents(eventsStore);
      } else if (e.target.matches(".social")) {
        const filteredSocial = eventsStore.filter((socialEvent) => {
          return e.target.textContent === socialEvent.category;
        });
        renderEvents(filteredSocial);
      } else if (e.target.matches(".hobbies")) {
        const filteredHobbies = eventsStore.filter((hobbiesEvent) => {
          return e.target.textContent === hobbiesEvent.category;
        });
        renderEvents(filteredHobbies);
      } else if (e.target.matches(".health")) {
        const filteredHealth = eventsStore.filter((healthEvent) => {
          return e.target.textContent === healthEvent.category;
        });
        renderEvents(filteredHealth);
      } else if (e.target.matches(".business")) {
        const filteredBusiness = eventsStore.filter((businessEvent) => {
          return e.target.textContent === businessEvent.category;
        });
        renderEvents(filteredBusiness);
      } else if (e.target.matches(".technology")) {
        const filteredTechnology = eventsStore.filter((technologyEvent) => {
          return e.target.textContent === technologyEvent.category;
        });
        renderEvents(filteredTechnology);
      }
    });
  });
});
