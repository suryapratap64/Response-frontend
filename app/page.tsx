"use client";
import Head from 'next/head';
import EmotionForm from '@/components/EmotionForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Emotion Reflector</title>
        <meta name="description" content="Analyze and reflect your emotion in seconds!" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-200 via-white to-pink-200">
        
        <EmotionForm />
      </main>
    </>
  );
}
