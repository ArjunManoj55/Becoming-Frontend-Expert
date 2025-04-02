// 🔹 How It Works
// Subject (Publisher) → Maintains a list of observers and notifies them of any state changes.

// Observers (Subscribers) → Subscribe to the subject and respond when notified.


// Let's create a News Agency that notifies subscribers when there’s a new update.


class NewsAgency {
    constructor() {
        this.subscribers = []; // List of observers
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(sub => sub !== observer);
    }

    notify(news) {
        this.subscribers.forEach(observer => observer(news));
    }
}

// Create a news agency
const agency = new NewsAgency();

// Subscribers (Observers)
const subscriber1 = news => console.log(`Subscriber 1 received: ${news}`);
const subscriber2 = news => console.log(`Subscriber 2 received: ${news}`);

// Subscribe to news updates
agency.subscribe(subscriber1);
agency.subscribe(subscriber2);

// Publish news
agency.notify("Breaking News: JavaScript is awesome!");

// Unsubscribe a user
agency.unsubscribe(subscriber1);

// Publish another news update
agency.notify("Latest Update: Observer Pattern in action!");
