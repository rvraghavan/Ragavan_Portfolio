export type TechCategory = 
  | 'all' 
  | 'backend' 
  | 'frontend' 
  | 'cloud' 
  | 'data' 
  | 'devops' 
  | 'architecture';

export interface TechItem {
  name: string;
  category: TechCategory;
  brandColor: string;
  iconSvg?: string; // Raw SVG path or custom SVG
  description?: string;
  experience?: string;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  context: string;
  icon: string;
}

export interface ProjectArchitectureNode {
  title: string;
  tech: string;
  description: string;
  type: 'client' | 'gateway' | 'service' | 'database' | 'external';
}

export interface ProjectDeepDive {
  businessContext: string;
  engineeringChallenge: string;
  roleResponsibilities: string[];
  architectureOverview: string;
  diagramType?: 'monroney' | 'idoran' | 'vdx' | 'generic';
  implementationHighlights: string[];
  documentedOutcomes: string[];
  technicalTradeoffs: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  organization: string;
  role: string;
  duration: string;
  featured: boolean;
  category: 'Enterprise Modernization' | 'AI & Document Automation' | 'Cloud Solutions' | 'Full Stack Web';
  summary: string;
  technologies: string[];
  highlights: string[];
  outcomes: string[];
  deepDive: ProjectDeepDive;
}

export interface CareerExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  client?: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  isCurrent?: boolean;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  iconType: 'trophy' | 'award' | 'star' | 'badge';
  highlightMetric?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  type: 'degree' | 'course' | 'internal_cert';
}

export interface CourseItem {
  title: string;
  platform: string;
  date: string;
  focus: string;
  type: 'course' | 'internal_cert';
}

export interface AssistantQA {
  question: string;
  category: string;
  answer: string;
  tags: string[];
}
