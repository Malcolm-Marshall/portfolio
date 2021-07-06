import Link from 'next/link';
import React from 'react';
import { Document, Page } from 'react-pdf';

export default function Resume() {
  return (
    <>
      <h3 href="https://malcolm-marshall-resume.s3.amazonaws.com/Malcolm+Marshall+Resume+2021.pdf">Resumé</h3>
      <Link href="/">Home</Link>
    </>
  )
}