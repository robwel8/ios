# Earth Kingz Mobile App (Mock)

A mobile-friendly web application for Earth Kingz - a fill material marketplace that connects contractors, farmers, and property owners who need fill material with those who have excess material to move.

## Overview

This is a **mock application** designed to demonstrate how Earth Kingz could transition from phone-based operations to an app-based platform. The app matches their existing brand identity with earth-tone colors (browns and oranges) and provides a streamlined mobile experience.

## Features

### 1. Home Page
- Service overview with clear call-to-action cards
- "Need Fill?" and "Have Fill?" options
- How it works section explaining the 3-step process
- Pricing preview showing tiered rates

### 2. Request Fill Material
- Form for submitting fill material requests
- Job ID/location input
- Contact information collection
- Material type selection (clean sand, compactable clay, granular fill, topsoil)
- Yards needed with real-time cost estimation
- Timeline selection

### 3. List Fill Material
- Form for providers to list available fill
- Similar fields to request form
- Availability timeline options

### 4. Map View (Coming Soon)
- Visual map showing active requests and listings
- Filter by "Need Fill" or "Have Fill"
- Nearby opportunities list with distance
- Location-based matching

### 5. Pricing Calculator
- Full pricing table showing all tiers
- Interactive calculator
- Shows total cost and 50/50 split
- Pricing notes and how it works

### 6. More/Profile
- About Earth Kingz
- My Requests and Listings (placeholder)
- Transaction History (placeholder)
- Help & Support
- Contact information

## Pricing Tiers

| Yards | Per Yard Rate |
|-------|---------------|
| < 999 | $4.00 |
| 1,000 - 4,999 | $3.50 |
| 5,000 - 9,999 | $3.00 |
| 10,000 - 19,999 | $2.50 |
| 20,000 - 29,999 | $2.00 |
| 30,000+ | $1.00 |

**Note:** Cost is split 50/50 between material provider and receiver.

## Design & Branding

### Color Scheme
- **Primary Orange:** `#E07A2F`
- **Primary Brown:** `#3D2817`
- **Dark Brown:** `#1a1410`
- **Earth Tan:** `#D4A574`

### Typography
- System fonts for optimal mobile performance
- Clear hierarchy with proper sizing for mobile devices

### Mobile-First Design
- Responsive layout that works on all screen sizes
- Bottom navigation for easy thumb access
- Touch-optimized buttons and form inputs
- iOS Safe Area support

## How to Use

### Desktop/Mobile Browser
1. Open `index.html` in any modern web browser
2. Best viewed in mobile device mode or on actual mobile device
3. Chrome DevTools > Toggle Device Toolbar (Cmd/Ctrl + Shift + M)

### Testing on Mobile Device
1. Host the files on a local server:
   ```bash
   # Using Python 3
   cd earthkingz-app
   python3 -m http.server 8000
   ```
2. Access from mobile device on same network: `http://YOUR_IP:8000`

### Integration with Capacitor (for iOS/Android)
The app is ready to be packaged with Capacitor:

1. Install Capacitor in the earthkingz-app directory:
   ```bash
   npm init -y
   npm install @capacitor/core @capacitor/cli
   npx cap init
   ```

2. Add iOS platform:
   ```bash
   npm install @capacitor/ios
   npx cap add ios
   ```

3. Add Android platform:
   ```bash
   npm install @capacitor/android
   npx cap add android
   ```

4. Copy web assets and open in Xcode/Android Studio:
   ```bash
   npx cap copy
   npx cap open ios
   # or
   npx cap open android
   ```

## Key Benefits Over Phone-Based System

1. **24/7 Self-Service:** Users can submit requests anytime without calling
2. **Visual Matching:** Map view shows nearby opportunities at a glance
3. **Instant Cost Estimates:** Users see pricing before submitting
4. **Request History:** Users can track all their requests and listings
5. **Reduced Phone Volume:** Automated request collection and matching
6. **Better Data Collection:** Structured forms ensure all necessary information is captured
7. **Scalability:** Can handle unlimited concurrent users

## Future Enhancements

### Phase 1 (Current - Mock)
- ✅ Basic UI/UX design
- ✅ Form submissions
- ✅ Pricing calculator
- ✅ Mobile-responsive layout

### Phase 2 (Backend Integration)
- Backend API for form submissions
- User authentication and accounts
- Database for storing requests and listings
- Email/SMS notifications
- Real map integration with Google Maps API

### Phase 3 (Advanced Features)
- Real-time matching algorithm
- In-app messaging between parties
- Payment processing integration
- Photo upload for material verification
- Rating and review system
- Push notifications for new matches

### Phase 4 (Native Apps)
- iOS App Store distribution
- Android Google Play distribution
- Native camera integration
- Offline support with sync
- GPS location verification

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No framework dependencies for maximum performance
- **Mobile-First** - Responsive design
- **PWA-Ready** - Can be installed as Progressive Web App

## Browser Support

- Chrome/Edge (latest)
- Safari (iOS 12+)
- Firefox (latest)
- Samsung Internet

## File Structure

```
earthkingz-app/
├── index.html          # Main HTML file with all pages
├── styles.css          # Complete styling with Earth Kingz branding
├── app.js              # JavaScript for navigation, forms, calculations
└── README.md           # This file
```

## Contact

For questions about this mock app or Earth Kingz services:
- **Phone:** (612) 990-5690
- **Website:** https://earthkingz.com

---

**Note:** This is a demonstration/mock application. Form submissions are logged to console only and do not send data to any backend service.
