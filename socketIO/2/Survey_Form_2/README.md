# Survey with Socket.IO
1. Form doesn't submit
2. Server emits form info to clinet 
3. server send random number 1-1000 with form info 


Before you start coding this, first outline or write down the steps of accomplishing this. Do this for EVERY nodeJS exercise as doing these steps will help you build your app easily.

For example:

Have the server render views/index.ejs that has the form for the user to fill out
The user fills out the form and submits

The form information is EMITTED to the server with the event name "posting_form"

The server listens for an event 'posting_form' and when this event gets triggered, organizes all the emitted information to form a single message and sends this single message with the event called 'updated_message'. It also EMITs an event called 'random_number' with random number between 1-1000.

The client listens for an event called 'random_number' and when this event gets triggered, shows the number in the HTML.

The client listens for an event called 'updated_message' and when this event gets triggered, displays the message somewhere in the HTML

Outlining these steps BEFORE YOU CODE, will make it so much easier to build your app. Again, there's not just one right way to build your app as you could build the same app using different steps but outlining what you plan to do first will increase your efficiency.