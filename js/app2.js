/* pageSections.forEach((sec, index) =>
{
    // Build menu

    //Created New List for each Section on the page
    let newLI = document.createElement("li");
    // getSectionContent is variable have the value of data-nav
    let getSectionContent = sec.getAttribute('data-nav');
    //this step to give every List item
    newLI.innerText = getSectionContent;
    // appending the newlist to the fragment to enhancing the perfromance
    fragment.appendChild(newLI);
    //check the click on newlist scroll to the target section
    // Scroll to section on link click
    newLI.addEventListener('click', (event) =>
        {
        // event.preventDefault();
        sec.scrollIntoView({ 'behavior': 'smooth' });
        });

});
 */


/* window.addEventListener('scroll',()=>
    {
        pageSections.forEach((sec)=>
            {
                //get section positions
                const loctaion = sec.getBoundingClientRect();
                // check the section top view report
                if(loctaion.top > -10 && loctaion.top < 300)
                {
                    // Add class 'active' to section when near top of viewport
                    sec.classList.add ('your-active-class');
                    //to get data-nav of active section to find the active listItem
                    const linkData = sec.getAttribute('data-nav');
                    //looping on all listItem which
                    listItem.forEach((item)=>
                    {
                        //to get text content of getSectionContent
                        const data = item.innerText;
                        //comparing the text content of item to data-nav of active section
                        if (data === linkData)
                        {
                            // adding active class to the getSectionContent
                            item.classList.add('your-active-class');
                        }
                        else{
                                // check if the link contains class active class
                                if (item.classList.contains('your-active-class'))
                                {
                                //remove the active class from the getSectionContent
                                    item.classList.remove('your-active-class');
                                }
                            }
                    });

                }
                else{
                        //check if section have class "Active class"
                        if (sec.classList.contains('your-active-class'))
                        {
                        //Remove the "Active class from the section which inactive"
                         sec.classList.remove('your-active-class');
                        //console.log('active class removed');
                        }
                    }

            });
    } ); */