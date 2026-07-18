/* src/ai/aiData.js */

export const RESUME_DATA = [
  // --- 1. NAME (Specific Rule) ---
  {
    keywords: ["name", "full name", "called", "who is he"],
    response: "His full name is Guhan T."
  },

  // --- 2. DOMAIN & INTERESTS ---
  {
    keywords: ["domain", "interest", "passion", "focus", "specialize", "field"],
    response: "Guhan is focused on Electronics and Communication Engineering, Embedded Systems, Artificial Intelligence, Machine Learning, and Intelligent Software Development. He loves exploring emerging technologies and improving problem-solving skills through hands-on projects."
  },

  // --- 3. SKILLS ---
  {
    keywords: ["skill","skills", "stack", "technology", "tech", "language", "coding", "program", "know"],
    response: "Guhan is proficient in Java, Python, SQL, HTML, CSS, JavaScript, Arduino programming, Embedded Systems, and Internet of Things (IoT). His database and software tools include MySQL, Git, GitHub, and VS Code. He is also knowledgeable in AI fundamentals, ML basics, and Data Structures."
  },

  // --- 4. GREETINGS (Generic) ---
  {
    keywords: ["hi", "hello", "hey", "greetings", "morning", "evening", "who are you", "start", "bot", "assistant"],
    response: "Hello! I am Guhan's AI Assistant. I can tell you about his Domain, Skills, Projects, Experience, or Resume. What would you like to know?"
  },

  // --- 5. PROFILES ---
  {
    keywords: ["profile", "profiles", "link", "handle", "platform", "url", "online", "github"],
    response: "Here are his active professional profiles:\n• GitHub: github.com/GUHAN0205\n• LinkedIn: linkedin.com/in/guhan-t-554726314"
  },

  // --- 6. ACHIEVEMENTS ---
  {
    keywords: ["achievement", "achievements", "prize", "win", "competition", "compete"],
    response: "Guhan has notable achievements, including:\n• Science Olympiad Foundation: Secured First Prize in the Inter-School competition.\n• Handball Competition: Secured First Prize in the Inter-College competition."
  },

  // --- 7. EDUCATION ---
  {
    keywords: ["education", "college", "degree", "university", "study", "mark", "institute", "student"],
    response: "He is currently an Electronics and Communication Engineering student passionate about embedded software development and machine learning."
  },

  // --- 8. CERTIFICATIONS ---
  {
    keywords: ["certification", "certifications", "certificate", "course", "learn", "badge"],
    response: "He holds certifications in:\n1. Database Management and SQL (Infosys Springboard)\n2. Java Foundation (Scalar Academy & GUVI)\n3. Principles of Generative AI (Infosys Springboard)"
  },

  // --- 9. PROJECTS ---
  {
    keywords: ["project", "projects", "work", "portfolio", "app", "website", "build"],
    response: "He has built impressive AI-powered applications. Key projects include:\n• Pest Detective Agent: An AI crop pest/disease detection web application.\n• GameSense AI: An AI-powered gaming coach and performance assistant.\nCheck the 'PROJECTS' section to slide through their details!"
  },

  // --- 10. EXPERIENCE ---
  {
    keywords: ["experience", "job", "intern", "company", "work history", "role", "internship"],
    response: "Guhan has completed several internships:\n• AI Intern at Infosys Springboard (1 Month Virtual Internship)\n• Arduino Programming Intern at Internshala (1 Month Virtual Internship)"
  },

  // --- 11. CONTACT ---
  {
    keywords: ["contact", "email", "mail", "phone", "reach", "hire", "address", "linkedin"],
    response: "You can reach Guhan via:\n• Email: trmanoguhan@gmail.com\n• Phone: +91 6379791441\n• LinkedIn: linkedin.com/in/guhan-t-554726314\n• GitHub: github.com/GUHAN0205"
  },

  // --- 12. RESUME ---
  {
    keywords: ["resume", "cv", "download", "pdf", "file"],
    response: "Here is a quick summary of his Resume:\n• Education: Electronics and Communication Engineering Student\n• Experience: AI Intern (Infosys Springboard) & Arduino Programming Intern (Internshala)\n• Projects: Pest Detective Agent & GameSense AI\n• Skills: Java, Python, SQL, Arduino, Embedded Systems, IoT, MySQL, Git/GitHub, AI & ML basics\n• Certifications: SQL, Java, and Generative AI\n\nYou can view and download his complete detailed resume in the 'RESUME' section."
  },

  // --- 13. ABOUT ---
  {
    keywords: ["about", "who", "Who", "summary", "intro", "bio"],
    response: "Guhan T is an Electronics and Communication Engineering student with a strong passion for building intelligent software solutions and innovative embedded systems."
  }
];

export const FALLBACK_RESPONSE = "I missed that. Try asking about my Domain, Skills, Experience, Certifications, or Projects!";