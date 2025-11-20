/**
 * Google Apps Script for Form Submissions
 * Handles: pickupForm, franchiseForm, contactForm
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire script
 * 4. Create a Google Sheet (or use existing one)
 * 5. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 * 6. Replace 'YOUR_SHEET_ID_HERE' below with your actual Sheet ID
 * 7. Save the script
 * 8. Deploy > New deployment > Web app
 * 9. Set "Execute as: Me" and "Who has access: Anyone"
 * 10. Copy the deployment URL and use it in your HTML forms
 */

// REPLACE THIS WITH YOUR GOOGLE SHEET ID
const SPREADSHEET_ID = '1ynzThHgBiRRXzH4vFlikzsU_E1NGBnKFOO6wkSa-eN0';

// Sheet names (will be created automatically if they don't exist)
const SHEET_NAMES = {
  'pickupForm': 'Pickup Requests',
  'franchiseForm': 'Franchise Applications',
  'contactForm': 'Contact Messages',
  'careerForm': 'Career Applications'
};

// Column headers for each form type
const FORM_HEADERS = {
  'pickupForm': [
    'Timestamp',
    'Name',
    'Phone',
    'Category',
    'District',
    'Current Location',
    'Pincode',
    'Pickup Date',
    'Pickup Time',
    'Source'
  ],
  'franchiseForm': [
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Age',
    'Gender',
    'City',
    'State',
    'Property',
    'Space (sq. ft.)',
    'Investment Capacity',
    'Financial Assistance',
    'Reason',
    'Experience'
  ],
  'contactForm': [
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Subject',
    'Message',
    'Pickup Opt-in'
  ],
  'careerForm': [
    'Timestamp',
    'Full Name',
    'Phone',
    'Email',
    'Date of Birth',
    'Address',
    'Education',
    'Specialization',
    'Passing Year',
    'Previous Role',
    'Skills',
    'Preferred Location',
    'Expected Salary',
    'Available From',
    'Cover Letter',
    'Source'
  ]
};

/**
 * Handle GET requests (when URL is visited in browser)
 * Returns a simple status page
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheetNames = Object.values(SHEET_NAMES);
    const existingSheets = [];
    
    for (let i = 0; i < sheetNames.length; i++) {
      const sheet = ss.getSheetByName(sheetNames[i]);
      if (sheet) {
        const rowCount = sheet.getLastRow() - 1; // Subtract header row
        existingSheets.push({
          name: sheetNames[i],
          submissions: rowCount > 0 ? rowCount : 0
        });
      }
    }
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Form Handler Status</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
          h1 { color: #1a73e8; }
          .status { background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .sheet { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
          .success { color: #0bb169; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>✅ Form Handler is Active</h1>
        <div class="status">
          <p class="success">Your Google Apps Script is deployed and ready to receive form submissions!</p>
          <p><strong>Spreadsheet ID:</strong> ${SPREADSHEET_ID}</p>
        </div>
        <h2>Form Sheets Status:</h2>
        ${existingSheets.length > 0 
          ? existingSheets.map(s => `
            <div class="sheet">
              <strong>${s.name}</strong><br>
              Submissions: ${s.submissions}
            </div>
          `).join('')
          : '<p>No sheets created yet. They will be created automatically on first submission.</p>'
        }
        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          This endpoint accepts POST requests from your HTML forms.<br>
          Forms will work correctly when submitted from your website.
        </p>
      </body>
      </html>
    `;
    
    return HtmlService.createHtmlOutput(html);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Error accessing spreadsheet: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Main function to handle POST requests
 */
function doPost(e) {
  try {
    // Get form data (handle both URL-encoded and JSON)
    const formData = e.parameter || {};
    
    // Normalize form data (Google Apps Script sometimes returns arrays)
    const normalizedData = {};
    for (const key in formData) {
      const value = formData[key];
      normalizedData[key] = Array.isArray(value) ? value[0] : value;
    }
    
    // Honeypot spam protection - if hp field has value, it's spam
    if (normalizedData.hp && String(normalizedData.hp).trim() !== '') {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Spam detected'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get form type from sheetName or form_id
    const formType = normalizedData.sheetName || normalizedData.form_id || 'contactForm';
    
    // Validate form type
    if (!FORM_HEADERS[formType]) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid form type: ' + formType
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Open spreadsheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create sheet
    let sheet = ss.getSheetByName(SHEET_NAMES[formType]);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAMES[formType]);
      // Add headers
      sheet.getRange(1, 1, 1, FORM_HEADERS[formType].length)
        .setValues([FORM_HEADERS[formType]])
        .setFontWeight('bold')
        .setBackground('#f0f0f0');
      // Freeze header row
      sheet.setFrozenRows(1);
    }
    
    // Prepare row data based on form type
    const rowData = getRowData(formType, normalizedData);
    
    // Append row to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error (check Executions in Apps Script dashboard)
    Logger.log('Error: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Get row data based on form type
 */
function getRowData(formType, formData) {
  const timestamp = new Date();
  const row = [timestamp];
  
  // Helper to safely get string value
  function getValue(key) {
    const val = formData[key];
    return val ? String(val).trim() : '';
  }
  
  switch (formType) {
    case 'pickupForm':
      row.push(
        getValue('name'),
        getValue('phone'),
        getValue('category'),
        getValue('area'),
        getValue('currentLocation'),
        getValue('pincode'),
        getValue('date'),
        getValue('time'),
        getValue('source')
      );
      break;
      
    case 'franchiseForm':
      row.push(
        getValue('name'),
        getValue('phone'),
        getValue('email'),
        getValue('age'),
        getValue('gender'),
        getValue('city'),
        getValue('state'),
        getValue('property'),
        getValue('space'),
        getValue('investment'),
        getValue('assistance'),
        getValue('reason'),
        getValue('experience')
      );
      break;
      
    case 'contactForm':
      row.push(
        getValue('name'),
        getValue('phone'),
        getValue('email'),
        getValue('subject'),
        getValue('message'),
        formData.pickup_opt === 'yes' ? 'Yes' : 'No'
      );
      break;
      
    case 'careerForm':
      // Handle education array (checkboxes)
      let education = formData['education[]'] || formData.education;
      let educationStr = '';
      if (Array.isArray(education)) {
        educationStr = education.join(', ');
      } else if (education) {
        educationStr = String(education);
      }
      
      row.push(
        getValue('full_name'),
        getValue('phone'),
        getValue('email'),
        getValue('dob'),
        getValue('address'),
        educationStr,
        getValue('specialization'),
        getValue('passing_year'),
        getValue('prev_role'),
        getValue('skills'),
        getValue('preferred_location'),
        getValue('salary'),
        getValue('available_from'),
        getValue('cover'),
        getValue('source')
      );
      break;
      
    default:
      row.push('Unknown form type');
  }
  
  return row;
}

/**
 * Test function - run this to verify setup
 */
function testSetup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Logger.log('Spreadsheet opened: ' + ss.getName());
  
  // Check if sheets exist
  for (const [key, sheetName] of Object.entries(SHEET_NAMES)) {
    let sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      Logger.log('Sheet "' + sheetName + '" exists');
    } else {
      Logger.log('Sheet "' + sheetName + '" will be created on first submission');
    }
  }
}

