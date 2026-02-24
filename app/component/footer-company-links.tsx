"use client";

import { useMemo, useState } from "react";

type CompanyKey = "about" | "careers" | "sustainability" | "contact";

const COMPANY_INFO: Record<CompanyKey, { label: string; title: string; body: string }> = {
  about: {
    label: "About Us",
    title: "About Hibis'o",
    body: "Hibis'o connects brands with travel creators to produce premium destination-led UGC. We combine creative matching, campaign operations, and quality control into one workflow.",
  },
  careers: {
    label: "Careers",
    title: "Careers at Hibis'o",
    body: "We are growing a remote-first team across strategy, creator partnerships, and production operations. We value ownership, speed, and thoughtful creative execution.",
  },
  sustainability: {
    label: "Sustainability",
    title: "Sustainability",
    body: "Our campaigns are designed to reduce waste through focused production planning, reusable creative assets, and responsible creator logistics when possible.",
  },
  contact: {
    label: "Contact",
    title: "Contact Hibis'o",
    body: "For partnerships, platform support, or creator inquiries, contact the Hibis'o team and we will route your request to the right specialist quickly.",
  },
};

export function FooterCompanyLinks() {
  const [active, setActive] = useState<CompanyKey | null>(null);
  const orderedKeys = useMemo(
    () => Object.keys(COMPANY_INFO) as CompanyKey[],
    []
  );

  return (
    <>
      <div className="footer-company-accordion">
        {orderedKeys.map((key) => {
          const item = COMPANY_INFO[key];
          const isOpen = active === key;
          return (
            <div className="footer-company-item" key={key}>
              <button
                className="footer-company-trigger"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActive((prev) => (prev === key ? null : key))}
              >
                <span>{item.label}</span>
                <span className="footer-company-chevron" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div className="footer-company-panel">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
