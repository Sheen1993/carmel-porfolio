import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Building2,
  ChartColumn,
  CircleCheck,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  HandCoins,
  Keyboard,
  Landmark,
  Package,
  Receipt,
  Sheet,
  Users,
  Wallet,
} from 'lucide-react'

export const profile = {
  firstName: 'Carmel',
  middleName: 'Balladares',
  lastName: 'Coscos',
  displayName: 'Carmel B. Coscos',
  title: 'QuickBooks Bookkeeper / Virtual Accounting Assistant',
  tagline: ['Accurate records.', 'Reliable support.', 'Helping businesses grow.'],
  phone: '+63-967-2002138',
  phoneHref: 'tel:+639672002138',
  email: 'carmelcoscos@gmail.com',
  location: 'Cebu, Philippines',
  linkedin: 'https://www.linkedin.com/in/carmel-balladares-coscos/',
  photo: { webp: '/images/carmel.webp', jpg: '/images/carmel.jpg' },
  resume: 'https://drive.google.com/file/d/1CXJ29_O-N0eGvW-HG_qvLCodapBme12z/view',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1CXJ29_O-N0eGvW-HG_qvLCodapBme12z',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  paragraphs: [
    'I’m a detail-driven bookkeeper with over a decade of hands-on accounting experience — from remote QuickBooks Online bookkeeping and tax-season support for U.S. clients, to senior corporate accounting roles here in Cebu.',
    'My background spans the full accounting cycle: bank and account reconciliations, accounts payable and receivable, billing and collections, petty cash, check disbursements, inventory management, and monthly financial reporting. I keep records organized, flag discrepancies early, and deliver on deadline — so business owners can focus on growing.',
  ],
  stats: [
    { value: 10, suffix: '+', label: 'Years of accounting experience' },
    { value: 8, suffix: '', label: 'Years at Suburbia Automotive' },
    { value: 4, suffix: '', label: 'Roles held, logistics to senior accountant' },
  ],
  pillars: [
    { icon: ChartColumn, title: 'Organized', text: 'Financial Records', tone: 'mist' },
    { icon: CircleCheck, title: 'Accurate', text: 'Reconciliations', tone: 'sage' },
    { icon: Users, title: 'Reliable', text: 'Bookkeeping Support', tone: 'taupe' },
  ],
} as const

export type Role = {
  title: string
  period: string
  points: string[]
}

export type Experience = {
  company: string
  setting: string
  period: string
  icon: LucideIcon
  current?: boolean
  roles: Role[]
}

export const experience: Experience[] = [
  {
    company: 'QuickBooks Bookkeeping & Tax Preparation Assistant',
    setting: 'Remote',
    period: '2024 – Present',
    icon: FileSpreadsheet,
    current: true,
    roles: [
      {
        title: 'Bookkeeping & Tax-Season Support',
        period: '2024 – Present',
        points: [
          'Perform bank reconciliations in QuickBooks Online, comparing bank transactions with recorded entries and identifying discrepancies.',
          'Review and categorize financial transactions to support accurate bookkeeping records.',
          'During tax season, enter clients’ Form 1099 information into tax preparation software as instructed by supervising accountants, review against source documents, and flag missing details.',
          'Coordinate assigned bookkeeping and tax-support tasks within established deadlines.',
        ],
      },
    ],
  },
  {
    company: 'Suburbia Automotive Ventures Inc.',
    setting: 'Local · On-site',
    period: '2016 – 2024',
    icon: Building2,
    roles: [
      {
        title: 'Senior Staff Accountant',
        period: '2022 – 2024',
        points: [
          'Oversaw overall accounting processes and prepared monthly financial statements.',
          'Managed sales and collection reports and aging of accounts.',
          'Performed account reconciliations and maintained organized records.',
        ],
      },
      {
        title: 'Accounts Receivable Specialist',
        period: '2019 – 2022',
        points: [
          'Managed billing, receivables monitoring, and collection follow-ups.',
          'Prepared income statement reports and reconciled client accounts.',
        ],
      },
      {
        title: 'Accounts Payable Specialist',
        period: '2017 – 2019',
        points: [
          'Handled petty cash replenishment and liquidation, and check disbursements.',
          'Prepared BIR compliance documents and performed bank reconciliations.',
        ],
      },
      {
        title: 'Logistics & Inventory Management',
        period: '2016 – 2017',
        points: [
          'Handled purchasing and shipment monitoring.',
          'Prepared consumption and inventory reports, supported audits, and ran cost-benefit analyses.',
        ],
      },
    ],
  },
  {
    company: 'TunnelFarms Corporation',
    setting: 'Local · On-site',
    period: 'Jul – Sep 2015',
    icon: Landmark,
    roles: [
      {
        title: 'Accounting Staff',
        period: 'July – September 2015',
        points: [
          'Supported accounts payable and logistics/inventory records.',
          'Processed manual payroll for 15–20 employees.',
        ],
      },
    ],
  },
  {
    company: 'Yayoy’s Grill & Restobar',
    setting: 'Local · On-site',
    period: '2008 – 2014',
    icon: Receipt,
    roles: [
      {
        title: 'Accounting Staff',
        period: 'September 2012 – June 2014',
        points: ['Supported purchasing, consumption reports, inventory audits, and check disbursements.'],
      },
      {
        title: 'Accounting Staff (Part-time)',
        period: '2008 – 2012',
        points: ['Worked part-time while pursuing my degree to finance my education.'],
      },
    ],
  },
]

export type SkillCategory = 'core' | 'software'

export type Skill = {
  name: string
  icon: LucideIcon
  category: SkillCategory
}

export const skillFilters: { id: 'all' | SkillCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'core', label: 'Core Skills' },
  { id: 'software', label: 'Software & Technical' },
]

export const skills: Skill[] = [
  { name: 'QuickBooks Bank Reconciliation', icon: CircleCheck, category: 'core' },
  { name: 'Accounts Payable & Receivable', icon: Wallet, category: 'core' },
  { name: 'Billing & Collection Monitoring', icon: Receipt, category: 'core' },
  { name: 'Petty Cash Management & Liquidation', icon: HandCoins, category: 'core' },
  { name: 'Check Disbursement Processing', icon: Banknote, category: 'core' },
  { name: 'Inventory Management & Cost Analysis', icon: Package, category: 'core' },
  { name: 'Tax Preparation Assistance', icon: FileText, category: 'core' },
  { name: 'QuickBooks Online', icon: FileSpreadsheet, category: 'software' },
  { name: 'Microsoft Excel', icon: Sheet, category: 'software' },
  { name: 'Google Sheets', icon: Sheet, category: 'software' },
  { name: 'Tax Preparation Software', icon: ClipboardList, category: 'software' },
  { name: 'Data Entry', icon: Keyboard, category: 'software' },
]

/** Featured tools shown as round badges, mirroring the portfolio cover. */
export const featuredTools = [
  { mark: 'qb', name: 'QuickBooks Online', note: 'Bookkeeping & reconciliations', bg: '#2ca01c', ring: 'bg-sage-50' },
  { mark: 'X', name: 'Microsoft Excel', note: 'Reports & schedules', bg: '#1d6f42', ring: 'bg-mist-50' },
  { mark: 'list', name: 'INTAS', note: 'Accounting & inventory software', bg: '#a8927a', ring: 'bg-cream-200/70' },
  { mark: 'CS', name: 'UltraTax CS', note: '1099 data entry support', bg: '#17365d', ring: 'bg-mist-100' },
] as const

export const education = {
  school: 'University of Cebu',
  period: '2008 – 2012',
  degree: 'Bachelor of Science in Business Administration',
  major: 'Major in Financial Management',
  note: 'Completed while working part-time as accounting staff to finance my studies.',
}
