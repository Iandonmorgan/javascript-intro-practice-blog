/* Use JavaScript to obtain a reference to the first section with the
class of article_header and change its text with the textContent property
to "Welcome to the {insert your name here} blog" */

document.querySelector(".article__header").textContent = "Welcome to the Landon Morgan blog";

/*
Use JavaScript to obtain a reference to all article__header elements
and change their classList property value to article__header important.
 */

const articleHeaderImportant = document.querySelectorAll(".article__header");
for (let i = 0; i < articleHeaderImportant.length; i++) {
        articleHeaderImportant[i].classList.add("important");
}

// Obtain a reference the element with a class of dashed and remove it.

const removeDashed = document.querySelector(".dashed");
removeDashed.classList.remove("dashed");

/* 
Obtain a reference the element with a class of article_footer
and add the class of goldenrod it.
*/

const articleFooterGolden = document.querySelector(".article__footer");
articleFooterGolden.classList.add("goldenrod");