let event1 = "";
let inputDelay = 0;
let processingTime = 0;
let presentationDelay = 0;
let total = 0;

let interactionEntries = [];



function perfObserver(list, observer, droppedEntriesCount) {
  console.log({ droppedEntriesCount })
  list.getEntries().forEach((entry) => {

    const item = {
      name: entry.name,
      presentationDelay: entry.processingStart + entry.duration - entry.processingEnd,
      processingTime: entry.processingEnd - entry.processingStart,
      inputDelay: entry.processingStart - entry.startTime,
      duration: entry.duration,
      startTime: entry.startTime
    }
    interactionEntries.push(item)
  });
  console.log(interactionEntries)
  renderInteractionEntries(interactionEntries);

}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "event" });

function renderInteractionEntries(interactionEntries) {
  document.querySelector("#table-container").innerHTML =
    `
     <table id="event-table">
    <thead>
      <tr>
        <th>Time</th>
        <th>Event</th>
        <th>Input Delay</th>
        <th>Processing Time</th>
        <th>Presentation Delay</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
    ${interactionEntries.length === 0 ? `<tr>
        <td colspan="5">Interact with the page to see interactions</td>
      </tr>`: ""}
    ${interactionEntries.filter(e => {
      return e.name !== "beforeinput" && e.name !== "mouseup" && e.name !== "mousedown"
        && e.name !== "pointerover" && e.name !== "pointerleave" && e.name !== "pointerenter" && e.name !== "gotpointercapture"
        && e.name !== "pointerout"
        && e.name !== "mouseover"
        && e.name !== "mouseout"&& e.name !== "mouseenter"

    }).slice(-5).reverse().map(entry => {
      return `<tr id="row1">
        <td id="event1">${(Math.round(entry.startTime / 1000 * 10) / 10).toFixed(1)}</td>
        <td id="event1">${entry.name}</td>
        <td>${formatMs(entry.inputDelay)}</td>
        <td>${formatMs(entry.processingTime)}</td>
        <td>${formatMs(entry.presentationDelay)}</td>
        <td>${formatMs(entry.duration)}</td>
      </tr>`
    }).join("")
    }
      
    </tbody>
  </table>
  `
}

function formatMs(ms) {
  return Math.round(ms) + " ms"
}

renderInteractionEntries([])


/* 

- center each example within the hr wrappers (so same spacing at top and at bottom)
- make left of button align with left of h2
*/
