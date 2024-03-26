import React from "react";
import RootLayout from "@/app/layout";
import Head from 'next/head';

const AboutPage = () => {
  return (
    <RootLayout>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1>Contact Page</h1>
      <p>This is the contact page.</p>
    </RootLayout>
  );
};

export default AboutPage;