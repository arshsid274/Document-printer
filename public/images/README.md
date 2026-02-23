# Images Folder

Place your images here to use in templates.

## Folder Structure

- `/logos` - Company logos and brand assets
- Add more subfolders as needed (e.g., `/signatures`, `/backgrounds`)

## Usage in Templates

```tsx
import Image from 'next/image';

<Image src="/images/logos/company-logo.png" alt="Company Logo" width={200} height={60} />
```

Or with regular img tag:
```tsx
<img src="/images/logos/company-logo.png" alt="Company Logo" />
```
