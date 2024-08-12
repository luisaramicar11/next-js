import Link from 'next/link';
export default function Contact() {
  return (
    <main className="">
      <h1>Contact Page</h1>
      <p>Welcome to the Contact page.</p>
      <Link href="/contact">Go to contact Page</Link>
    </main>
  );
}