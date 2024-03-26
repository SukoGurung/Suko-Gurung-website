import React from "react";
import RootLayout from "@/app/layout";
import { metadata } from "@/app/metadata";
import Head from 'next/head';

const ContactPage = () => {
  return (
    <RootLayout>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1>Contact Page</h1>
      <p>This is the contact page.</p>
      <h1>Contac Page</h1>
      <p>This is the about page.</p>
    </RootLayout>
  );
};

export default ContactPage;