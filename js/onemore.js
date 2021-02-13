// Event bubbling and capturing/ tricking are two ways of event propagation in the dom tree
// In case of nested elements, if any event occurs in the child
// will propagate to the parent element as well

// Imagine having three divs inside each other, grandparent div is the outermost and child is innermost

// EVENT BUBBLING
// if a child div is clicked, the onclickchild method will be called first,
// then it moves up to the hierarachy and goes till the end of the dom like onclickparent method
// will be called and then grandparent onclick method
// event is bubbling out the dom tree

// EVENT CAPTURING also known as EVENT TRICKLING
// opposite of event bubbling, trickling down
// it is capturing down the dom tree, all the methods will be called but in the opposite flow

// Params: type, callback method, useCapture bool argument
// on the basis of the value of 3rd argument the browser decides if event capture or bubbling will be used
// if true, the event captures down or trickles down the hierarchy
// if no value passed or falsy value is passed, the events will bubble up the hierarchy
// addEventListener('click', () => {}, useCapture)

// no 3rd argument, so events are bubbling up
// if child is clicked, the code below logs child clicked, parent clicked, grand clicked
// if parent is clicked, the code below logs parent clicked, grand clicked
// if grandparent is clicked, the code below logs grand clicked only
document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("grand clicked");
  });

document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("parent clicked");
  });

document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("child clicked");
  });

// 3rd argument is true, so events are trickling down
// if child is clicked, the code below logs grand clicked, parent clicked, child clicked
// if parent is clicked, the code below logs grand clicked, parent clicked
// if grandparent is clicked, the code below logs grand clicked only
document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("grand clicked");
  }, true);

document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("parent clicked");
  }, true);

document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("child clicked");
  }, true);

// the event propagation happens top-down the hierarchy
// capturing first, then bubbling
// prints grand, child and parent
document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("grand clicked");
  }, true); // capturing

document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("parent clicked");
  }, false); // bubbling

document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("child clicked");
  }, true); // capturing

// the event propagation happens top-down the hierarchy
// capturing first, then bubbling cycle means it will bubble up
// so it prints grand first because of capturing, and then child and parent in bubbling
document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("grand clicked");
  }, true); // capturing

document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("parent clicked");
  }, false); // bubbling

document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("child clicked");
  }, false); // bubbling


// STOP PROPAGATION
document.querySelector("#parent")
  .addEventListener("click", (e) => {
    console.log("parent clicked");
    // This will help us stop the propagation of the event, breaks the event triggering up or down
    e.stopPropagation();
  }, false);