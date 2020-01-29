document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

function onDOMContentLoaded() {
    // submits login form
    function sub() {
        document.getElementById("form").submit();
    }

    // submits item to grocery list
    function submitText() {
        document.getElementById("submit-text").submit();
    }

    // function deleteItems() {
    //     document.getElementById("submit-deleted-items").submit();
    // }

    // adds item to grocery list
    function addText() {
        // create text field
        const text_field = document.createElement("input");
        text_field.setAttribute("type", "text");
        text_field.setAttribute("name", "added-text");

        // create submit button for text field
        const submit_text = document.createElement("button");
        submit_text.setAttribute("id", "submit-text");
        submit_text.innerHTML = 'submit';

        // add text field and submit button to html
        document.getElementById('new-item-form').append(text_field, submit_text);

        // gives submit button functionality
        document.getElementById('submit-text').onclick = submitText;
    }

    // adds delete boxes for items in grocery list the first time button is pressed, then deletes them the second time it's pressed
    function deleteItems() {
        // the first time we press delete items check boxes are added
        if (delete_boxes()) {
            let list = document.getElementById('grocery-list').getElementsByTagName('li');

            for (var i = 0, len = list.length; i < len; i++) {
                // create check box
                delete_box = document.createElement("input");
                delete_box.setAttribute("type", "checkbox");
                delete_box.setAttribute("name", list[i].innerHTML);

                list[i].append(delete_box);
            }
        }
        // the second time the delete items button is pressed the items checked are deleted
        else {
            // if (confirm('Are you sure you want to delete checked items?')) {
            if (true) {
                // create list of boxes for each of our list items
                let boxes = document.getElementById('grocery-list').getElementsByTagName('input');
                // boxes.setAttribute('name', 'boxes');
                console.log(boxes[0]);
                // create list from our current list items
                // let list = document.getElementById('grocery-list').getElementsByTagName('li');

                // create a list of our items we want deleted
                // let delete_items_list = document.createElement('datalist');
                // delete_items_list.setAttribute("id", "delete-items-list");

                // let delete_items_input = document.createElement('input');
                // delete_items_input.setAttribute("name", "delete-items-input");
                // delete_items_input.setAttribute("list", "delete-items-list");

                // for (let i = 0; i < boxes.length; i++) {
                //     // each checked box will add the corresponding item to our delete list
                //     if (boxes[i].checked) {
                //         console.log(list[i].innerHTML);
                //         let clone = list[i].cloneNode(true);
                //         // clone.removeChild('input');
                //         delete_items_list.append(clone);

                        // var item = document.createElement('input');
                        // item.setAttribute("name", "delete_item");
                        // item.append(c)

                //     }
                // }

                // let delete_items_input = document.createElement('input');
                // delete_items_input.setAttribute("name", "delete-items-input");
                // delete_items_input.setAttribute("list", "delete-items-list");

                // we need to append our list to our form tag to grab the post data in our views.py
                let form = document.getElementById('new-item-form');
                for (let i = 0; i < boxes.length; i++) {
                    clone = boxes[i].cloneNode(true);
                    form.append(clone);
                }
                // document.getElementById('new-item-form').append(boxes);
                console.log(form);
                
                // create submit button for text field
                const delete_items_button = document.createElement("button");
                delete_items_button.setAttribute("id", "submit-deleted-items");
                delete_items_button.setAttribute("type", "submit");
                delete_items_button.innerHTML = 'submit';
                document.getElementById('new-item-form').append(delete_items_button);
                // document.getElementById('submit-deleted-items').onclick = deleteItems;
            }

        }
    }

    // closure that reverses bool value
    function reverseBool() {
        bool = false;
        return function() {
            return bool = !bool;
        }
    }

    // button for submitting login form
    if (document.getElementById('submit-login') != null) {
        document.getElementById('submit-login').onclick = sub;
    }

    // button for adding item text to grocery list
    if (document.getElementById('add-text') != null) {
        document.getElementById('add-text').onclick = addText;
    }

    // button for adding delete boxes of items in grocery list
    if (document.getElementById('delete-items') != null) {
        document.getElementById('delete-items').onclick = deleteItems;
    }

    // initialize delete_boxes to false
    let delete_boxes = reverseBool();
}
