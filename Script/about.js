const aboutme = [
    "Hello I'm Tegar. I was 7th computer engineering student from Politeknik Elektronika Negeri Surabaya. from my collage i learn so much technology about embedded system, IoT system, Computer network and develop some apps. Outside of that lesson, i learn some new tech stack for me like building website using framework from youtube video and online course.",
    "I am a person who is easy to adapt and learn about new technology. This is one of my strengths, also because I like technological developments. from this website i can show you project that i have complete before, and some article about my experience."
];
const textdoc = document.querySelector(".about-me .text");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = aboutme[0]
para2.textContent = aboutme[1]
textdoc.append(para1,para2)
