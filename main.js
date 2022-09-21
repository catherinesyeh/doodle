// save variables
const submit = $("#submit"); // submit button
const times = $(".time"); // current user's time slots
const choices = $("#times"); // time slot container
const edit = $("#edit"); // edit button
const date_button = $('#date-order'); // order by date button
const pop_button = $('#popular-order'); // order by vote button

// change UI to reflect current user's availability
times.click(function () {
    if (submit.hasClass("inactive")) {
        // allow user to submit if they've clicked at least once
        submit.removeClass("inactive");
    }
    if ($(this).hasClass("yes")) { // yes --> if need be (2nd click)
        $(this).removeClass("yes");
        $(this).addClass("maybe");
    } else if ($(this).hasClass("maybe")) { // if need be --> no (3rd click)
        $(this).removeClass("maybe");
    } else { // no --> yes (1st click)
        $(this).addClass("yes");
    }
})

// simulate availability submission
submit.click(function () {
    window.alert("Thanks for submitting your response! We'll email you when the organizer has chosen a time.")
    $(this).addClass("inactive"); // inactivate submit button and times container
    choices.addClass("inactive");
    edit.removeClass("inactive"); // activate edit option
})

// let user edit response
edit.click(function () {
    $(this).addClass("inactive"); // inactivate edit option
    choices.removeClass("inactive"); // acativate times container
})

// sort time slots by majority vote
pop_button.click(function () {
    // sort table rows by vote count (then date if applicable)
    tinysort('#times>.time', { attr: 'count', order: 'desc' }, { attr: 'ord' });
    tinysort('.counts>.count', { attr: 'count', order: 'desc' }, { attr: 'ord' });
    tinysort('#s1 .right>.status', { attr: 'count', order: 'desc' }, { attr: 'ord' });
    tinysort('#s2 .right>.status', { attr: 'count', order: 'desc' }, { attr: 'ord' });
    tinysort('#s3 .right>.status', { attr: 'count', order: 'desc' }, { attr: 'ord' });

    // change order by buttons
    $(this).addClass("selected");
    date_button.removeClass("selected");
})

// sort time slots by date
date_button.click(function () {
    // sort table rows by vote count (then date if applicable)
    tinysort('#times>.time', { attr: 'ord' });
    tinysort('.counts>.count', { attr: 'ord' });
    tinysort('#s1 .right>.status', { attr: 'ord' });
    tinysort('#s2 .right>.status', { attr: 'ord' });
    tinysort('#s3 .right>.status', { attr: 'ord' });

    // change order by buttons
    $(this).addClass("selected");
    pop_button.removeClass("selected");
})