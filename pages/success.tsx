import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

interface Props {}

export default function success({}: Props): ReactElement {
  return (
    <Layout>
      <h2>Form Successfully Submitted!</h2>
      <p>Thank you for contacting me! You should have a reply soon.</p>

      <Link href="/">
        <a>
          <h3 className="back-to-home-button">back to home</h3>
        </a>
      </Link>
    </Layout>
  );
}
