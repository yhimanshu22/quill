# PDF Chat Project

This is a project where we integrate various technologies to enable a seamless chat experience with PDF documents. The project involves multiple services and tools to handle payment, authentication, database management, AI capabilities, and hosting.

### Key Technologies Used:
1. **Stripe** for Payments
2. **Kinde** for Login and Signup
3. **Prisma ORM** for Database Management
4. **Gemini** for AI Capabilities
5. **Render** for Database Hosting

## Features:
- **PDF Interaction**: Upload, view, and chat with the content of PDFs.
- **Payments**: Users can subscribe and pay for premium services using Stripe.
- **Authentication**: Users can log in and sign up using Kinde.
- **AI Integration**: Gemini is used to provide AI-powered insights and responses to PDF content.
- **Database Management**: Prisma ORM interacts with the database to store user data and PDF files.
- **Database Hosting**: The database is hosted on Render for seamless cloud integration.

## Setup Instructions:

### 1. **Install Dependencies**:
Ensure you have the required tools and dependencies installed.

```bash
npm install
```

### 2. **Configure Stripe**:
- Set up your Stripe account and obtain your API keys.
- Add your keys to `.env` file for secure access.

```env
STRIPE_API_KEY=your-stripe-api-key
```

### 3. **Set Up Kinde**:
- Sign up for Kinde authentication and obtain your credentials.
- Add the necessary credentials to the `.env` file.

```env
KINDE_CLIENT_ID=your-kinde-client-id
KINDE_CLIENT_SECRET=your-kinde-client-secret
```

### 4. **Set Up Prisma ORM**:
- Ensure your Prisma schema is configured correctly.
- Run migrations to set up your database.

```bash
npx prisma migrate dev
```

### 5. **Integrate Gemini**:
- Set up Gemini for AI integration, and configure it in the project.
- Add necessary API keys for Gemini.

```env
GEMINI_API_KEY=your-gemini-api-key
```

### 6. **Set Up Render Database Hosting**:
- Create an account on **Render** and set up a managed PostgreSQL database.
- Update your `.env` file with the Render database connection string.

```env
DATABASE_URL=your-render-database-url
```

## Usage:
- **Login & Signup**: Users can log in or sign up using their Kinde credentials.
- **PDF Interaction**: Upload a PDF file and begin chatting with it. The AI (via Gemini) will assist you in understanding and interacting with the document.
- **Payments**: If users opt for premium features, Stripe handles all payment processing.

## Directory Structure:
```
/src
  /components    # React components
  /pages        # Next.js pages
  /lib          # Utility functions
  /db           # Prisma ORM configurations
  /services     # External API integrations (Stripe, Kinde, Gemini)
  /middleware   # Middleware functions
/.env           # Environment variables for API keys
/README.md      # Project documentation
/package.json    # NPM dependencies
```

## Technologies:
- **Next.js** for the frontend framework.
- **Stripe** for handling payments.
- **Kinde** for user authentication.
- **Prisma ORM** for managing the database.
- **Gemini** for integrating AI capabilities.
- **Render** for database hosting.

## Deployment:
You can deploy this project on any cloud platform, but we recommend using Vercel for the frontend and Render for the database.

1. Push your code to a GitHub repository.
2. Connect your GitHub repository to Vercel and Render for deployment.


---

Feel free to contribute, raise issues, or provide suggestions!
