/**
 * Shared site content — service catalog, industries, process steps, etc.
 * Keeping content centralized makes routes short and consistent.
 */
import {
  Briefcase, Users, Factory, HardHat, Wrench, ClipboardList, ShieldCheck,
  Building2, Car, Cpu, HeartPulse, Utensils, ShoppingBag, Package, Truck,
  Warehouse, Shirt, Zap, Landmark, Cog, ClipboardCheck, UserCheck,
  Search, FileText, Rocket, LifeBuoy, MessageSquare, GraduationCap,
  BadgeCheck, Clock, Award, HeadphonesIcon,
} from "lucide-react";

export const serviceGroups = [
  {
    slug: "contract-staffing",
    icon: Briefcase,
    title: "Contract & Temporary Staffing",
    summary: "Flexible workforce that scales with your production cycles and project needs.",
    items: [
      "Contract Staffing",
      "Temporary Workforce",
      "Project-Based Staffing",
      "Industrial Staffing",
      "Seasonal Workforce",
    ],
  },
  {
    slug: "permanent-recruitment",
    icon: Users,
    title: "Permanent Recruitment",
    summary: "End-to-end hiring for permanent roles across leadership, professional, and entry levels.",
    items: [
      "Professional Hiring",
      "Executive Search",
      "Campus Hiring",
      "Experienced Hiring",
    ],
  },
  {
    slug: "industrial-manpower",
    icon: Factory,
    title: "Industrial Manpower",
    summary: "Skilled, semi-skilled and unskilled workers deployed for factory floors and production lines.",
    items: [
      "Skilled Labour",
      "Semi-Skilled Labour",
      "Unskilled Labour",
      "Factory Workers",
      "Production Staff",
      "Machine Operators",
    ],
  },
  {
    slug: "administrative",
    icon: ClipboardList,
    title: "Administrative Staffing",
    summary: "Office, accounts, HR, and back-office professionals to keep operations running.",
    items: [
      "Office Staff",
      "Accounts",
      "Reception",
      "Back Office",
      "HR Staff",
      "Operations Staff",
    ],
  },
  {
    slug: "technical",
    icon: Wrench,
    title: "Technical Staffing",
    summary: "Engineers and technicians for maintenance, production, and specialised technical roles.",
    items: [
      "Engineers",
      "Technicians",
      "Electricians",
      "Welders",
      "Fitters",
      "CNC Operators",
      "Maintenance Engineers",
    ],
  },
  {
    slug: "payroll",
    icon: HardHat,
    title: "Payroll Management",
    summary: "Accurate, compliant payroll processing with full attendance and record management.",
    items: [
      "Payroll Processing",
      "Attendance Management",
      "Salary Processing",
      "Employee Records",
      "Leave Management",
    ],
  },
  {
    slug: "hr-outsourcing",
    icon: UserCheck,
    title: "HR Outsourcing",
    summary: "A complete outsourced HR function — recruitment, administration, documentation, performance.",
    items: [
      "Recruitment",
      "Employee Management",
      "HR Administration",
      "Documentation",
      "Performance Support",
    ],
  },
  {
    slug: "compliance",
    icon: ShieldCheck,
    title: "Compliance Services",
    summary: "Statutory compliance handled end-to-end so your business stays audit-ready.",
    items: [
      "PF",
      "ESI",
      "Professional Tax",
      "Labour Welfare",
      "Contract Labour Compliance",
      "Payroll Compliance",
      "Statutory Audits",
      "Government Documentation",
    ],
  },
] as const;

export const industries = [
  { icon: Factory, name: "Manufacturing", desc: "Line operators, supervisors, quality inspectors." },
  { icon: Car, name: "Automobile", desc: "Assembly, welding, paint shop, and QC staffing." },
  { icon: Cpu, name: "Electronics", desc: "SMT operators, testing engineers, assembly workers." },
  { icon: Cog, name: "Engineering", desc: "Mechanical, electrical, and design engineers." },
  { icon: Building2, name: "Construction", desc: "Site engineers, foremen, skilled trade workers." },
  { icon: Warehouse, name: "Warehousing", desc: "Pickers, packers, forklift operators, supervisors." },
  { icon: Truck, name: "Logistics", desc: "Drivers, dispatch, fleet, and hub operations." },
  { icon: HeartPulse, name: "Healthcare", desc: "Support staff, admin, and allied healthcare." },
  { icon: Utensils, name: "Hospitality", desc: "F&B, housekeeping, front-office professionals." },
  { icon: ShoppingBag, name: "Retail", desc: "Store staff, cashiers, visual merchandisers." },
  { icon: Package, name: "FMCG", desc: "Sales, promoters, distribution and depot staff." },
  { icon: Shirt, name: "Textiles", desc: "Machine operators, tailors, checkers, packers." },
  { icon: Landmark, name: "Infrastructure", desc: "Site engineering and heavy-labour deployment." },
] as const;

export const workforceCategories = [
  "Production Workers",
  "Machine Operators",
  "Engineers",
  "Technicians",
  "Office Staff",
  "Drivers",
  "Warehouse Staff",
  "Helpers",
  "Administrative Staff",
  "Quality Inspectors",
] as const;

export const processSteps = [
  { icon: MessageSquare, title: "Requirement Discussion", desc: "We understand roles, volume, skills, timelines, and site conditions." },
  { icon: Search, title: "Candidate Sourcing", desc: "Deep talent pool across regions activated within hours." },
  { icon: ClipboardCheck, title: "Screening", desc: "Multi-stage screening for skills, attitude, and documentation." },
  { icon: Users, title: "Interview", desc: "Client interviews scheduled and coordinated end-to-end." },
  { icon: BadgeCheck, title: "Skill Assessment", desc: "Practical and technical evaluations tailored to the role." },
  { icon: FileText, title: "Documentation", desc: "KYC, statutory papers, PF/ESI enrolment prepared cleanly." },
  { icon: Rocket, title: "Deployment", desc: "On-time joining at site with reporting and briefing complete." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Attendance, replacement, grievance and performance tracked." },
] as const;

export const whyChoose = [
  { icon: Clock, title: "Fast Hiring", desc: "Ramp-up in days, not weeks — with backup pipelines ready." },
  { icon: Award, title: "Experienced Recruiters", desc: "A team that understands industrial hiring at scale." },
  { icon: ShieldCheck, title: "Compliance Expertise", desc: "PF, ESI, PT, LWF, and contract labour handled end-to-end." },
  { icon: Users, title: "Large Talent Pool", desc: "Active pan-India database of skilled and unskilled workers." },
  { icon: Factory, title: "Pan-Industry Experience", desc: "Manufacturing, auto, electronics, logistics, and more." },
  { icon: BadgeCheck, title: "Quality Workforce", desc: "Screened, verified, and skill-mapped for the right role." },
  { icon: GraduationCap, title: "Dedicated HR Support", desc: "Named account managers for every client engagement." },
  { icon: HeadphonesIcon, title: "24/7 Client Assistance", desc: "Support that matches production schedules and shifts." },
] as const;

export const trustedClients = [
  "Foxconn",
  "Motherson",
  "Mobase Electronics",
  "Wowtek Technology",
  "DS Connectors",
  "New Century Sofa",
] as const;

export const stats = [
  { value: 25000, suffix: "+", label: "Candidates Deployed" },
  { value: 150, suffix: "+", label: "Corporate Clients" },
  { value: 13, suffix: "+", label: "Industries Served" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 96, suffix: "%", label: "Recruitment Success" },
  { value: 92, suffix: "%", label: "Retention Rate" },
] as const;

export const faqs = [
  {
    q: "How quickly can Felix IMSI deploy workforce to our site?",
    a: "For most standard industrial roles, we can begin deployment within 48–72 hours. Larger ramp-ups are planned in phased batches with a joint schedule.",
  },
  {
    q: "Do you handle all statutory compliance for deployed manpower?",
    a: "Yes — PF, ESI, Professional Tax, LWF, minimum wages, and contract labour compliance are managed end-to-end, with monthly documentation shared with the client.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "Manufacturing, automobile, electronics, engineering, warehousing, logistics, construction, FMCG, healthcare, hospitality, retail, and textiles.",
  },
  {
    q: "Can you provide both blue-collar and white-collar candidates?",
    a: "Absolutely. We recruit unskilled and skilled workers, technical staff, administrative professionals, and mid-to-senior executive roles.",
  },
  {
    q: "How do you ensure quality of the workforce?",
    a: "Every candidate goes through screening, document verification, and role-specific skill assessment before deployment, with ongoing performance tracking.",
  },
] as const;
