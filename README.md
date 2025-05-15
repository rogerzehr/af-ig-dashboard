# Air Force Inspector General Dashboard

A secure, single-page HTML web tool for Air Force Inspector General (IG) teams to improve visibility and decision-making in the Commander's Inspection Program (CCIP). The tool integrates real-time compliance data, AI-enhanced summaries, and automation features.

## Overview

This dashboard provides IG personnel and commanders with a comprehensive view of inspection data, compliance status, and AI-generated insights to help prioritize resources and improve readiness.

### Features

- **Compliance Snapshot**: Progress tracking, deficiency counts, and AI-generated summaries
- **Readiness & Trends**: 6-month trend visualization of Major Graded Areas with predictive analytics
- **Automation Tools**: Generate corrective actions and sync with MICT systems
- **AI Insights**: Extract key information from uploaded reports and generate talking points
- **Deficiency Management**: Track and analyze open issues with risk-based prioritization

## Setup Instructions

### Local Development Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/your-repo/af-ig-dashboard.git
   cd af-ig-dashboard
   ```

2. **File Structure**:
   - `index.html` - Main application file
   - `mock_data.json` - Sample data for local testing
   - `README.md` - Documentation

3. **Local Testing**:
   - Open `index.html` in a modern web browser
   - No server is required for basic testing with mock data
   - For best experience, use Chrome, Firefox, or Edge

### Secure Deployment Options

#### Option 1: SharePoint Integration

1. Upload all files to a secured SharePoint site
2. Enable appropriate permissions for IG personnel
3. Configure data connections if integrating with real data sources

#### Option 2: AFNet Web Server

1. Deploy to a secured AFNet web server
2. Ensure configuration with proper CAC authentication
3. Update file paths and API endpoints as necessary

#### Option 3: Air Force Cloud One

1. Deploy as a containerized application in Cloud One
2. Configure appropriate security controls
3. Set up API connections to MICT and IGEMS systems

## Security Considerations

- **Authentication**: Requires CAC authentication when deployed to production
- **Authorization**: Role-based access controls for different user types (IG, Commander, Squadron Rep)
- **Data Protection**: No PII or operational data stored locally
- **Compliance**: Designed to meet DoD 8570/8140 and AFI 17-130 requirements
- **Data Transfer**: All API connections use TLS 1.2+ encryption

## Configuration Notes

### Data Integration

By default, the dashboard uses mock data contained in `mock_data.json`. For production deployment, the following integration options are available:

1. **MICT API Integration**:
   - Update the API endpoint in the `syncMICT()` function
   - Configure authentication using appropriate tokens/certificates

2. **IGEMS Connection**:
   - Set the IGEMS data source in the configuration section
   - Ensure proper permissions are granted for data access

3. **UEI Report Processing**:
   - The AI processing functionality requires connection to an authorized AI service
   - Update API credentials in the configuration

### Role-Based Views

The dashboard includes three view modes:
- **IG View**: Complete access to all features
- **Commander View**: Focused on high-level metrics and trends
- **Squadron Rep View**: Filtered to squadron-specific data

To configure default views or customize visible panels, modify the `viewSelector` event handler.

## Development Notes

### Adding New Features

1. The dashboard is built using a modular approach with vanilla JavaScript
2. Each panel is a self-contained component
3. To add new panels:
   - Create a new card div following the existing pattern
   - Add initialization code to the DOMContentLoaded event
   - Add any event handlers to the setupEventListeners function

### Customizing Visuals

- The dashboard uses Tailwind CSS for styling
- Chart.js is used for visualizations
- Font Awesome provides icons

## Support

For technical support, contact:
- IG Technology Support Office: DSN 555-1234
- Email: ig.tech.support@us.af.mil

## Disclaimer

This application is designed for official use only by authorized Air Force personnel. Unauthorized access or use is prohibited.

---

Version 1.0.5 | Last Updated: 15 May 2025