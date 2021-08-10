/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//select all sections
const pageSections = document.querySelectorAll('section');
//create new fragment to store the List on it
let fragment = document.createDocumentFragment();
// select the unorder list
const ulist = document.querySelector('ul');

// build the nav


for(let section of pageSections)
{   //Build List 
    let newlist = document.createElement("li");
    // get value of data-nav of each section 
    let getSectionContent = section.getAttribute('data-nav');
    // newlist content = nav-bar
    newlist.innerText = getSectionContent;
    //append the listitem to the fragment 
    fragment.appendChild(newlist);
    //when user click on anylist item it`s scroll to the target section
    newlist.addEventListener('click', (event) => 
        {
        section.scrollIntoView({ 'behavior': 'smooth' });
        });

}
//appending the fragment to the Unorder List

ulist.appendChild(fragment);

// Set sections as active
//selecting all List item 
const listItem = document.querySelectorAll('li');
// when user scroll into view report 
window.addEventListener('scroll',function()
{   //looping all sections 
    for(let section of pageSections)
    {   // get the position of each section 
        const position = section.getBoundingClientRect();
        // check if the section on the top view 
        if (position.top < 300 && position.top > -8)
        {   // adding the active class to the target section 
            section.classList.add('your-active-class');
            // geting data-nav 
            let dataNavSection = section.getAttribute('data-nav');
            //looping all listitem 
            for(let item of listItem)
            {   //geting text content 
                const data = item.innerText;
                // check if the item text content is equal data-nav section
                if ( data === dataNavSection)
                {   //adding active class to listitem which is it`s text content = data-nav section
                    item.classList.add('your-active-class');
                }
                else
                {   //check if the list item contian the active claas while it`s not the target 
                    if (item.classList.contains('your-active-class'))
                    {   //remove the active class from other list items
                        item.classList.remove('your-active-class');
                    }
                }
            }
        }
        else
        {   //check if the other sections contian the active class
            if (section.classList.contains('your-active-class'))
            {   // remove the active class from other section which is not the target 
                section.classList.remove('your-active-class');
            }
        }
    }
});