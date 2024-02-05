import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-extrabold my-4">Next.js Template</h1>
      <h3 className="text-xl font-semibold text-secondary-foreground">
        From{" "}
        <Link
          className="underline"
          href="https://muhammad-ali-irtaza.vercel.app/"
          target="_blank"
        >
          Muhammad Ali Irtaza
        </Link>
      </h3>

      <div className="mt-10">
        <p>This Template is for Fullstack Next.js Application</p>
        <p className="mt-3 font-semibold">Techonologies</p>
        <ul className="flex gap-2 justify-center mt-4">
          <li className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm">
            TailwindCSS
          </li>
          <li className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm">
            Shadcn.ui
          </li>
          <li className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm">
            Prisma
          </li>
          <li className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm">
            Trpc
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
