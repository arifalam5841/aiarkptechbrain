import { Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { transport, venueAddress } from '../../data/content.js';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(venueAddress)}&output=embed`;

export default function Venue() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(venueAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="venue-section section-container reveal" id="venue">
      <div className="venue-panel blueprint">
        <div className="venue-copy">
          <p className="eyebrow">Find Your Way To TechBrain</p>
          <h2>A. R. Kalsekar Polytechnic Campus</h2>
          <address>
            Plot No. 2 & 3, Khanda Gaon, Near Thana Naka, New Panvel, Navi Mumbai 410206
          </address>
          <div className="venue-actions">
            <a className="primary-button small-button" href={mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            <button className="secondary-button small-button" type="button" onClick={copyAddress}>
              <Copy size={16} aria-hidden="true" />
              {copied ? 'Address copied' : 'Copy Address'}
            </button>
          </div>
          <div className="transport-row">
            {transport.map(({ icon: Icon, label, detail }) => (
              <span key={label}>
                <Icon size={23} aria-hidden="true" />
                <b>{label}</b>
                {detail}
              </span>
            ))}
          </div>
        </div>

        <div className="map-preview">
          <iframe
            title="A. R. Kalsekar Polytechnic Campus on Google Maps"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
