"use client";

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - VLP Technologies | Get in Touch",
  description:
    "Contact VLP Technologies for your web development, mobile app, and digital solution needs. Located in Noida, India. Call +91 9648974867 or email us.",
  openGraph: {
    title: "Contact Us - VLP Technologies | Get in Touch",
    description:
      "Contact VLP Technologies for your technology needs. Professional services in Noida, India.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
