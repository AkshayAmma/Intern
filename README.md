Basic Intern Portal:

This is a fully functional frontend + Firebase Basic intern portal created for the Full Stack Developer Internship . It includes real authentication, a dynamic dashboard, and a static leaderboard.

Features:

Firebase-powered login and signup (email & password)  
Personalized dashboard with intern info  
Referral code generation  
Static rewards and leaderboard section  
Fully responsive UI  
Hosted on Netlify  
100% serverless (no backend required)

Tech Stack:


| Layer        | Technology               |
|--------------|--------------------------|
| Frontend     | HTML, CSS, JavaScript    |
| Authentication| Firebase Auth (v10.7.0) |
| Storage      | Browser `localStorage`   |
| Hosting      | Netlify                  |


 Firebase Authentication:

- Users can register/login using email and password
- After login, intern-specific data (name, referral code, donations) is dynamically generated and stored in `localStorage`
- All pages are protected and redirect if unauthenticated

 Folder Structure:

intern-portal/
├── index.html # Login page
├── register.html # Signup page (Firebase)
├── dashboard.html # User dashboard after login
├── leaderboard.html # Static leaderboard
├── style.css # Main stylesheet

 Deployment (Netlify):

This project is hosted on Netlify for live access.  
 Live Link: [https://intern-12.netlify.app/]

 ⚙️ How to Run Locally

1. Clone the repo or download the files
2. No setup needed (no backend, no build)
3. Just open `index.html` in your browser

 How it Works:

1. User registers with email/password (register.html)
2. Firebase creates the account
3. On login, a referral code and donation amount are generated
4. User is redirected to dashboard with personalized info
5. Leaderboard shows static top performers



