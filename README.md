# Custom Next.js Template

This Next.js template provides a quick and easy setup for your web projects with a focus on modern technologies. It includes the following features:

- **Tailwind CSS**
- **Shadcn.ui**
- **trpc**
- **Prisma**

## Getting Started

Follow these instructions to download and set up the custom Next.js template:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AinPhoenix/template-nextjs.git
   ```

2. Change into the project directory:

   ```bash
   cd template-nextjs
   ```

3. Install dependencies:

   ```bash
   npm install or yarn install
   ```

### Configuration

1. Create a `.env` file in the root of the project and set up the necessary environment variables:

   ```env
   DATABASE_URL=your_database_url
   ```

   Replace `your_database_url` with the connection URL for your database.

2. Configure the database using Prisma:

   ```bash
   npx prisma generate
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev or yarn dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your application.

---

Feel free to explore and enhance the template to suit your project requirements! If you have any questions or issues, please refer to the documentation of each technology or reach out to me. Happy coding!
