# CROWNED BY SILENCE

Museum-grade fine art. Signed. Numbered. Limited.

## Website Implementation Guide

### File Structure
- `index.html` - Main website HTML
- `style.css` - All styling for the website
- `script.js` - JavaScript functionality including Gumroad integration
- `404.html` - Custom 404 error page
- `email-handler.php` - PHP script for email form handling (optional)
- `CNAME` - Domain configuration for GitHub Pages
- `/images/` - Directory for all images
  - `header-background.jpg` - Castle header image
  - `portfolio-1.jpg` through `portfolio-6.jpg` - Portfolio artwork images
  - `artist-photo.jpg` - Photo for About section

### Setup Instructions

1. **Update Gumroad Integration:**
   - In `script.js`, find the `products` array and replace `YOUR_GUMROAD_PRODUCT_ID_X` with your actual Gumroad product IDs.

2. **Email Form Setup:**
   - In `script.js`, update the `emailHandlerUrl` variable with your email handling script URL.
   - If using the included PHP script, update `your-zoho-email@yourdomain.com` in `email-handler.php` with your actual Zoho Mail address.

3. **Image Preparation:**
   - Create an `/images/` directory
   - Add your header background image as `header-background.jpg`
   - Add your portfolio images as `portfolio-1.jpg` through `portfolio-6.jpg`
   - Add your artist photo as `artist-photo.jpg`

4. **Custom Font (Optional):**
   - If using a custom font, create a `/fonts/` directory
   - Add your font file and update the `@font-face` rule in `style.css`

### GitHub Pages Configuration

1. **Domain Setup:**
   - Ensure your `CNAME` file contains `www.crownedbysilence.com`
   - In your DNS settings, add the following records:
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     CNAME www   yourusername.github.io.
     ```

2. **GitHub Repository Settings:**
   - Go to your repository settings
   - Under "GitHub Pages", select the branch you want to deploy
   - Enter your custom domain: `crownedbysilence.com`
   - Save the changes

### Server Configuration for Email Handling

If using the included PHP script for email handling:

1. Upload `email-handler.php` to a server that can execute PHP
2. Update CORS headers in the PHP file if necessary
3. Update the `emailHandlerUrl` in `script.js` to point to your PHP script location

---

© 2025 CROWNED BY SILENCE. All rights reserved.