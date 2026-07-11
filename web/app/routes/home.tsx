import { useEffect, useState } from "react";
import { Resend } from "resend";
import type { Route } from "./+types/home";
import WorkSlider from "../components/WorkSlider";
import ContactModal from "../components/ContactModal";
import type { WorkImage } from "../types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Alan Mulhall | Artist based in Los Angeles" },
    { name: "description", content: "Alan Mulhall | Artist based in Los Angeles" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: "Please enter a valid email." };
  }
  // Backstop for clients that bypass the browser-side checks.
  if (name.length > 200 || email.length > 254 || message.length > 5000) {
    return { success: false, error: "Submission is too long." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "alanmulhall@gmail.com",
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return { success: false, error: "Failed to send. Please try again." };
  }
  return { success: true };
}

export async function loader() {
  const apiUrl = process.env.RAILS_API_URL ?? "http://localhost:3000";
  try {
    // The gallery blocks first paint, so bound the wait and degrade to an
    // empty gallery rather than erroring the whole page if the API is down.
    const res = await fetch(`${apiUrl}/api/images`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) {
      return { images: [] };
    }
    const data = await res.json();
    const images: WorkImage[] = data
      .filter((img: { url: string | null }) => Boolean(img.url))
      .map((img: { url: string; title: string | null; year: number | null }) => ({
        url: img.url,
        title: img.title ?? "",
        year: img.year ?? null,
      }));
    return { images };
  } catch (error) {
    console.error(`Failed to load images from ${apiUrl}:`, error);
    return { images: [] };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { images } = loaderData;
  const [contactOpen, setContactOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="h-screen flex flex-col bg-white text-black overflow-hidden transition-opacity duration-[3000ms] ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <header className="px-6 md:px-10 py-4 md:pt-8 md:pb-16 flex items-center justify-between flex-shrink-0">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[1.75rem] font-medium tracking-tight">Alan Mulhall</span>
          <div className="flex items-center gap-2">
            {/* <a
              href="https://www.instagram.com/alanvmulhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-base text-gray-400 hover:text-black transition-colors underline"
              onClick={() => gtag("event", "instagram_click")}
            >
              instagram
            </a>
            <span className="font-mono text-base text-gray-400">|</span> */}
            <button
              onClick={() => {
                setContactOpen(true);
                gtag("event", "contact_modal_opened");
              }}
              className="font-mono text-base text-gray-400 hover:text-black transition-colors text-left underline"
            >
              contact
            </button>
          </div>
        </div>
      </header>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {/* WorkSlider assumes at least one image (clone slides, position counter) */}
      {images.length > 0 ? <WorkSlider images={images} /> : <div className="flex-1" />}
      <footer className="px-6 md:px-10 py-6 mt-[62px] flex-shrink-0 flex items-center justify-between">
        <span className="font-mono text-sm text-gray-400">
          Alan Mulhall | {__GIT_HASH__} | &copy; {new Date().getFullYear()}
        </span>
        {/* <a
          href="https://www.instagram.com/alanvmulhall/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-400 hover:text-black transition-colors"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
            <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
            <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
          </svg>
        </a> */}
      </footer>
    </div>
  );
}
