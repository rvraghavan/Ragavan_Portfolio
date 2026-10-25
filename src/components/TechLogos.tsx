import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "w-8 h-8", size = 32 }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 1. Java
  if (norm.includes('java') && !norm.includes('javascript')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.86 16.38c-2.48.16-4.5 1.05-4.5 2.14 0 1.25 2.66 2.27 5.95 2.27s5.95-1.02 5.95-2.27c0-.23-.09-.45-.26-.66-.45.38-1.57.72-2.94.88-2.02.24-4.2-.36-4.2-.36m7.85-3.08c1.33.68 2.05 1.5 2.05 2.4 0 1.93-3.69 3.5-8.25 3.5S2.26 17.63 2.26 15.7c0-.85.71-1.63 1.94-2.28.32.3.93.59 1.76.84-2.31.52-2.37 1.7-.12 2.22 2.76.64 6.64.44 9.17-.18 2.15-.52 2.37-1.55 1.7-2.9" fill="#E76F00"/>
        <path d="M12.67 8.27c.97.94 1.48 2.04 1.25 3.33-.2 1.15-1.14 2.15-2.42 2.82-1.28.66-2.82.91-4.25.7-.31-.05-.59-.11-.84-.19 1.34-.33 2.53-.94 3.42-1.78.96-.92 1.34-1.95 1.05-2.97-.24-.87-.89-1.57-1.79-2.09.91.03 2.67-.09 3.58.18M10.87 2c.67.63.89 1.5.54 2.34-.33.78-1.12 1.39-2.14 1.81-1.03.42-2.22.61-3.37.52-.36-.03-.7-.08-1.01-.15.99-.25 1.88-.7 2.58-1.31.75-.66 1.08-1.39.9-2.12-.17-.69-.7-1.23-1.46-1.63.78.07 3.09.18 3.96.54" fill="#5382A1"/>
      </svg>
    );
  }

  // 2. Spring / Spring Boot
  if (norm.includes('spring') || norm.includes('springboot')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.57 12.3c-.66-4.9-4.83-8.8-9.87-9.2C5.9 2.65 1.2 7.15 1.01 12.87c-.18 5.49 4.14 10.12 9.63 10.32 4.19.15 7.9-2.15 9.77-5.69l-3.32-1.39c-1.34 2.15-3.8 3.51-6.52 3.23-3.69-.37-6.55-3.56-6.39-7.27.15-3.56 3.08-6.44 6.65-6.49 3.4-.05 6.27 2.53 6.64 5.91l4.1.81z" fill="#6DB33F"/>
        <path d="M11.96 7.82c-2.3 0-4.17 1.87-4.17 4.17 0 1.95 1.34 3.58 3.16 4.02l1.62-5.74 1.6 5.67c1.76-.48 3.05-2.09 3.05-4 0-2.3-1.92-4.12-4.26-4.12z" fill="#6DB33F"/>
      </svg>
    );
  }

  // 3. Angular
  if (norm.includes('angular')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5L2.8 5.75L4.2 16.5L12 21.5L19.8 16.5L21.2 5.75L12 2.5Z" fill="#DD0031"/>
        <path d="M12 2.5V21.5L19.8 16.5L21.2 5.75L12 2.5Z" fill="#C3002F"/>
        <path d="M12 5.5L6.6 17.5H9.2L10.3 14.8H13.7L14.8 17.5H17.4L12 5.5ZM12.9 12.8H11.1L12 10.6L12.9 12.8Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 4. Node.js
  if (norm.includes('node') || norm.includes('nodejs')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#339933"/>
        <path d="M12 3.8L18.8 7.8V15.8L12 19.8L5.2 15.8V7.8L12 3.8Z" fill="#026E00"/>
        <path d="M12 7.2L15.9 9.5V14.1L12 16.4L8.1 14.1V9.5L12 7.2Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 5. TypeScript
  if (norm.includes('typescript')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M11.5 8H5.5V10.2H7.3V18H9.7V10.2H11.5V8ZM13.8 15.4C14.1 16 14.8 16.4 15.7 16.4C16.8 16.4 17.5 15.8 17.5 14.9C17.5 13.9 16.7 13.5 15.4 13C13.6 12.3 12.2 11.6 12.2 9.8C12.2 8.1 13.6 6.8 15.7 6.8C17.1 6.8 18.2 7.4 18.9 8.6L17 9.8C16.7 9.2 16.2 8.9 15.6 8.9C14.8 8.9 14.3 9.3 14.3 10C14.3 10.7 14.8 11.1 16.2 11.7C18.2 12.5 19.6 13.3 19.6 15.1C19.6 17 18.1 18.3 15.8 18.3C13.8 18.3 12.5 17.3 11.8 15.9L13.8 15.4Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 6. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M6 18.5L7.9 17.3C8.4 18.1 8.9 18.6 9.8 18.6C10.7 18.6 11.2 18.1 11.2 17.2V11H13.4V17.2C13.4 19.3 12 20.2 10.1 20.2C8.3 20.2 7 19.3 6 18.5ZM14.8 18.3L16.8 17.1C17.4 18 18.2 18.6 19.2 18.6C20.3 18.6 21 18 21 17.1C21 16.2 20.4 15.8 19 15.2L18.3 14.9C16.5 14.1 15.2 13.3 15.2 11.5C15.2 9.8 16.6 8.5 18.8 8.5C20.4 8.5 21.6 9.2 22.4 10.5L20.5 11.7C20.1 10.9 19.5 10.6 18.7 10.6C17.9 10.6 17.4 11 17.4 11.7C17.4 12.5 18 12.9 19.3 13.5L20 13.8C22.1 14.7 23.2 15.7 23.2 17.4C23.2 19.4 21.6 20.5 19.1 20.5C16.9 20.5 15.5 19.5 14.8 18.3Z" fill="#000000"/>
      </svg>
    );
  }

  // 7. Python
  if (norm.includes('python')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11.9 2C8.7 2 6.6 3.4 6.6 5.5V7.4H12.4V8.3H4.2C2.1 8.3 0.5 10 0.5 12.1C0.5 14.2 2.1 15.9 4.2 15.9H5.7V13.8C5.7 11.9 7.3 10.3 9.2 10.3H15.1C16.5 10.3 17.6 9.2 17.6 7.8V5.5C17.6 3.4 15.1 2 11.9 2ZM9.5 3.8C10.2 3.8 10.7 4.3 10.7 5C10.7 5.7 10.2 6.2 9.5 6.2C8.8 6.2 8.3 5.7 8.3 5C8.3 4.3 8.8 3.8 9.5 3.8Z" fill="#3776AB"/>
        <path d="M12.1 22C15.3 22 17.4 20.6 17.4 18.5V16.6H11.6V15.7H19.8C21.9 15.7 23.5 14 23.5 11.9C23.5 9.8 21.9 8.1 19.8 8.1H18.3V10.2C18.3 12.1 16.7 13.7 14.8 13.7H8.9C7.5 13.7 6.4 14.8 6.4 16.2V18.5C6.4 20.6 8.9 22 12.1 22ZM14.5 20.2C13.8 20.2 13.3 19.7 13.3 19C13.3 18.3 13.8 17.8 14.5 17.8C15.2 17.8 15.7 18.3 15.7 19C15.7 19.7 15.2 20.2 14.5 20.2Z" fill="#FFD43B"/>
      </svg>
    );
  }

  // 8. AWS / Amazon Web Services
  if (norm.includes('aws') || norm.includes('amazon')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.7 12.2C7.7 13.1 7.2 13.7 6.4 13.7C5.6 13.7 5.2 13.1 5.2 12.2C5.2 11.3 5.6 10.7 6.4 10.7C7.2 10.7 7.7 11.3 7.7 12.2ZM9.5 14.8V9.7H7.7V10.3C7.3 9.8 6.6 9.5 5.8 9.5C4.2 9.5 3.3 10.6 3.3 12.2C3.3 13.8 4.2 14.9 5.8 14.9C6.6 14.9 7.3 14.6 7.7 14.1V14.8H9.5ZM13.8 14.8L12.5 9.7H10.7L9.6 14.8H11.4L11.8 12.5H13.2L13.6 14.8H15.5L14.4 9.7H12.6L13.8 14.8ZM16.3 13.8C16.8 14 17.4 14.2 18 14.2C18.6 14.2 18.9 13.9 18.9 13.6C18.9 13.3 18.7 13.1 17.9 12.9C16.7 12.6 16.1 12 16.1 11.1C16.1 10.1 17 9.5 18.2 9.5C18.8 9.5 19.4 9.6 19.9 9.8L19.5 10.9C19.1 10.7 18.7 10.6 18.2 10.6C17.6 10.6 17.3 10.8 17.3 11.1C17.3 11.4 17.5 11.6 18.2 11.8C19.5 12.1 20.1 12.7 20.1 13.6C20.1 14.6 19.2 15.3 17.9 15.3C17.2 15.3 16.5 15.1 15.9 14.8L16.3 13.8Z" fill="#FFFFFF"/>
        <path d="M20.8 17.2C18.6 18.8 15.5 19.7 12.1 19.7C7.4 19.7 3.5 18 1.5 15.7C1.3 15.5 1.5 15.3 1.8 15.4C4.3 17.3 7.9 18.6 12.1 18.6C15.1 18.6 18 17.7 20.3 16.3C20.7 16.1 21 16.8 20.8 17.2Z" fill="#FF9900"/>
        <path d="M21.9 16.2C21.6 15.8 20.1 16.2 19.4 16.4C19.2 16.5 19.2 16.2 19.4 16.1C20.5 15.3 22.3 15.3 22.6 15.7C22.8 16.1 22.3 17.9 21.2 18.8C21 19 20.8 18.9 20.9 18.7C21.3 18.1 22.2 16.6 21.9 16.2Z" fill="#FF9900"/>
      </svg>
    );
  }

  // 9. AWS ECS / Fargate / Containers
  if (norm.includes('ecs') || norm.includes('fargate')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="#FF9900" strokeWidth="2" fill="#FF9900" fillOpacity="0.15"/>
        <path d="M7 8H17M7 12H17M7 16H13" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="1.5" fill="#38BDF8"/>
      </svg>
    );
  }

  // 10. AWS Lambda / Serverless
  if (norm.includes('lambda') || norm.includes('serverless')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 22H7.5L12 12.5L16.5 22H22L12 2Z" fill="#FF9900" fillOpacity="0.2"/>
        <path d="M7.5 22L11 14.5L8.5 9H11.5L13 12.5L16.5 22H19.5L14.5 11L16 6H12.5L11.5 3H8.5L5 22H7.5Z" fill="#FF9900"/>
      </svg>
    );
  }

  // 11. Amazon S3
  if (norm.includes('s3')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#569A31"/>
        <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="#569A31" strokeWidth="2" fill="none"/>
        <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="#569A31" strokeWidth="2" fill="none"/>
      </svg>
    );
  }

  // 12. PostgreSQL
  if (norm.includes('postgres') || norm.includes('postgresql')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.2 16.5C16.5 17.2 15.2 17.7 13.7 17.8V19H11.5V17.8C9.2 17.6 7.6 16.4 7.2 14.7L9.3 14C9.6 15.1 10.5 15.8 12.1 15.8C13.6 15.8 14.5 15.2 14.5 14.3C14.5 13.3 13.7 12.8 12 12.4C9.7 11.9 7.7 11.1 7.7 9.1C7.7 7.5 9 6.3 11.3 6.1V5H13.5V6.1C15.4 6.3 16.8 7.3 17.3 8.7L15.3 9.4C15 8.5 14.3 8 12.8 8C11.5 8 10.7 8.6 10.7 9.3C10.7 10.2 11.5 10.6 13.1 11C15.5 11.5 17.5 12.4 17.5 14.5C17.6 15.3 17.5 16 17.2 16.5Z" fill="#336791"/>
      </svg>
    );
  }

  // 13. Oracle
  if (norm.includes('oracle')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="7" fill="#F80000"/>
        <rect x="5.5" y="8" width="13" height="8" rx="4" fill="#060913"/>
      </svg>
    );
  }

  // 14. IBM Db2 / Mainframe
  if (norm.includes('db2') || norm.includes('ibm') || norm.includes('mainframe')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#052FAD" strokeWidth="2" fill="#052FAD" fillOpacity="0.1"/>
        <path d="M6 7H18M6 10H18M6 13H18M6 16H18" stroke="#052FAD" strokeWidth="1.5"/>
        <path d="M15 6V18" stroke="#38BDF8" strokeWidth="2"/>
      </svg>
    );
  }

  // 15. Apache Kafka
  if (norm.includes('kafka')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
        <circle cx="5" cy="7" r="2.5" fill="#38BDF8"/>
        <circle cx="19" cy="7" r="2.5" fill="#38BDF8"/>
        <circle cx="5" cy="17" r="2.5" fill="#38BDF8"/>
        <circle cx="19" cy="17" r="2.5" fill="#38BDF8"/>
        <path d="M7 8L10 10.5M14 10.5L17 8M7 16L10 13.5M14 13.5L17 16" stroke="#FFFFFF" strokeWidth="1.5"/>
      </svg>
    );
  }

  // 16. Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 8.5H15V10.5H13V8.5ZM10.5 8.5H12.5V10.5H10.5V8.5ZM8 8.5H10V10.5H8V8.5ZM10.5 6H12.5V8H10.5V6ZM13 6H15V8H13V6ZM15.5 8.5H17.5V10.5H15.5V8.5Z" fill="#2496ED"/>
        <path d="M21.5 11.5C21 11.2 19.8 11.2 19.3 11.6C19 10.4 18.2 9.8 17.5 9.5V11H3.5C2.6 11 2 11.8 2 12.8C2 17.5 6 19.5 10.5 19.5C16.5 19.5 21 16.5 22 13C22.2 12.3 22 11.7 21.5 11.5Z" fill="#2496ED"/>
      </svg>
    );
  }

  // 17. Jenkins
  if (norm.includes('jenkins')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="6" fill="#D24939"/>
        <path d="M12 4C9.5 4 8 5.5 8 7.5C8 9.5 9.5 10.5 12 10.5C14.5 10.5 16 9.5 16 7.5C16 5.5 14.5 4 12 4Z" fill="#FFFFFF"/>
        <path d="M6 17C6 14.5 8.5 13 12 13C15.5 13 18 14.5 18 17V20H6V17Z" fill="#2B3843"/>
      </svg>
    );
  }

  // 18. Git / SVN
  if (norm.includes('git') || norm.includes('svn')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.7 10.7L13.3 2.3C12.9 1.9 12.3 1.9 11.9 2.3L9.5 4.7L12 7.2C12.7 7 13.5 7.2 14 7.7C14.6 8.3 14.8 9.1 14.5 9.8L17 12.3C17.7 12 18.5 12.2 19.1 12.8C19.8 13.5 19.8 14.7 19.1 15.4C18.4 16.1 17.2 16.1 16.5 15.4C16 14.9 15.8 14.2 16 13.5L13.6 11.1V16.3C13.8 16.5 13.9 16.7 13.9 17C13.9 17.9 13.2 18.6 12.3 18.6C11.4 18.6 10.7 17.9 10.7 17C10.7 16.3 11.1 15.7 11.8 15.5V10.2C11.1 10 10.7 9.4 10.7 8.7C10.7 8.2 10.9 7.8 11.3 7.5L8.9 5.1L2.3 11.7C1.9 12.1 1.9 12.7 2.3 13.1L10.7 21.5C11.1 21.9 11.7 21.9 12.1 21.5L21.7 11.9C22.1 11.6 22.1 11 21.7 10.7Z" fill="#F05032"/>
      </svg>
    );
  }

  // 19. SonarQube
  if (norm.includes('sonar') || norm.includes('sonarqube')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 17C4 12.58 7.58 9 12 9C16.42 9 20 12.58 20 17" stroke="#4B9FD5" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M7 17C7 14.24 9.24 12 12 12C14.76 12 17 14.24 17 17" stroke="#4B9FD5" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1.5" fill="#4B9FD5"/>
      </svg>
    );
  }

  // 20. JIRA
  if (norm.includes('jira')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11.5 2H2V11.5L11.5 2Z" fill="#0052CC"/>
        <path d="M22 12.5H12.5V22L22 12.5Z" fill="#2684FF"/>
        <path d="M12.5 2L2 12.5H11.5L22 2H12.5Z" fill="#0052CC"/>
      </svg>
    );
  }

  // 21. API Gateway / REST
  if (norm.includes('gateway') || norm.includes('rest') || norm.includes('api')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="#0284C7" strokeWidth="2" fill="#0284C7" fillOpacity="0.1"/>
        <path d="M7 9L10 12L7 15M13 15H17" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // 22. CloudWatch / Monitoring
  if (norm.includes('cloudwatch') || norm.includes('monitor')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#FF4F8B" strokeWidth="2"/>
        <polyline points="12 6 12 12 16 14" stroke="#FF4F8B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  // 23. CloudFront / CDN
  if (norm.includes('cloudfront') || norm.includes('cdn')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="#A166FF" strokeWidth="2"/>
        <path d="M12 4V20M4 12H20M6.5 6.5L17.5 17.5M6.5 17.5L17.5 6.5" stroke="#A166FF" strokeWidth="1.2"/>
      </svg>
    );
  }

  // 24. Microservices / Architecture
  if (norm.includes('microservice') || norm.includes('architecture')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#38BDF8"/>
        <rect x="16" y="2" width="6" height="6" rx="1.5" fill="#38BDF8"/>
        <rect x="9" y="16" width="6" height="6" rx="1.5" fill="#38BDF8"/>
        <path d="M5 8V12H19V8M12 12V16" stroke="#38BDF8" strokeWidth="1.8"/>
      </svg>
    );
  }

  // 25. Modernization / Upgrade
  if (norm.includes('modernization') || norm.includes('upgrade')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8H9L12 2Z" fill="#10B981"/>
        <path d="M12 22V8M7 14L12 8L17 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="19" r="2" fill="#10B981"/>
      </svg>
    );
  }

  // 26. Agile / Scrum
  if (norm.includes('agile') || norm.includes('scrum')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3A9 9 0 1 0 21 12A9 9 0 0 0 12 3M21 3L16 8M21 3V8M21 3H16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // 27. Performance / Optimization
  if (norm.includes('performance') || norm.includes('optimization')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4C7.03 4 3 8.03 3 13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20Z" fill="#06B6D4"/>
        <path d="M12 13L16 9" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="12" cy="13" r="2" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 28. Default / Fallback tech icon
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#38BDF8" strokeWidth="1.8" fill="#38BDF8" fillOpacity="0.1"/>
      <path d="M8 10L10.5 12L8 14M13 14H16" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
