const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Practices First Day",
            content: "Lorem ipsum dolor sit amet.",
            linkInfo: {
                title: "Portfolyo için tıklayınız.",
                target: "_blank",
                url: "https://mervebatman.github.io",
                alt: "portfolyo",
            },
            owner: "mervebatman",
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        updateCoords(message, event) {
            // console.log(message, event.x, event.y);

            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            }
        }
    }
}).mount("#app"); 