// Utility to load legacy HTML content from the mirrored folder and lightly rewrite links
// so they work within the local Next.js app.

import path from 'path';
import { promises as fs } from 'fs';

const LEGACY_DIR = path.resolve(process.cwd(), '..', 'legacy-mirror');

function rewriteLegacyLinks(html) {
  // Basic replacements to retarget legacy links to local routes.
  const replacements = [
    ['http://localhost:4040/home', '/home'],
    ['http://localhost:4040/my-hr', '/my-hr'],
    ['http://localhost:4040/my-workspace', '/my-workspace'],
    ['http://localhost:4040/company', '/company'],
    ['http://localhost:4040/search', '/search'],
    ['http://localhost:4040/om-bahethi', '/om-bahethi'],
    ['http://localhost:4040/accounting-payroll', '/accounting-payroll'],
    ['http://localhost:4040/business-development', '/business-development'],
    ['http://localhost:4040/communications', '/communications'],
    ['http://localhost:4040/communications-survey-results', '/communications-survey-results'],
    ['http://localhost:4040/employee-faqs', '/employee-faqs'],
    ['http://localhost:4040/updated-pto-policy-frequently-asked-questions', '/updated-pto-policy-frequently-asked-questions'],
    ['http://localhost:4040/information-technology', '/information-technology'],
    ['http://localhost:4040/opportunities', '/opportunities'],
    ['http://localhost:4040/quality-management-system', '/quality-management-system'],
    ['http://localhost:4040/company-forms', '/company-forms'],
    ['http://localhost:4040/strategy', '/strategy'],
    ['http://localhost:4040/travel', '/travel'],
    ['http://localhost:4040/ssai-roundup', '/ssai-roundup'],

    // my.ssai.app variants
    ['https://my.ssai.app/home', '/home'],
    ['https://my.ssai.app/my-hr', '/my-hr'],
    ['https://my.ssai.app/my-workspace', '/my-workspace'],
    ['https://my.ssai.app/company', '/company'],
    ['https://my.ssai.app/search', '/search'],
    ['https://my.ssai.app', '/'],
    ['http://my.ssai.app', '/'],
  ];

  let out = html;
  for (const [from, to] of replacements) {
    out = out.split(from).join(to);
  }

  // Block requests to legacy Liferay asset endpoints that don't exist locally.
  // Replace href/src pointing to "/o/..." or "/combo" with harmless values.
  out = out.replace(/\s(href|src)\s*=\s*"(\/combo[^\"]*|\/o\/[^\"]*)"/gi, ' $1="#"');
  out = out.replace(/\s(href|src)\s*=\s*'(\/combo[^']*|\/o\/[^']*)'/gi, ' $1="#"');

  return out;
}

function sanitizeLegacyHtml(html) {
  let out = html;

  // Remove entire <head> blocks and root wrappers that can cause hydration mismatches.
  out = out.replace(/<head[\s\S]*?<\/head>/gi, '');
  out = out.replace(/<html[^>]*>/gi, '');
  out = out.replace(/<\/html>/gi, '');
  out = out.replace(/<body[^>]*>/gi, '');
  out = out.replace(/<\/body>/gi, '');

  // Strip script, style, link, and meta tags.
  out = out.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  out = out.replace(/<link\b[^>]*>/gi, '');
  out = out.replace(/<meta\b[^>]*>/gi, '');

  // Remove inline event handlers like onclick, onload, etc.
  out = out.replace(/\s(on[a-z]+)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');

  // Drop HTML comments.
  out = out.replace(/<!--([\s\S]*?)-->/g, '');

  return out;
}

function extractMainContentFromFullHtml(raw) {
  // Attempt to extract just the main content area from a full HTML page.
  const tryPatterns = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<div[^>]*id=["']main-content["'][^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*id=["']content["'][^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class=["'][^"']*journal-content-article[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class=["'][^"']*entry-body[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<body[^>]*>([\s\S]*?)<\/body>/i,
  ];

  for (const re of tryPatterns) {
    const m = raw.match(re);
    if (m && m[1]) {
      return m[1];
    }
  }
  // Fallback to raw if no match found.
  return raw;
}

export async function loadLegacyHtml(basename) {
  // Try "<basename>_main_content.html" first, then fallback to "<basename>.html"
  const candidates = [
    `${basename}_main_content.html`,
    `${basename}.html`,
  ];

  for (const file of candidates) {
    const filePath = path.join(LEGACY_DIR, file);
    try {
      const raw = await fs.readFile(filePath, 'utf8');
      const extracted = raw.includes('<html') ? extractMainContentFromFullHtml(raw) : raw;
      // First rewrite links to local routes, then sanitize to prevent runtime errors.
      const rewritten = rewriteLegacyLinks(extracted);
      return sanitizeLegacyHtml(rewritten);
    } catch (err) {
      // Continue to next candidate
    }
  }

  // Not found
  return `<div class="text-red-700">Legacy content not found for: ${basename}</div>`;
}