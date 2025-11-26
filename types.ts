
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  features: string[];
  applications: string[];
  highlight?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  subtext: string;
}

export interface AdvantageData {
  name: string;
  value: number;
  fullMark: number;
}

export interface JobDetail {
  department: string;
  level: string;
  supervisor: string;
  subordinates: string;
  headcount: string;
  date: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  authority: string[];
}

export interface JobPosition {
  title: string;
  salaryRange: string; // e.g. "12-18"
  description: string;
  detail: JobDetail;
}
