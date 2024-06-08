# Todo App

A simple to-do application built with Next.js, Prisma, and Clerk

## Features
- User authentication with Clerk
- CRUD (Create, Read, Update, and Delete) operations for tasks
- Real-time updates with Prisma

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
   ```markdown
    DATABASE_URL=mongodb://your-database-url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=your-sign-in-url
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=your-sign-up-url
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=your-after-sign-in-url
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=your-after-sign-up-url
    ```
6. Start development server:
   ```bash
   prisma generate
   npm run dev
   ```

## Usage
To use the application, sign up or log in using the provided authentication. The add, edit, complete, or delete tasks.

## Deployment
The project is deployed on Vercel. The steps are:
1. Push the code to GitHub
2. Create a new project in Vercel
3. Select the GitHub repository and configure the project
4. Include necessary environment variables
5. Deploy the project

## Acknowledgements
- [React Icons](https://www.npmjs.com/package/react-icons) for some icons used
- [Clerk](https://clerk.dev) for the authentication service
- [Prisma](https://www.prisma.io) for the ORM
- [Vercel](https://vercel.com) for the deployment platform
