
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const lists = document.getElementById("lists");
const useReset = document.getElementById("useReset");


btn.addEventListener("click", function () {
    const val = inputText.value.trim();

    if (!val) {
        alert("Enter something");
        return;
    }
    const li = document.createElement("li");
    //This creates a new <li> element in memory (not on screen yet)
    li.innerHTML = val;
    //This inserts the user input inside <li>
    //innerHTML treats value as HTML
    lists.appendChild(li);
    //This attaches <li> to <ul> (or <ol>)
    inputText.val = "";
    //Resets the input box after adding item
    useReset.reset();
});

lists.addEventListener("click", delegationLists);
function delegationLists(event) {
    //The browser passes an event object containing details about the click.

    if (event.target.tagName === "LI") {
        // Ensures:
        // // Only <li> items are handled
        // // Clicks on <ul> or other elements are ignored
        // // tagName is ALWAYS uppercase → "LI"
        event.target.style.backgroundColor = "yellow";
        console.log("Clicked:", event.target.innerHTML);
    }
}