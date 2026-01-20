# Academic Page - Joel Martinsson

A clean, professional academic webpage built with pure HTML, CSS, and JavaScript. No build tools or dependencies required.

## Features

- ✅ **Zero Dependencies** - Pure HTML/CSS/JS
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Navigation** - Animated scrolling
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML
- ✅ **Easy to Customize** - Clear structure and comments
- ✅ **Fast Loading** - No frameworks or libraries

## Quick Start

1. **Clone or download this repository**

2. **Add your profile image**
   - Place your photo in the root directory as `profile.jpg`
   - Or update the `src` in `index.html` (line 22) to point to your image

3. **Customize the content**
   - Open `index.html` and replace placeholder text with your information
   - Update sections: About, Research, Publications, Teaching, Contact

4. **Deploy**
   - Upload to any web server
   - Or use GitHub Pages (see deployment section below)

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # All styling
├── script.js       # Interactive features
├── README.md       # This file
└── profile.jpg     # Your profile image (add this)
```

## Customization Guide

### Updating Personal Information

1. **Hero Section** (Lines 20-30 in `index.html`)
   - Name, title, affiliation
   - Profile image

2. **About Section** (Lines 34-43)
   - Your background and bio

3. **Research Interests** (Lines 45-53)
   - List your research areas

4. **Publications** (Lines 55-82)
   - Add your papers with links
   - Organize by type (journals, conferences, etc.)

5. **Teaching** (Lines 84-100)
   - Current and past courses

6. **Contact** (Lines 102-121)
   - Email, office, address
   - Social media links (Google Scholar, ORCID, LinkedIn, GitHub)

### Changing Colors

Edit the CSS variables in `style.css` (lines 8-15):

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;    /* Accent color */
    --text-color: #333;            /* Body text */
    --light-bg: #f8f9fa;           /* Light backgrounds */
    --link-color: #0366d6;         /* Links */
}
```

### Adding/Removing Sections

1. Add section to navigation in `index.html`:
```html
<li><a href="#newsection">New Section</a></li>
```

2. Add section content:
```html
<section id="newsection" class="section">
    <h2>New Section</h2>
    <p>Your content here</p>
</section>
```

## Deployment

### GitHub Pages (Free & Easy)

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select branch and root folder
4. Your site will be at: `https://yourusername.github.io/repository-name`

### Other Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Traditional hosting**: Upload files via FTP
- **University server**: Follow your institution's guidelines

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Maintenance

This page requires **zero maintenance** as it has no dependencies. Just update your content as needed.

## Tips

1. **Profile Image**: Use a professional headshot (200x200px or larger, square aspect ratio)
2. **Publications**: Keep most recent/important at the top
3. **Links**: Always test your PDF and external links
4. **Updates**: Add a "Last updated" date in the footer
5. **SEO**: Update the meta description in the `<head>` section

## Adding a CV/Resume PDF

1. Place your CV file (e.g., `cv.pdf`) in the root directory
2. Add a link in the Contact section:
```html
<a href="cv.pdf" download class="social-link">Download CV</a>
```

## License

Feel free to use this template for your own academic page. No attribution required.

## Questions or Issues?

This is a simple static website. Common issues:

- **Profile image not showing**: Check the file name matches `profile.jpg` or update the path in HTML
- **Styles not loading**: Ensure `style.css` is in the same directory as `index.html`
- **Navigation not working**: Check that `script.js` is in the same directory

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels where needed

---

**Built with ❤️ using zero dependencies for minimal bloat and maximum simplicity**
