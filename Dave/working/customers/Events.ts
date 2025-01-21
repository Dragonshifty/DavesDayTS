export default class Events {
    checkForRandomEvent(): string {
        const eventListCount: number = this.events.length;

        const reportRandomEvent = Math.random() < 0.28;

        if (!reportRandomEvent) return "No event";

        const eventPick: number = Math.floor(Math.random() * eventListCount);

        return this.events[eventPick];
    }

    events: string[] = [
        "A wedding proposal happened. They said yes! ",
        "A wedding proposal happened. They said maybe! ",
        "An influencer asked for free food in exchange for exposure. Much laughter. ",
        "A tray of champagne glasses got knocked over. ",
        "A minor celebrity came in. No-one knew. ",
        "Rumour has it there's a rat in the kitchen. Cute little chef hat, though. ",
        "A health inspector was in today. ",
        "It's a snowy day. ",
        "It's a rainy day. ",
        "It's a sunny day. ",
        "It's that kind of rainy day that looks light but gets you soaked. ",
        "A film crew was in today. They weren't filming anything, just eating pizza. ",
        "The toilet was broken. The nearby Tesco staff were not happy. ",
        "One of the customers complemented Dave's very ordinary shoes. ",
        "One of the customers had a very minor headache but still enjoyed their food. ",
        "One insistent customer declares that, actually, ducks aren't that fond of rain. ",
        "A local stray cat curiously wanders into the kitchen, steals some food and runs off. Shortly after, satisfaction brought it back. ",
        "The kitchen radio broke. ",
        "Dave narrowly avoided getting caught after spilling gravy down a customer's back. This is especially weird as the restaurant doesn't serve anything with gravy. ",
        "A hawk flew in the restaurant today. Possibly a Harris hawk. ",
        "Some kid threw a rock at the window. Didn't smash. ",
        "A customer with an atrocious sense of aerodynamics tried to craft a paper aeroplane out of a napkin. Looked great; didn't fly. ",
        "Much to his delight, a child got out a set of colouring pencils and drew Dave a picture. ",
        "It was a customer's 80th birthday today. The whole place joined in on the singing, except the disgruntled man sitting next to the toilets. ",
        "A car alarm was going off near the restaurant for most of the morning. ",
        "Dave had toilet paper stuck to his shoe for a good long while. ",
        "Red sky in the morning - always makes Dave think of Shepherd's Pie. ",
        "Slightly chilly today. ",
        "Dave spent a lot of the morning coming up with amazing comebacks to a previous argument he had with a stranger he'll never see again. ",
        "One customer's 'tip' was not to eat yellow snow. Hilarious. ",
        "Dave had a bad hair day. ",
        "Dave's phone stayed on 18% the entire day. ",
        "Someone came in and asked to have poster laminated. ",
        "One small boy brought his pet hamster in. The parents were apologetic and whisked them all out. ",
        "One customer spent a lot of time talking about the pizzeria at the other end of town, and how good it looks. ",
        "Dave is starting to rethink his policy of not throwing out socks with large holes in them. ",
        "One customer was just absolutely draining. ",
        "A regular who always dines alone brought another person with them. Gossip rife in the kitchen. ",
        "Dave had that annoying feeling where you could be about to fall ill or be completely fine. Could go either way. ",
        "A couple were annoyed they couldn't pay with their own nation's currency. ",
        "Service was slowed for a while as one customer told some really quite interesting tales. ",
        "A rocking table was expertly fixed with a folded-up piece of cardboard. ",
        "A customer was flustered by not knowing whether to give their first or last name for a table reservation. ",
        "One customer rearranged all the cutlery to be left-handed when no-one was looking and chuckled about how sinister it all was when asked about it. ",
        "A family brought miniature percussion instruments with them and played along with the music. ",
        "When booking a table, one gentleman couldn't decide what time to eat, stating 'time is an illusion'. He ended up missing his lunchtime reservation. ",
        "It was discovered during the evening shift that the phone had been hooked up to a fax machine for most of the day. No-one knew where it came from. ",
        "Although he doesn't sing, today Dave couldn't work out if he'd be a bass, baritone, or tenor. Maybe even a countertenor. ",
        "A fight almost broke out in the restaurant today. Apparently it all began over how effective the red panda's defence mechanism really is. ",
        "A couple on their first date really started to bond when they discovered a mutual love of the '80s cartoon The Racoons. ",
        "A customer foolishly asked if a woman was pregnant. Idiot. ",
        "A debate broke out as to whether YOLO actually means to be adventurous or instead means you should be cautious. ",
        "Somehow Dave found time to build an awesome fort out of old cardboard. ",
        "One customer stated 'If you tell the truth, you...' and couldn't remember the end of the quote. ",
        "Weirdly, quite a few shiny valuables went missing today. People also reported the pitter patter of tiny feet. ",
    ];
}
