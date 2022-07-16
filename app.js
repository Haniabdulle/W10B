
// Grabing the first h1 tag and changing styling and color to pink using innerhtml //

let first_h1 = document.querySelector("h1");
first_h1.style.color = "pink";
first_h1[`innerHTML`] += ` Innerhtml lets see if this works`;

// Grabbing element by id and changing p tag to blue //

blue_p = document.getElementById("blue_text");
blue_p.style.color = "blue"; {

}
// Grabbing elements by class name and changing the color to green
green_ps=document.getElementsByClassName("green-p");
for(let i=0; i<green_ps.length;i++){
    green_ps[i].style.color="green";
} 

// Grabbing the link tag and nesting a link  //
let footer = document.querySelector(`footer`);
footer[`innerHTML`]  += `<a href="#">Link</a>`



// Grabbing all h1 tags and changing content using outerhtml //
let change = document.querySelectorAll(`h1`);
for(i=0; i<change.length; i++){
change[i][`outerHTML`] = `<h3> Byeeeeee old content </h3>`;
}
