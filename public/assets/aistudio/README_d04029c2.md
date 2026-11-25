# Professional Student Portfolio Website

A clean, modern, responsive multi-page student portfolio website built using **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**. Designed specifically for graduating college students applying for On-the-Job Training (OJT), internships, or entry-level software engineering roles.

---

## 📁 File Structure

```text
portfolio/
├── index.html        # Home Page: Hero introduction, OJT objective, highlights & featured projects
├── about.html        # About Me: Biography, education timeline, technical skills, career goals & hobbies
├── projects.html     # Projects & Works: Interactive card showcase with Bootstrap 5 preview modals & GitHub links
├── tour.html         # Academic Experiences: Educational field trips, industry data center tours, seminars & hackathons
├── contact.html      # Contact Me: Direct contact info, social links, and validated message form
│
├── css/
│   └── styles.css    # Custom styling extending Bootstrap 5 (with CSS variables for colors)
│
├── js/
│   └── script.js     # Vanilla JavaScript for active nav links, project & tour category filters, form validation
│
└── images/
    ├── profile.jpg   # Professional student headshot portrait
    ├── project1.jpg  # Student Information & Enrollment System dashboard preview
    ├── project2.jpg  # E-Commerce & Inventory Management Portal dashboard preview
    ├── project3.jpg  # CampusFlow Task & Schedule Tracker mobile/desktop preview
    ├── tour1.jpg     # Enterprise Data Center & IT field tour photo
    ├── tour2.jpg     # University Hackathon & Innovation Seminar photo
    ├── tour3.jpg     # Embedded Systems & IoT Laboratory Workshop photo
    ├── tour4.jpg     # Corporate Software Engineering Office Visit photo
    ├── tour5.jpg     # Capstone Research Colloquium Defense photo
    ├── tour6.jpg     # Cybersecurity Defense & Network Lab photo
    ├── tour7.jpg     # Cloud Computing & DevOps Seminar photo
    ├── tour8.jpg     # Mobile UI/UX Design Sprint Workshop photo
    ├── tour9.jpg     # Industrial Robotics & Automation Expo photo
    └── tour10.jpg    # Community Tech Outreach & Coding Mentorship photo
```

---

## 🛠️ Beginner's Customization Guide

### 1. How to Update Personal Details (Name, Course, Bio)
All personal details are in plain HTML with search-friendly comments `<!-- EDITABLE: ... -->`.
- Open any `.html` file (e.g. `index.html`, `about.html`, `contact.html`).
- Search for `Ocede Marl Abelarde` and replace it with your own name.
- Customize the avatar image `images/profile.jpg` with your own portrait photo.
- Search for `Bachelor of Science in Information Technology` and replace it with your course/degree.
- Search for `abelardeocedemarl07@gmail.com` and replace it with your personal email address.

### 2. How to Replace Photos & Screenshots
- **Profile Photo**: Place your portrait photo in `images/` and name it `profile.jpg` (or change the `src="images/profile.jpg"` path in `index.html` and `about.html`).
- **Project Screenshots**: Place your screenshot in `images/` (e.g., `project1.jpg`, `project2.jpg`) and update the `<img>` tag in `projects.html`.
- **Academic Tour Photos**: Place your seminar/trip photos in `images/` and update the `src` attribute in `tour.html`.

### 3. How to Add a New Project Card & Modal
1. Open `projects.html`.
2. Scroll to the `<!-- PROJECT 1 -->` card block.
3. Copy the entire `<div class="col-md-6 col-lg-6">...</div>` block.
4. Change `data-bs-target="#projectModal1"` to `#projectModal5`.
5. Scroll down to the Modals section and copy one of the `<div class="modal fade" id="projectModal1">...</div>` blocks.
6. Change `id="projectModal1"` to `id="projectModal5"`.
7. Update the title, description, screenshot image, tech stack tags, and your GitHub repository URL.

### 4. How to Change Website Colors
Open `css/styles.css` and modify the CSS variables at the top:
```css
:root {
  --color-primary: #0f172a;       /* Main Navy Color */
  --color-accent: #2563eb;        /* Soft Royal/Blue Accent */
  --color-accent-hover: #1d4ed8;  /* Accent Hover Color */
  --color-bg-body: #f8fafc;       /* Background Canvas */
}
```

### 5. How to Change Fonts
By default, the website uses Google Fonts **Plus Jakarta Sans**. If you wish to use **Poppins** or **Inter**:
1. Update the `<link href="...">` in the `<head>` of each HTML file with your Google Font link.
2. In `css/styles.css`, change:
   ```css
   --font-family-base: 'Poppins', sans-serif;
   ```

---

## 🚀 How to Run & Deploy

- **Local Preview**: Simply open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari), or run `npm run dev`.
- **GitHub Pages**:
  1. Push the repository to GitHub.
  2. Go to **Settings** > **Pages**.
  3. Select the `main` branch (root folder) and click **Save**.
- **Netlify / Vercel**: Drag and drop the folder or connect your Git repository.
