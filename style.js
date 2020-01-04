const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    //if the shift key is pressed and hold down
    //also check if the user is clicking on the check boxes
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every single checkbox

        checkboxes.forEach(checkbox => {
            //console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));