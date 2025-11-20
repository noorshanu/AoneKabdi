# Forms Configuration Summary

All forms are now connected to Google Apps Script and have clear, descriptive sheet names.

## Google Apps Script URL
```
https://script.google.com/macros/s/AKfycby663b4RX_4AR-441lXRLhBG0r2ed8B5NzoWKF2lS1b7umjTpr6Csfs86r7O7rMSWLI/exec
```

## Forms Overview

### 1. Pickup Form (`pickupForm`)
- **File**: `index.html` (line 659)
- **Form ID**: `pickupForm`
- **Sheet Name**: `pickupForm`
- **Google Sheet Tab**: **"Pickup Requests"**
- **Fields**: Name, Phone, Category, Area, Sub-area, Final Address, Date, Time, Source

### 2. Franchise Form (`franchiseForm`)
- **Files**: 
  - `index.html` (line 1002)
  - `franchise.html` (line 606)
  - `franchise-2.html` (line 606)
- **Form ID**: `franchiseForm`
- **Sheet Name**: `franchiseForm`
- **Google Sheet Tab**: **"Franchise Applications"**
- **Fields**: Name, Phone, Email, Age, Gender, City, State, Property, Space, Investment, Assistance, Reason, Experience

### 3. Contact Form (`contactForm`)
- **Files**: 
  - `index.html` (line 2048) - `contactFormScoped`
  - `contact.html` (line 264)
  - `contact-2.html` (line 264)
- **Form ID**: `contactForm`
- **Sheet Name**: `contactForm`
- **Google Sheet Tab**: **"Contact Messages"**
- **Fields**: Name, Phone, Email, Subject, Message, Pickup Opt-in

### 4. Career Form (`careerForm`)
- **File**: `career.html` (line 459)
- **Form ID**: `careerForm`
- **Sheet Name**: `careerForm`
- **Google Sheet Tab**: **"Career Applications"**
- **Fields**: Full Name, Phone, Email, DOB, Address, Education, Specialization, Passing Year, Previous Role, Skills, Preferred Location, Expected Salary, Available From, Cover Letter, Source

## Google Sheet Structure

Your Google Sheet will automatically create these tabs:

1. **Pickup Requests** - All pickup booking submissions
2. **Franchise Applications** - All franchise inquiries
3. **Contact Messages** - All contact form submissions
4. **Career Applications** - All job applications

Each sheet will have:
- Headers in the first row (bold, gray background)
- Frozen header row
- Timestamp column (first column)
- All form fields as columns

## Verification Checklist

✅ All forms use the same Google Apps Script URL  
✅ All forms have `form_id` hidden field  
✅ All forms have `sheetName` hidden field  
✅ Sheet names are clear and descriptive  
✅ Google Apps Script handles all 4 form types  
✅ Each form type maps to a unique sheet tab  

## Testing

To verify everything works:

1. Submit each form type from your website
2. Check your Google Sheet - new tabs should be created automatically
3. Verify data appears in the correct sheet tab
4. Check that all columns match the form fields

## Notes

- Forms automatically create sheets on first submission
- Headers are added automatically
- Honeypot spam protection is active on all forms
- All forms include timestamp tracking

