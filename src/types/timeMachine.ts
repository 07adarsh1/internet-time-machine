export type EraYear = 1995 | 2000 | 2005 | 2010 | 2015 | 2020 | 2026;

export interface HardwareSpec {
  deviceName: string;
  displayType: string;
  resolution: string;
  colorDepth: string;
  chassisMaterial: string;
  secondaryPropName: string;
  secondaryPropDesc: string;
}

export interface EraInfo {
  year: EraYear;
  title: string;
  subtitle: string;
  paradigm: string;
  aesthetic: string;
  keyTech: string[];
  vibeColor: string;
  hardware: HardwareSpec;
}

export interface GraveyardItem {
  id: string;
  name: string;
  years: string;
  category: string;
  icon: string;
  epitaph: string;
  causeOfDeath: string;
  initialRespects: number;
}

export interface SurpriseFact {
  id: string;
  year: EraYear;
  headline: string;
  story: string;
  quote: string;
  trivia: string;
}