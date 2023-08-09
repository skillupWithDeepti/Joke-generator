let array;
array=[

    "Patient: Doctor! You've got to help me! Nobody ever listens to me. No one ever pays any attention to what I have to say.",

    "Headmaster: I've had complaints about you,Johnny, from all your teachers. What have you been doing",
    
    "Bank Teller: How do you like the money?English Student: I like it very much.",

    "Why do you take baths in milk?I can't find a cow tall enough for a shower.",

    "Teacher: Do you have trouble making decisions?Student: Well...yes and no.",

    "Father: What did you do today to help your mother?Son: I dried the dishes Daughter: And I helped pick up the pieces.",

    "I used to be a werewoolf...But I'm much better noooooooooooow !",

    "In a restaurant:Customer: Waiter, waiter! There is a frog in my soup!!!Waiter: Sorry, sir. The fly is on vacation.",

    "Do you know what really amazes me about you?No.What?Oops.Sorry. I was thinking about someone else!",
];

const newDiv=document.getElementById('card');
function func(){
    newDiv.innerHTML=array[(Math.floor(Math.random()*array.length))];
}