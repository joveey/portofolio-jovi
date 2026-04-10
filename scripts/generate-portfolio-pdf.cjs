const fs = require('fs');
const path = require('path');
const {
  PDFDocument,
  StandardFonts,
  rgb,
} = require('pdf-lib');

const PAGE_WIDTH = 960;
const PAGE_HEIGHT = 540;

const COLORS = {
  background: hex('#F4F8FC'),
  surface: hex('#FFFFFF'),
  surfaceAlt: hex('#F8FBFF'),
  border: hex('#D9E4F0'),
  text: hex('#0F172A'),
  muted: hex('#64748B'),
  dark: hex('#0F172A'),
  darkAlt: hex('#111827'),
  sky: hex('#0EA5E9'),
  skySoft: hex('#E0F2FE'),
  cyanSoft: hex('#ECFEFF'),
  blueSoft: hex('#DBEAFE'),
  success: hex('#16A34A'),
};

const profile = {
  name: 'Muhammad Jovi Syawal Difa',
  title: 'Junior Web Developer',
  summary:
    'Fresh graduate in Information Systems with hands-on experience in web development, software engineering, and internship-based project delivery.',
  contact: [
    'Email: jovisywl@gmail.com',
    'LinkedIn: linkedin.com/in/jovi-syawal',
    'GitHub: github.com/joveey',
  ],
  tags: ['Fresh Graduate', 'Laravel & PHP', 'Next.js & React', 'Open to Opportunities'],
};

const education = {
  degree: 'Bachelor of Information Systems',
  school: 'National University',
  period: '2022 - 2026',
  gpa: '3.78 / 4.00',
};

const certification = {
  name: 'BNSP Junior Web Developer',
  year: '2026',
};

const experiences = [
  {
    company: 'PT. AIS Teknologi',
    role: 'IT Intern',
    period: 'May 2025 - August 2025',
    points: [
      'Assisted in system support and troubleshooting.',
      'Supported basic development tasks and system implementation.',
    ],
  },
  {
    company: 'PT. Panasonic Gobel Indonesia',
    role: 'MIS Intern',
    period: 'September 2025 - December 2025',
    points: [
      'Developed internal projects for operational needs across divisions.',
      'Built tools such as an Upload Center for document workflows.',
    ],
  },
];

const projects = [
  {
    title: 'Cuswash',
    subtitle: 'Car Wash Booking App',
    description:
      'Built a booking platform with Midtrans payment flow and real-time scheduling experience.',
    stack: 'Next.js, TypeScript, Prisma, Tailwind CSS, Midtrans',
  },
  {
    title: 'Event Registration',
    subtitle: 'Registration Platform',
    description:
      'Delivered a registration system with validation and admin management for participants.',
    stack: 'Next.js, TypeScript, Prisma, PostgreSQL',
  },
  {
    title: 'BK Online System',
    subtitle: 'Counseling API Platform',
    description:
      'Developed a Laravel API and Vue.js front end for student-counselor communication.',
    stack: 'Laravel API, Vue.js, MySQL, JWT Auth',
  },
  {
    title: 'E-commerce Platform',
    subtitle: 'Full-Stack Commerce',
    description:
      'Collaborated on product, cart, and payment workflows for an end-to-end commerce app.',
    stack: 'Laravel, PHP, MySQL, Blade, Bootstrap',
  },
];

const compactSkillRows = [
  { label: 'Frontend', value: 'React / Next / Vue' },
  { label: 'Backend', value: 'Laravel / PHP / REST' },
  { label: 'Database', value: 'MySQL / PostgreSQL / Prisma' },
  { label: 'Tools', value: 'Git / Midtrans / JWT' },
];

async function main() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('Muhammad Jovi Syawal Difa Portfolio');
  pdfDoc.setAuthor(profile.name);
  pdfDoc.setSubject('Portfolio Deck');
  pdfDoc.setKeywords(['portfolio', 'junior web developer', 'next.js', 'laravel']);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const imageBytes = fs.readFileSync(path.join(__dirname, '..', 'public', 'profile.jpg'));
  const profileImage = await pdfDoc.embedJpg(imageBytes);

  drawCoverPage(pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), fontRegular, fontBold, profileImage);
  drawResumePage(pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), fontRegular, fontBold);
  drawProjectsPage(pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), fontRegular, fontBold);

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'Muhammad-Jovi-Portfolio.pdf'),
    pdfBytes,
  );
}

function drawCoverPage(page, fontRegular, fontBold, profileImage) {
  drawBackground(page);
  drawPageLabel(page, fontBold, '01', 'Portfolio Deck');

  page.drawRectangle({
    x: 46,
    y: 66,
    width: 14,
    height: 408,
    color: COLORS.sky,
  });

  page.drawText('MUHAMMAD JOVI', {
    x: 84,
    y: 386,
    size: 31,
    font: fontBold,
    color: COLORS.text,
  });
  page.drawText('SYAWAL DIFA', {
    x: 84,
    y: 347,
    size: 31,
    font: fontBold,
    color: COLORS.text,
  });
  page.drawText(profile.title, {
    x: 84,
    y: 304,
    size: 16,
    font: fontRegular,
    color: COLORS.sky,
  });

  drawWrappedText(page, profile.summary, {
    x: 84,
    y: 250,
    maxWidth: 420,
    size: 13,
    lineHeight: 20,
    font: fontRegular,
    color: COLORS.muted,
  });

  let tagX = 84;
  const tagY = 165;
  profile.tags.forEach((tag, index) => {
    const isAccent = index === 0 || index === 3;
    tagX += drawChip(page, tag, {
      x: tagX,
      y: tagY,
      font: fontBold,
      size: 9.5,
      fill: isAccent ? COLORS.skySoft : COLORS.surface,
      textColor: isAccent ? COLORS.sky : COLORS.text,
      border: COLORS.border,
      paddingX: 14,
      paddingY: 8,
    }) + 10;
    if (tagX > 470 && index < profile.tags.length - 1) {
      tagX = 84;
    }
  });

  const contactY = 86;
  profile.contact.forEach((item, index) => {
    const cardX = 84 + index * 145;
    drawCard(page, {
      x: cardX,
      y: contactY,
      width: 132,
      height: 52,
      fill: COLORS.surface,
      borderColor: COLORS.border,
    });
    drawWrappedText(page, item, {
      x: cardX + 12,
      y: contactY + 33,
      maxWidth: 108,
      size: 9.5,
      lineHeight: 13,
      font: fontRegular,
      color: COLORS.muted,
    });
  });

  drawCard(page, {
    x: 604,
    y: 72,
    width: 290,
    height: 396,
    fill: COLORS.surface,
    borderColor: COLORS.border,
  });
  page.drawRectangle({
    x: 628,
    y: 116,
    width: 242,
    height: 286,
    color: COLORS.skySoft,
  });
  page.drawImage(profileImage, {
    x: 636,
    y: 124,
    width: 226,
    height: 301,
  });
  drawChip(page, 'Verified Portfolio Profile', {
    x: 628,
    y: 420,
    font: fontBold,
    size: 9,
    fill: COLORS.dark,
    textColor: COLORS.surface,
    border: COLORS.dark,
    paddingX: 12,
    paddingY: 7,
  });
  page.drawText('Professional Snapshot', {
    x: 628,
    y: 89,
    size: 10,
    font: fontBold,
    color: COLORS.muted,
  });
  page.drawText('Focused on practical, recruiter-friendly presentation.', {
    x: 628,
    y: 72,
    size: 11,
    font: fontRegular,
    color: COLORS.text,
  });

  drawSlideNumber(page, fontBold, 1);
}

function drawResumePage(page, fontRegular, fontBold) {
  drawBackground(page);
  drawPageLabel(page, fontBold, '02', 'Resume Highlights');

  const resumeTitleBottom = drawWrappedText(
    page,
    'Education, certification, and internship experience',
    {
      x: 52,
      y: 462,
      maxWidth: 720,
      size: 24,
      lineHeight: 29,
      font: fontBold,
      color: COLORS.text,
    },
  );
  page.drawText('A concise resume slide designed for quick recruiter review.', {
    x: 52,
    y: resumeTitleBottom - 10,
    size: 12,
    font: fontRegular,
    color: COLORS.muted,
  });

  drawCard(page, {
    x: 52,
    y: 248,
    width: 250,
    height: 146,
    fill: COLORS.surface,
    borderColor: COLORS.border,
  });
  page.drawText('Education', {
    x: 72,
    y: 367,
    size: 11,
    font: fontBold,
    color: COLORS.sky,
  });
  drawWrappedText(page, education.degree, {
    x: 72,
    y: 333,
    maxWidth: 205,
    size: 17,
    lineHeight: 21,
    font: fontBold,
    color: COLORS.text,
  });
  page.drawText(`${education.school} | ${education.period}`, {
    x: 72,
    y: 286,
    size: 11,
    font: fontRegular,
    color: COLORS.muted,
  });
  drawChip(page, `GPA ${education.gpa}`, {
    x: 72,
    y: 258,
    font: fontBold,
    size: 9.5,
    fill: COLORS.skySoft,
    textColor: COLORS.sky,
    border: COLORS.border,
    paddingX: 14,
    paddingY: 8,
  });

  drawCard(page, {
    x: 52,
    y: 92,
    width: 250,
    height: 128,
    fill: COLORS.surface,
    borderColor: COLORS.border,
  });
  page.drawText('Certification', {
    x: 72,
    y: 193,
    size: 11,
    font: fontBold,
    color: COLORS.sky,
  });
  drawWrappedText(page, certification.name, {
    x: 72,
    y: 160,
    maxWidth: 205,
    size: 17,
    lineHeight: 21,
    font: fontBold,
    color: COLORS.text,
  });
  drawWrappedText(page, `Certified in ${certification.year} for junior-level web development competency.`, {
    x: 72,
    y: 120,
    maxWidth: 200,
    size: 11,
    lineHeight: 15,
    font: fontRegular,
    color: COLORS.muted,
  });

  drawCard(page, {
    x: 328,
    y: 92,
    width: 580,
    height: 302,
    fill: COLORS.surface,
    borderColor: COLORS.border,
  });
  page.drawText('Internship Experience', {
    x: 352,
    y: 365,
    size: 11,
    font: fontBold,
    color: COLORS.sky,
  });
  drawWrappedText(page, 'Hands-on experience through two internship roles', {
    x: 352,
    y: 334,
    maxWidth: 470,
    size: 16,
    lineHeight: 19,
    font: fontBold,
    color: COLORS.text,
  });

  experiences.forEach((experience, index) => {
    const cardY = index === 0 ? 216 : 104;
    drawCard(page, {
      x: 352,
      y: cardY,
      width: 532,
      height: 96,
      fill: COLORS.surfaceAlt,
      borderColor: COLORS.border,
    });
    page.drawRectangle({
      x: 368,
      y: cardY + 18,
      width: 6,
      height: 60,
      color: index === 0 ? COLORS.sky : COLORS.dark,
    });
    page.drawText(experience.company, {
      x: 388,
      y: cardY + 62,
      size: 15,
      font: fontBold,
      color: COLORS.text,
    });
    page.drawText(`${experience.role} | ${experience.period}`, {
      x: 388,
      y: cardY + 41,
      size: 10.5,
      font: fontRegular,
      color: COLORS.muted,
    });
    drawWrappedText(page, `- ${experience.points[0]}\n- ${experience.points[1]}`, {
      x: 388,
      y: cardY + 22,
      maxWidth: 452,
      size: 10,
      lineHeight: 12,
      font: fontRegular,
      color: COLORS.text,
    });
  });

  drawCompactSkillFooter(page, fontRegular, fontBold, 2);

  drawSlideNumber(page, fontBold, 2);
}

function drawProjectsPage(page, fontRegular, fontBold) {
  drawBackground(page);
  drawPageLabel(page, fontBold, '03', 'Projects and Skills');

  const projectsTitleBottom = drawWrappedText(
    page,
    'Selected projects aligned with practical web development work',
    {
      x: 52,
      y: 462,
      maxWidth: 690,
      size: 24,
      lineHeight: 29,
      font: fontBold,
      color: COLORS.text,
    },
  );
  page.drawText('A compact slide focused on product thinking, implementation, and tools.', {
    x: 52,
    y: projectsTitleBottom - 10,
    size: 12,
    font: fontRegular,
    color: COLORS.muted,
  });

  const cardPositions = [
    { x: 52, y: 250 },
    { x: 492, y: 250 },
    { x: 52, y: 104 },
    { x: 492, y: 104 },
  ];

  projects.forEach((project, index) => {
    const position = cardPositions[index];
    drawCard(page, {
      x: position.x,
      y: position.y,
      width: 388,
      height: 126,
      fill: COLORS.surface,
      borderColor: COLORS.border,
    });
    page.drawText(project.title, {
      x: position.x + 18,
      y: position.y + 94,
      size: 16,
      font: fontBold,
      color: COLORS.text,
    });
    page.drawText(project.subtitle, {
      x: position.x + 18,
      y: position.y + 74,
      size: 10.5,
      font: fontBold,
      color: COLORS.sky,
    });
    drawWrappedText(page, project.description, {
      x: position.x + 18,
      y: position.y + 52,
      maxWidth: 352,
      size: 10.5,
      lineHeight: 13,
      font: fontRegular,
      color: COLORS.muted,
    });
    drawWrappedText(page, `Stack: ${project.stack}`, {
      x: position.x + 18,
      y: position.y + 20,
      maxWidth: 352,
      size: 9,
      lineHeight: 12,
      font: fontBold,
      color: COLORS.text,
    });
  });

  drawCard(page, {
    x: 768,
    y: 364,
    width: 140,
    height: 62,
    fill: COLORS.dark,
    borderColor: COLORS.dark,
  });
  page.drawText('Portfolio', {
    x: 786,
    y: 400,
    size: 10,
    font: fontBold,
    color: COLORS.surface,
  });
  page.drawText('Slide Deck PDF', {
    x: 786,
    y: 381,
    size: 15,
    font: fontBold,
    color: COLORS.surface,
  });

  drawCompactSkillFooter(page, fontRegular, fontBold, 3);

  drawSlideNumber(page, fontBold, 3);
}

function drawBackground(page) {
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.background,
  });
  page.drawCircle({
    x: 840,
    y: 500,
    size: 120,
    color: COLORS.skySoft,
    opacity: 0.8,
  });
  page.drawCircle({
    x: 110,
    y: 30,
    size: 120,
    color: COLORS.cyanSoft,
    opacity: 0.8,
  });
  page.drawCircle({
    x: 720,
    y: 220,
    size: 150,
    color: COLORS.blueSoft,
    opacity: 0.35,
  });
}

function drawPageLabel(page, fontBold, index, title) {
  drawChip(page, index, {
    x: 52,
    y: 494,
    font: fontBold,
    size: 10,
    fill: COLORS.dark,
    textColor: COLORS.surface,
    border: COLORS.dark,
    paddingX: 10,
    paddingY: 6,
  });
  page.drawText(title, {
    x: 92,
    y: 501,
    size: 11,
    font: fontBold,
    color: COLORS.muted,
  });
}

function drawSlideNumber(page, fontBold, number) {
  page.drawText(String(number).padStart(2, '0'), {
    x: 904,
    y: 18,
    size: 10,
    font: fontBold,
    color: COLORS.muted,
  });
}

function drawCompactSkillFooter(page, fontRegular, fontBold, pageNumber) {
  const footerY = pageNumber === 2 ? 24 : 18;
  const footerHeight = 46;
  const cardWidth = 202;
  const gap = 12;

  compactSkillRows.forEach((item, index) => {
    const x = 52 + index * (cardWidth + gap);
    drawCard(page, {
      x,
      y: footerY,
      width: cardWidth,
      height: footerHeight,
      fill: COLORS.surface,
      borderColor: COLORS.border,
    });
    page.drawText(item.label, {
      x: x + 12,
      y: footerY + 27,
      size: 9,
      font: fontBold,
      color: COLORS.sky,
    });
    page.drawText(item.value, {
      x: x + 64,
      y: footerY + 27,
      size: 8.5,
      font: fontRegular,
      color: COLORS.text,
    });
  });
}

function drawCard(page, { x, y, width, height, fill, borderColor }) {
  page.drawRectangle({
    x,
    y,
    width,
    height,
    color: fill,
    borderColor,
    borderWidth: 1,
  });
}

function drawChip(page, text, options) {
  const width = options.font.widthOfTextAtSize(text, options.size) + options.paddingX * 2;
  const height = options.size + options.paddingY * 2;
  page.drawRectangle({
    x: options.x,
    y: options.y,
    width,
    height,
    color: options.fill,
    borderColor: options.border,
    borderWidth: 1,
  });
  page.drawText(text, {
    x: options.x + options.paddingX,
    y: options.y + options.paddingY,
    size: options.size,
    font: options.font,
    color: options.textColor,
  });
  return width;
}

function drawWrappedText(page, text, options) {
  const lines = wrapText(text, options.font, options.size, options.maxWidth);
  let cursorY = options.y;
  lines.forEach((line) => {
    page.drawText(line, {
      x: options.x,
      y: cursorY,
      size: options.size,
      font: options.font,
      color: options.color,
    });
    cursorY -= options.lineHeight;
  });
  return cursorY;
}

function wrapText(text, font, size, maxWidth) {
  const paragraphs = text.split('\n');
  const lines = [];

  paragraphs.forEach((paragraph, paragraphIndex) => {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);

    if (!words.length) {
      lines.push('');
      return;
    }

    let currentLine = words[0];
    for (let i = 1; i < words.length; i += 1) {
      const nextLine = `${currentLine} ${words[i]}`;
      if (font.widthOfTextAtSize(nextLine, size) <= maxWidth) {
        currentLine = nextLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);

    if (paragraphIndex < paragraphs.length - 1) {
      lines.push('');
    }
  });

  return lines;
}

function hex(value) {
  const normalized = value.replace('#', '');
  const channels = normalized.match(/.{1,2}/g).map((channel) => parseInt(channel, 16) / 255);
  return rgb(channels[0], channels[1], channels[2]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
