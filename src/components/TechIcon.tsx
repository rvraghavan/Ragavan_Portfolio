import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  switch (name.toLowerCase()) {
    case 'java':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M7.8 19.5c2.4.3 4.9.4 7.2-.2.6-.2 1.3-.6 1.7-1.1.2-.2.3-.6.1-.8-.3-.3-.9-.2-1.3-.1-2 .5-4.2.4-6.3.1-.7-.1-1.5-.2-2.1.1-.3.2-.4.6-.2.8.2.2.6.3.9.3z" fill="#E76F00" />
          <path d="M6.5 21.2c3 .4 6.2.4 9.1-.3.8-.2 1.7-.5 2.1-1.3.2-.3.2-.8-.1-1.1-.3-.3-.8-.3-1.2-.2-2.6.7-5.4.7-8 .2-.9-.2-1.9-.3-2.6.3-.4.3-.5.9-.2 1.3.2.4.6.8 1 1.1z" fill="#5382A1" />
          <path d="M12.6 1.5c.3 1.1.4 2.2-.2 3.2-.5.8-1.4 1.4-1.8 2.3-.5 1.1-.3 2.5.3 3.5.7 1.1 1.8 1.9 2.4 3.1.6 1.1.6 2.5.1 3.7-.1.3-.3.6-.6.6-.3 0-.5-.3-.5-.6.3-1 .4-2.1-.2-3.1-.6-.9-1.5-1.5-1.9-2.5-.5-1.1-.4-2.4.2-3.5.6-1.1 1.6-1.9 2.1-3.1.2-.5.2-1.1.1-1.6.3.2.5.7.5 1.5z" fill="#E76F00" />
          <path d="M15.4 6c.3 1 .2 2-.4 2.9-.6.9-1.5 1.5-2 2.5-.5 1-.4 2.2.1 3.2.5 1 1.4 1.8 1.9 2.8.4.8.4 1.8.1 2.7-.1.3-.3.5-.5.5-.3 0-.4-.2-.5-.5.3-.8.3-1.6-.1-2.4-.5-.9-1.3-1.6-1.8-2.6-.5-1-.5-2.2 0-3.2.5-1 1.4-1.7 1.9-2.7.4-.9.4-1.9.1-2.8 0-.4.3-.5.7-.3.3.1.5.5.6.9z" fill="#5382A1" />
          <path d="M4 16.5c1.2.9 2.7 1.4 4.2 1.6 3.4.4 7 .2 10.3-.6 1.4-.4 2.8-.9 3.8-2 .4-.4.7-1 .5-1.5-.2-.5-.8-.7-1.3-.8-1.5-.2-3 .1-4.5.3-2.9.4-5.8.4-8.7-.1-.9-.2-1.9-.3-2.7.1-.6.3-.9.9-.9 1.5.1.5.3 1 .6 1.5z" fill="#E76F00" />
        </svg>
      );
    case 'spring boot':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M21.8 10.5c-.7-3.8-3.6-6.7-7.4-7.4-4.8-.9-9.5 1.8-11.1 6.3-1.6 4.6.1 9.8 4.2 12.3 4.2 2.6 9.8 1.8 13.1-1.9 1.4-1.6 2.2-3.6 2.2-5.7 0-1.2-.4-2.5-1-3.6z" fill="#6DB33F" />
          <path d="M12 18.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c1.7 0 3.3.7 4.4 1.8l-1.8 1.8c-.7-.7-1.6-1.1-2.6-1.1-2.1 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7c1.8 0 3.3-1.2 3.6-2.9h-3.6v-2.5h6.2c.1.4.1.8.1 1.2 0 3.5-2.8 6.2-6.3 6.2z" fill="#FFFFFF" />
        </svg>
      );
    case 'node.js':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M12 1.5l10 5.8v11.4L12 24.5l-10-5.8V7.3L12 1.5z" fill="#5FA04E" />
          <path d="M12 4.2L4.5 8.5v8.6l7.5 4.3 7.5-4.3V8.5L12 4.2z" fill="#333333" opacity="0.15" />
          <path d="M12 7.2a2.3 2.3 0 012.3 2.3c0 .8-.4 1.5-1 1.9l2.8 4.4h-2.3l-2.2-3.6h-.6v3.6H9V9.5c0-1.3 1-2.3 2.3-2.3h.7zm-1 3.5h.7c.4 0 .8-.3.8-.8s-.4-.8-.8-.8H11v1.6z" fill="#FFFFFF" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3l.1 2.3h5V8H4.6S2 7.7 2 12.4s2.3 4.7 2.3 4.7h1.4v-2c0-2.3 2-2.3 2-2.3h5s1.9 0 1.9-1.9V4.3S15 2 11.9 2zm-2.7 1.4a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#3776AB" />
          <path d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3l-.1-2.3h-5V16h7.5s2.6.3 2.6-4.4-2.3-4.7-2.3-4.7h-1.4v2c0 2.3-2 2.3-2 2.3h-5s-1.9 0-1.9 1.9v6.6s-.4 2.3 2.7 2.3zm2.7-1.4a.9.9 0 110-1.8.9.9 0 010 1.8z" fill="#FFD43B" />
        </svg>
      );
    case 'hibernate':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#59666C" />
          <path d="M7 6h3v5h4V6h3v12h-3v-5h-4v5H7V6z" fill="#B6C1C6" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    case 'rest apis':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" stroke="#0284C7" fill="none" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#38BDF8" />
          <path d="M8 8l-3 4 3 4M16 8l3 4-3 4" stroke="#FFFFFF" />
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M12 2L2 5.5l1.5 13L12 23l8.5-4.5 1.5-13L12 2z" fill="#DD0031" />
          <path d="M12 2v21l8.5-4.5 1.5-13L12 2z" fill="#C3002F" />
          <path d="M12 5.5L6.5 17.5h2.4l1.1-2.8h4l1.1 2.8h2.4L12 5.5zm1.5 7.4h-3L12 8.8l1.5 4.1z" fill="#FFFFFF" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M5.5 11.5h6.5M8.7 11.5v7.5M14 16.5c.6.6 1.4.9 2.3.9 1 0 1.6-.4 1.6-1.1 0-1.4-3.5-1.1-3.5-3.3 0-1.3 1-2.2 2.6-2.2 1 0 1.9.4 2.5 1l-.9 1.1c-.5-.4-1.1-.7-1.7-.7-.8 0-1.2.4-1.2.9 0 1.3 3.5 1.1 3.5 3.3 0 1.4-1.1 2.4-2.8 2.4-1.2 0-2.3-.5-2.9-1.2l.5-1.1z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M8.5 12v5c0 1.2-.7 1.8-1.8 1.8-.7 0-1.4-.3-1.8-.8l1-1.3c.2.3.5.5.8.5.3 0 .5-.2.5-.6V12h1.3zm5.7 3.5c.7.8 1.7 1.3 2.8 1.3 1.2 0 1.9-.5 1.9-1.3 0-1.7-4.2-1.3-4.2-4 0-1.6 1.2-2.7 3.1-2.7 1.2 0 2.3.5 3 1.2l-1.1 1.3c-.5-.5-1.2-.8-2-.8-.8 0-1.3.4-1.3 1 0 1.6 4.2 1.2 4.2 4 0 1.7-1.3 2.7-3.4 2.7-1.5 0-2.8-.6-3.6-1.6l1.2-1.3z" fill="#000000" />
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M2.5 2l1.7 18.5L12 23l7.8-2.5L21.5 2H2.5z" fill="#E34F26" />
          <path d="M12 3.8v17.4l6.3-2 1.3-15.4H12z" fill="#EF652A" />
          <path d="M12 7.7H7.4l.2 2.2h4.4v-2.2zm0 4.4H7.8l.2 2.2h4v-2.2zm0 6l-3.3-.9-.2-2.3H6.3l.4 4.5 5.3 1.5V18.1zM16.6 7.7H12v2.2h4.4l-.4 4.4-4 .9v2.3l6.3-1.7.7-8.1z" fill="#FFFFFF" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M2.5 2l1.7 18.5L12 23l7.8-2.5L21.5 2H2.5z" fill="#1572B6" />
          <path d="M12 3.8v17.4l6.3-2 1.3-15.4H12z" fill="#33A9DC" />
          <path d="M12 7.7H7.4l.2 2.2h4.4v-2.2zm0 4.4H7.8l.2 2.2h4v-2.2zm0 6l-3.3-.9-.2-2.3H6.3l.4 4.5 5.3 1.5V18.1zM16.6 7.7H12v2.2h4.4l-.4 4.4-4 .9v2.3l6.3-1.7.7-8.1z" fill="#FFFFFF" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path d="M8 6h4.5c1.7 0 2.8.9 2.8 2.2 0 1-.7 1.7-1.6 2 1.2.3 2 1.1 2 2.4 0 1.6-1.3 2.6-3.2 2.6H8V6zm2.6 3.6h1.7c.6 0 1-.3 1-.8s-.4-.8-1-.8h-1.7v1.6zm0 3.2v1.8h2c.7 0 1.2-.3 1.2-.9s-.5-.9-1.2-.9h-2z" fill="#FFFFFF" />
        </svg>
      );
    case 'jquery':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <circle cx="12" cy="12" r="11" fill="#0769AD" />
          <path d="M12 4.5c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5 3.4-7.5 7.5-7.5m0-1.5C6.8 3 2.5 7.3 2.5 12.5S6.8 22 12 22s9.5-4.3 9.5-9.5S17.2 3 12 3z" fill="#FFFFFF" />
          <path d="M10.2 15.5c-.8 0-1.4-.4-1.7-1l1.3-.8c.2.4.5.6.8.6.6 0 1-.5 1-1.3V7.2h1.6v5.8c0 1.6-.9 2.5-3 2.5z" fill="#FFFFFF" />
        </svg>
      );
    case 'amazon web services':
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M12.5 16.5c-3.8 0-6.8-1.5-8.5-3.8-.3-.4-.1-.9.4-.7 3.9 2 7.7 2 11.8.6.6-.2 1.1.4.6.8-1.3 1.8-2.7 3.1-4.3 3.1z" fill="#FF9900" />
          <path d="M17.4 15.5c.3-.4 1.4-1.2 1.9-2.3.1-.2.4-.2.5 0 .1.6.2 1.5-.4 2.5-.2.3-.6.5-.9.4-.4-.1-.7-.4-1.1-.6z" fill="#FF9900" />
          <path d="M7.8 7.5h1.9l-2.6 8H5.2l-2.6-8h1.9l1.7 5.7 1.6-5.7zm5.5 0h1.8l-1.9 8h-1.6l-1.3-4.8-1.3 4.8H7.4l-1.9-8h1.8l1.1 5.3 1.3-5.3h1.4l1.3 5.3 1.1-5.3zm6.8 4c-.2-.7-.7-1.2-1.4-1.4-.7-.2-1.5-.1-2.1.2l-.6-1.3c.9-.5 2-.7 3.1-.4 1.1.3 1.9 1.1 2.3 2.2l-1.3.7zm-2.2 4c.8 0 1.5-.3 2.1-.8l.8 1.2c-.8.7-1.8 1.1-2.9 1.1-2.2 0-3.8-1.6-3.8-3.9 0-2.2 1.6-3.9 3.8-3.9 1 0 2 .4 2.8 1.1l-.8 1.2c-.6-.5-1.3-.8-2-.8-1.3 0-2.2 1-2.2 2.4 0 1.4.9 2.5 2.2 2.5z" fill="#FFFFFF" />
        </svg>
      );
    case 'aws ecs':
    case 'aws fargate':
    case 'ecs':
    case 'fargate':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F58220" />
          <path d="M7 8h10M7 12h10M7 16h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    case 'aws lambda':
    case 'lambda':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#FF9900" />
          <path d="M6 18l4.5-9.5h2.5L8.5 18H6zm6.5-6.5l2.2-4.5H18l-3.8 8 3.8 5H15l-2.5-3.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'aws s3':
    case 's3':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#569A31" />
          <ellipse cx="12" cy="7" rx="6" ry="2.5" fill="#FFFFFF" opacity="0.9" />
          <path d="M6 7v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M6 12v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'api gateway':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#FF4F8B" />
          <path d="M4 12h5l2.5-5 5 10 2.5-5h4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'aws cloudfront':
    case 'cloudfront':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#D86613" />
          <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'aws cloudwatch':
    case 'cloudwatch':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#E7157B" />
          <path d="M5 16l4-5 4 3 6-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="19" cy="7" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    case 'aws iam':
    case 'iam':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#DD344C" />
          <circle cx="12" cy="9" r="3.5" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M6 19c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'aws ec2':
    case 'ec2':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F58536" />
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M9 10h6M9 14h6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.4 7.5 6 9l.5-2.2c-2.8-1.2-4.5-3.8-4.5-6.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.2-5 7.4l.6 2.3c4-1.6 6.4-5.3 6.4-9.7 0-5.5-4.5-10-10-10z" fill="#4169E1" />
          <path d="M13.5 8.5c-.8-.5-1.8-.7-2.7-.5-.7.1-1.3.5-1.7 1.1-.6.8-.7 1.8-.4 2.8.2.8.8 1.4 1.5 1.7.5.2 1.1.2 1.6.1l.4 2.8c-1.3.3-2.6.1-3.7-.6-.8-.5-1.4-1.3-1.7-2.2-.4-1.3-.3-2.7.4-3.9.7-1.1 1.8-1.9 3.1-2.1 1.4-.2 2.8.1 3.9.9l-.7 2.1c.1-.8-.1-1.6-.7-2.2z" fill="#336791" />
        </svg>
      );
    case 'oracle database':
    case 'oracle':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F80000" />
          <rect x="4.5" y="6" width="15" height="12" rx="6" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case 'ibm db2':
    case 'db2':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#054ADA" />
          <text x="12" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Db2</text>
          <path d="M5 8h14M5 17h14" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        </svg>
      );
    case 'apache kafka':
    case 'kafka':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#231F20" />
          <circle cx="16" cy="7" r="2.5" fill="#FFFFFF" />
          <circle cx="16" cy="17" r="2.5" fill="#FFFFFF" />
          <circle cx="8" cy="12" r="2.5" fill="#FFFFFF" />
          <path d="M8 12l8-5M8 12l8 5" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      );
    case 'amazon sqs':
    case 'sqs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#FF4F8B" />
          <rect x="5" y="7" width="14" height="10" rx="2" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M8 12h8M13 9l3 3-3 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M22.5 10.5c-.3-.2-1.5-.4-2.4.2-.2-.8-.7-1.4-1.5-1.9l-.6-.4-.4.6c-.6 1-1 2.3-.9 3.5-.8.5-2.2.5-3.3.1l-.5-.2v1.6c0 3.2-2.3 5.9-5.4 6.4-1.3.2-2.7 0-3.9-.6-1.5-.8-2.6-2.1-3-3.7-.2-.7-.2-1.5-.2-2.3H0c0 4.2 3.1 7.8 7.2 8.4 1.7.3 3.5 0 5-.8 3.5-1.7 5.7-5.3 5.6-9.2.9.2 1.9.1 2.8-.3 1.2-.5 1.9-1.4 1.9-1.5z" fill="#2496ED" />
          <path d="M2.5 11h2.2v2H2.5v-2zm3 0h2.2v2H5.5v-2zm3 0h2.2v2H8.5v-2zm3 0h2.2v2h-2.2v-2zm-3-3h2.2v2H8.5V8zm3 0h2.2v2h-2.2V8zm3 0h2.2v2h-2.2V8zm-3-3h2.2v2h-2.2V5z" fill="#2496ED" />
        </svg>
      );
    case 'jenkins':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#D24939" />
          <circle cx="12" cy="8.5" r="3" fill="#FFFFFF" />
          <path d="M8 17c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#FFFFFF" />
          <path d="M10 13h4l-2 3-2-3z" fill="#231F20" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path d="M21.6 10.7L13.3 2.4a1.8 1.8 0 00-2.6 0L8.4 4.7l3.3 3.3a2.1 2.1 0 012.7 2.7l3.2 3.2a2.1 2.1 0 011.8 3.5 2.1 2.1 0 01-3-.1 2.1 2.1 0 01-.4-2.3l-3-3v4.6a2.1 2.1 0 11-1.7 0V9.8a2.1 2.1 0 01-1.1-2.8L6.8 3.6 2.4 8a1.8 1.8 0 000 2.6l8.3 8.3a1.8 1.8 0 002.6 0l8.3-8.2z" fill="#F05032" />
        </svg>
      );
    case 'svn':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#809CC9" />
          <text x="12" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SVN</text>
        </svg>
      );
    case 'maven':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#C71A36" />
          <path d="M6 18L10 6l4 8 4-8v12h-2.5V9.5L12 16l-3.5-6.5V18H6z" fill="#FFFFFF" />
        </svg>
      );
    case 'gradle':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#02303A" />
          <path d="M12 4a8 8 0 00-8 8c0 3.5 2.3 6.5 5.5 7.5L8 15a4.5 4.5 0 018-3l2.8-2A8 8 0 0012 4z" fill="#01B4B6" />
          <circle cx="15.5" cy="15.5" r="3.5" fill="#01B4B6" />
        </svg>
      );
    case 'jira':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#0052CC" />
          <path d="M11.5 4L7 8.5l4.5 4.5 4.5-4.5L11.5 4z" fill="#FFFFFF" opacity="0.7" />
          <path d="M16 8.5L11.5 13l4.5 4.5 4.5-4.5L16 8.5z" fill="#FFFFFF" />
        </svg>
      );
    case 'sonarqube':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#4E9BCD" />
          <path d="M7 16a5 5 0 015-5 5 5 0 015 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M5 19a8 8 0 018-8 8 8 0 018 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    case 'apache tomcat':
    case 'tomcat':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F8DC75" />
          <path d="M6 17c1-3 3-5 6-5s5 2 6 5" stroke="#D18E27" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="10" r="1.5" fill="#D18E27" />
          <circle cx="15" cy="10" r="1.5" fill="#D18E27" />
          <path d="M7 6l3 3M17 6l-3 3" stroke="#D18E27" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'microservices':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="3" width="6" height="6" rx="1.5" stroke="#06B6D4" />
          <rect x="16" y="3" width="6" height="6" rx="1.5" stroke="#06B6D4" />
          <rect x="9" y="15" width="6" height="6" rx="1.5" stroke="#38BDF8" />
          <path d="M5 9v3a3 3 0 003 3h1M19 9v3a3 3 0 01-3 3h-1" stroke="#38BDF8" strokeDasharray="2 2" />
        </svg>
      );
    case 'serverless architecture':
    case 'serverless':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#38BDF8" fill="#38BDF8" fillOpacity="0.2" />
        </svg>
      );
    case 'enterprise modernization':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 14a8 8 0 0113.8-5.3L20 11M20 10a8 8 0 01-13.8 5.3L4 13" stroke="#6366F1" />
          <polyline points="20 4 20 11 13 11" stroke="#6366F1" />
          <polyline points="4 20 4 13 11 13" stroke="#6366F1" />
        </svg>
      );
    case 'agile & scrum':
    case 'agile':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21.5 2v6h-6M21.3 15.6A9 9 0 1118 6.5l3.5 1.5" stroke="#10B981" />
        </svg>
      );
    case 'system integration':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="6" cy="6" r="3" stroke="#A855F7" />
          <circle cx="18" cy="18" r="3" stroke="#A855F7" />
          <circle cx="18" cy="6" r="3" stroke="#A855F7" />
          <circle cx="6" cy="18" r="3" stroke="#A855F7" />
          <path d="M6 9v6M9 6h6M15 18H9M18 9v6" stroke="#C084FC" />
        </svg>
      );
    case 'performance optimization':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="#F59E0B" />
          <circle cx="12" cy="12" r="3" stroke="#FBBF24" fill="#F59E0B" fillOpacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#38BDF8" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="#38BDF8" />
          <line x1="12" y1="17" x2="12" y2="21" stroke="#38BDF8" />
        </svg>
      );
  }
};

export const LinkedInIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.85 18.5V10.1H5.06v8.4h2.79z" />
  </svg>
);
