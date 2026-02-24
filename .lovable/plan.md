

## Integrate Web3Forms into Contact Form

Web3Forms is a free service (250 submissions/month) that sends form submissions directly to your Gmail. Here's how we'll set it up:

### Setup Steps (You'll need to do this first)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your Gmail address
3. You'll receive an **Access Key** via email
4. Share that access key with me so I can add it to the code

### Code Changes

**File: `src/components/ContactSection.tsx`**

- Update the `handleSubmit` function to send a POST request to `https://api.web3forms.com/submit` with:
  - Your Web3Forms access key
  - The form fields (name, email, message)
- Add loading state to disable the button while submitting
- Show success/error feedback using a toast notification instead of a basic `alert()`
- Reset the form on successful submission

The Web3Forms access key is a **public key** (safe to include in frontend code), so no backend or edge function is needed.

### Technical Details

- The form will POST JSON to `https://api.web3forms.com/submit`
- Required fields: `access_key`, `name`, `email`, `message`
- Optional: `subject` field to customize the email subject line (e.g., "New Portfolio Contact from {name}")
- Loading state via `useState` boolean
- Toast notifications via `sonner` (already installed)

