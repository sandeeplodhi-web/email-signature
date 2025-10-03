# 📧 Dynamic Email Signature Generator

A simple and customizable **HTML Email Signature Generator** built with JavaScript.  
This tool allows you to dynamically generate responsive and branded email signatures using user-provided data (name, role, company, logo, contact info, badges, and social links).  

---

## 🚀 Features
- Generate fully **dynamic HTML signatures** from a `user` object.  
- Responsive design (works on desktop & mobile email clients).  
- Supports **social media icons** (Facebook, LinkedIn, Instagram).  
- Add **badges / certifications** dynamically.  
- Fully customizable styling with inline CSS (email-client safe).  

---

## 🛠️ Usage

### 1. Define a `user` object
```javascript
const user = {
  logo: "https://example.com/logo.png",
  name: "John Doe",
  role: "Software Engineer",
  company: "Tech Innovators Inc.",
  address: "San Francisco, CA, USA",
  email: "john.doe@example.com",
  website: "https://www.techinnovators.com",
  phone: "+1 (555) 123-4567",
  badges: {
    certified: { image: "https://example.com/cert.png", link: "https://verify.com/cert" },
    award: { image: "https://example.com/award.png", link: "https://awards.com" }
  },
  socials: {
    facebook: "https://facebook.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe"
  }
};
```

### 2. Generate HTML signature
```javascript
const signatureHTML = buildFullHTML(user);
```

### 3. Use in Emails
- Copy the generated `signatureHTML` and paste it inside your **email client’s signature settings** (e.g., Gmail, Outlook).  
- Or save as `sample.html` and preview in a browser.  

---

## 🖼️ Example Output
Here’s what a generated signature might look like:  

![Sample Signature](...Need to add)

---

## ⚙️ Customization
- 🎨 **Colors & fonts** can be updated in the `buildFullHTML` function (inline styles).  
- ➕ Add more **social media icons** by extending the `socialIcons` map.  
- 🏆 Add any number of **badges** with images & links.  

---

## 📧 Supported Email Clients
- Gmail  
- Outlook  
- Apple Mail  
- Yahoo Mail  
- Most modern web & desktop email clients  

---

## 📜 License
This project is licensed under the MIT License – feel free to use & modify.  

---

## 🤝 Contributing
Contributions are welcome!  
- Fork the repo  
- Create a feature branch  
- Submit a Pull Request  

---

## 👨‍💻 Author
Developed by **[Sandeep Lodhi]** 🚀  
