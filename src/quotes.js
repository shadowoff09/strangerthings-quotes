'use strict';

function guidGenerator() {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
const epoch = Math.round(new Date().getTime() / 1000) 

module.exports = [
    {
        "id": guidGenerator(),
        "quote": "Friends don’t lie.",
        "author": "Eleven",
    },
    {
        "id": guidGenerator(),
        "quote": "I’m going to my friends. I’m going home.",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "I’m a fighter. I’ve killed.",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "I saw you. In the rainbow room.",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "What is friend?",
        "author": "Chloe Decker"
    },
    {
        "id": guidGenerator(),
        "quote": "I’m the monster.",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "The gate… I opened it.",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "Mouth breather",
        "author": "Eleven"
    },
    {
        "id": guidGenerator(),
        "quote": "I will never, ever let anything bad happen to you ever again. Whatever’s going on in you, we’re gonna fix it.",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Maybe I am a mess, maybe I’m crazy, maybe I’m out of my mind! But God help me, I will keep these lights up until the day I die, if I think there’s a chance that Will’s still out there!",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "I don’t care if anyone believes me.",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Will wanted me to give him some space, so I’m giving him a few feet.",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "This is not a normal family.",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Well, I don’t know who’s been raising you, but I’m gonna get you some new crayons because it looks like he’s shooting cabbages.",
        "author": "Joyce Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "After Sara... I saw her too. And I heard her. I didn’t know what was real. And then I figured out that it was in my mind, and I had to pack all that away... otherwise I was gonna fall down a hole, that I couldn’t get out of.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Make mistakes, learn from them and when life hurts you, because it will, remember the hurt. The hurt is good. It means you’re out of that cave.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Nothing is gonna go back to the way that it was. Not really. But it’ll get better. In time.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "C-O-M-promise. Compromise? How ’bout that’s your word for the day, yeah? It’s something that’s kinda in-between, something like… half-way happy.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Feelings. The truth is, for so long, I'd forgotten what those even were. Ive been stuck in that place, in a cave, you might say. A deep, dark cave.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "You wanna go out in the world?! You better grow up! Grow the hell up!",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "If you don’t mind, for the sake of your poor old dad, keep the door open three inches.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Mornings are for coffee and contemplation.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "It’s Fabergé Organics. Use the shampoo and the conditioner, and when your hair’s damp—it’s not wet, okay? When it’s damp, do four puffs of the Farrah Fawcett spray.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Rule number two: only open the door, if you hear my secret knock.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "Just curious why all of a sudden you look like some MTV punk.",
        "author": "Jim Hopper"
    },
    {
        "id": guidGenerator(),
        "quote": "El, are you there? El? It’s me, it’s Mike. It’s day 352, 7:40 pm, I am still here. If you’re out there, say something... or give me a sign, I won’t, I won’t even say anything, I just... I want to know if you’re okay.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "I saw you guys laughing over there and I think that’s a real messed-up thing to do.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "Hey, well, if we're both going crazy, then we'll go crazy together, right?",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "Blank makes you crazy.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "If we are both going crazy, then we will go crazy together.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "Mom! Just get-off-the-phone! How many times?",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "If anyone asks where I am, I’ve left the country.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "No, El, you’re not the monster. You saved me. Do you understand? You saved me.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "I asked if you wanted to be my friend. And you said yes. You said yes. It was the best thing I’ve ever done.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "We’re not even in the game; we’re on the bench.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "Maybe you thought you were helping, but you weren’t. You hurt me, do you understand? What you did sucks.",
        "author": "Mike Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "She is our friend and she is crazy.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "You always say we should never stop being curious, to always open any curiosity door we find.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "That’s right, she will not be able to resist these pearls.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Okay, it’s official. I’m never having kids.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "She is hotter than phoebe’s cats.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Just wait till we tell Will that Jennifer Hayes was crying at his funeral.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Why are you keeping this curiosity door locked?",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "I am on a curiosity voyage, and I need my paddles to travel. These books…these books are my paddles.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "You know, you’re really no help at all, you know that?",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "We never would’ve upset you if we knew you had superpowers.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Lando",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Touch my butt, I don’t care.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "Our friend has superpowers, and she squeezed your tiny bladder with her mind.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "When I become rich and famous for this one day, don’t come crawling back, saying, oh, my God, Dustin, I’m so sorry for being mean to you back in 8th grade.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "I told you a million times my teeth are coming in. It’s called cleidocranial dysplasia.",
        "author": "Dustin Henderson"
    },
    {
        "id": guidGenerator(),
        "quote": "You’re just not nimble enough, but you’ll get there someday.",
        "author": "Lucas Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "We have a lot of rules in our party, but the most important is, ‘Friends don’t lie.’ Never ever. No matter what.",
        "author": "Lucas Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "When do you feel good about anything?",
        "author": "Lucas Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "She helped just enough so she could get what she wants. Food and a bed. She’s like a stray dog.",
        "author": "Lucas Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "We’re talking about the destruction of our world as we know it.",
        "author": "Lucas Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "You shouldn’t like things because people tell you you’re supposed to.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Sometimes people don’t really say what they’re thinking. But you capture the right moment…it says more.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Do you wanna be normal? Do you wanna be just like everyone else? Being a freak is the best. I’m a freak!",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Nobody normal ever accomplished anything meaningful in this world.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Don’t take it so personally, okay? I don’t like most people. He’s in the vast majority.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "Yeah, the real-world sucks, deal with it like the rest of us.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "I’m going as a guy who hates parties.",
        "author": "Jonathan Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "You keep trying things on until something feels like you.",
        "author": "Max Mayfield"
    },
    {
        "id": guidGenerator(),
        "quote": "It’s just, I know I can be a jerk like him sometimes, and I do not want to be like him. Ever.",
        "author": "Max Mayfield"
    },
    {
        "id": guidGenerator(),
        "quote": "I didn’t realize it was such an honor to go trick-or-treating with you.",
        "author": "Max Mayfield"
    },
    {
        "quote": "There’s more to life than stupid boys, you know.",
        "author": "Max Mayfield"
    },
    {
        "id": guidGenerator(),
        "quote": "You can’t spell America without Erica.",
        "author": "Erica Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "Science is neat, but I’m afraid it’s not very forgiving.",
        "author": "Mr. Clarke"
    },
    {
        "id": guidGenerator(),
        "quote": "Once you open up that curiosity door, anything is possible.",
        "author": "Mr. Clarke"
    },
    {
        "id": guidGenerator(),
        "quote": "All living organisms develop defense mechanisms against attack. They adapt. They find some way to survive.",
        "author": "Sam Owens"
    },
    {
        "id": guidGenerator(),
        "quote": "I just feel whole, like a piece of me was missing, and now, it’s not.",
        "author": "Kali Prasad"
    },
    {
        "id": guidGenerator(),
        "quote": "Sometimes, I impress even myself.",
        "author": "Sam Owens"
    },
    {
        "id": guidGenerator(),
        "quote": "I may be a pretty...[bad] boyfriend, but it turns out I’m actually a pretty damn good babysitter.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "Acne isn’t a rash, and it isn’t contagious, you prepubescent wastoid!",
        "author": "Keith"
    },
    {
        "id": guidGenerator(),
        "quote": "Men of science have made abundant mistakes of every kind.",
        "author": "Sam Owens"
    },
    {
        "id": guidGenerator(),
        "quote": "They’re criminals. We simply make them pay for their crimes.",
        "author": "Kali Prasad"
    },
    {
        "id": guidGenerator(),
        "quote": "Ask for forgiveness, not permission.",
        "author": "Nancy Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "We all die, my strange little child friend. It’s all a matter of how…and when.",
        "author": "Robin Buckley"
    },
    {
        "id": guidGenerator(),
        "quote": "You know what this half-baked plan of yours sounds like to me? Child endangerment.",
        "author": "Erica Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "You are gonna slay ‘em dead.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "Only love makes you that crazy sweetheart…and that damn stupid.",
        "author": "Florence"
    },
    {
        "id": guidGenerator(),
        "quote": "This is finger lickin’ good.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "You’re now faced with the same choice, go back into hiding and hope they don’t find you, or fight, and face them again.",
        "author": "Kali Prasad"
    },
    {
        "id": guidGenerator(),
        "quote": "Man, Kids are the worst! who needs’ em, anyway?",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "People don’t spend their lives trying to look at what’s behind the curtain. They like the curtain. It provides them stability, comfort, and definition.",
        "author": "Murray Bauman"
    },
    {
        "id": guidGenerator(),
        "quote": "How many children are you friends with?",
        "author": "Robin Buckley"
    },
    {
        "id": guidGenerator(),
        "quote": "I love you, and I’m sorry. I’m sorry? The hell am I sorry for?",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "I’m stealthy, like a ninja.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "It’s called code shut-your-mouth.",
        "author": "Erica Sinclair"
    },
    {
        "id": guidGenerator(),
        "quote": "You tell anyone I just told you that and your ass is grass.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "The demogorgon – it got me. See you tomorrow.",
        "author": "Will Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "I always thought stuff like this happened in movies and comic books.",
        "author": "Bob Newby"
    },
    {
        "id": guidGenerator(),
        "quote": "Something’s coming. Something hungry for blood. A shadow grows on the wall behind you, swallowing you in darkness. It is almost here.",
        "author": "Steve Harrington"
    },
    {
        "id": guidGenerator(),
        "quote": "I felt this evil like it was looking at me.",
        "author": "Will Byers"
    },
    {
        "id": guidGenerator(),
        "quote": "We’re just friends.",
        "author": "Robin Buckley"
    },
    {
        "id": guidGenerator(),
        "quote": "You smell that Mags...[I don’t see any cows] Clearly you haven’t met the high school girls.",
        "author": "Billy Hargrove"
    },
    {
        "id": guidGenerator(),
        "quote": "Our children don’t live here anymore. You didn’t know that?",
        "author": "Ted Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "You know, out of all of my brother’s friends, you’re my favorite. You’ve always been my favorite.",
        "author": "Nancy Wheeler"
    },
    {
        "id": guidGenerator(),
        "quote": "Hey dingus! Your children are here again.",
        "author": "Robin Buckley"
    },


];
