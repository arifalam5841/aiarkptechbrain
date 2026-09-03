import { ArrowLeft } from 'lucide-react';
import Footer from '../components/layout/Footer.jsx';
import Header from '../components/layout/Header.jsx';

const legalContent = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    updated: 'Last updated: September 4, 2026',
    intro:
      'This Privacy Policy explains how the TechBrain 4.0 organizing team collects, uses, stores, and protects information submitted through this website and registration form.',
    sections: [
      {
        heading: 'Information We Collect',
        items: [
          'Team and participant details such as team name, participant names, college name, contact number, email address, and selected event.',
          'Uploaded files such as ID images, payment or permission documents, presentation PDFs, or other files requested for event verification.',
          'Basic technical information such as browser, device, and submission time, if collected by the website or hosting service.',
        ],
      },
      {
        heading: 'How We Use Information',
        items: [
          'To confirm registrations and communicate event updates.',
          'To verify team eligibility, uploaded documents, and event participation.',
          'To coordinate volunteers, judges, certificates, prizes, and event-day arrangements.',
          'To maintain records required for the smooth management of TechBrain 4.0.',
        ],
      },
      {
        heading: 'Storage And Security',
        items: [
          'Registration details and uploaded files may be stored using Firebase services and related event management tools.',
          'Access to submitted data is limited to authorized organizers, faculty coordinators, and volunteers who need it for event operations.',
          'Reasonable steps are taken to protect data, but no online system can be guaranteed to be completely secure.',
        ],
      },
      {
        heading: 'Sharing Of Information',
        items: [
          'We do not sell participant data.',
          'Information may be shared with college authorities, event coordinators, judges, certificate teams, or service providers only when required for event purposes.',
          'Information may be disclosed if required by law, regulation, or a valid request from competent authorities.',
        ],
      },
      {
        heading: 'Your Choices',
        items: [
          'Participants may contact the organizing team to correct registration details.',
          'Requests to delete or update submitted information will be handled where possible, subject to event records and administrative requirements.',
          'Participants should avoid uploading unnecessary personal or sensitive documents unless specifically requested.',
        ],
      },
      {
        heading: 'Contact',
        items: [
          'For privacy questions or corrections, contact the TechBrain 4.0 organizing team through the contact details provided on this website.',
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'Terms And Conditions',
    title: 'Terms And Conditions',
    updated: 'Last updated: September 4, 2026',
    intro:
      'These Terms and Conditions apply to the use of this website and participation in TechBrain 4.0. By registering, participants agree to follow the event rules and instructions shared by the organizers.',
    sections: [
      {
        heading: 'Registration',
        items: [
          'Participants must submit accurate team, college, contact, and event details.',
          'The organizing team may reject, hold, or cancel registrations that are incomplete, incorrect, duplicate, or against event rules.',
          'Teams are responsible for checking their contact details before submitting the form.',
        ],
      },
      {
        heading: 'Participation Rules',
        items: [
          'Participants must follow event guidelines, reporting times, team-size rules, and instructions given by coordinators, judges, and faculty members.',
          'Teams must bring required materials such as college ID cards, laptops, presentations, chargers, and any other items mentioned for their selected event.',
          'Misconduct, plagiarism, false information, or violation of rules may lead to disqualification.',
        ],
      },
      {
        heading: 'Uploads And Submissions',
        items: [
          'Participants are responsible for ensuring that uploaded images, PDFs, presentations, and project materials are accurate and safe to share.',
          'Submitted files may be reviewed by organizers and judges for registration, evaluation, certificate, and event management purposes.',
          'Participants must not upload unlawful, harmful, copied, or unrelated content.',
        ],
      },
      {
        heading: 'Fees, Prizes, And Certificates',
        items: [
          'Event fees, if applicable, must be paid as instructed by the organizing team.',
          'Prizes, certificates, and recognition are subject to successful participation, verification, and final decisions by the organizers.',
          'Judges and organizers decisions for event results will be final.',
        ],
      },
      {
        heading: 'Event Changes',
        items: [
          'The date, schedule, rules, venue arrangements, and event format may be changed if required.',
          'The organizing team will try to communicate important updates through the website, WhatsApp, phone, email, or college channels.',
        ],
      },
      {
        heading: 'Limitation Of Responsibility',
        items: [
          'Participants are responsible for their personal belongings, travel, devices, and documents.',
          'The organizers are not responsible for losses caused by incorrect participant information, technical issues, late arrival, or failure to follow instructions.',
        ],
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const content = legalContent[type] ?? legalContent.privacy;

  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="legal-shell">
          <a className="back-link" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to TechBrain 4.0
          </a>
          <article className="legal-card blueprint">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="legal-updated">{content.updated}</p>
            <p className="legal-intro">{content.intro}</p>

            {content.sections.map((section) => (
              <section className="legal-section" key={section.heading}>
                <h2>{section.heading}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <p className="legal-note">
              This page is written for event information and transparency. It should be reviewed by the
              organizing institution before publishing.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
