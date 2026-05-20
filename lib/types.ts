export type StepFactors = Record<string, number>;

export type Step = {
  label: string;
  title: string;
  note: string;
  factors: StepFactors;
};

export type Attribute = {
  name: string;
  final: number;
  group: string;
};

export type Path = {
  name: string;
  description: string;
  goalFit: number;
  vehicleAttrs: Attribute[];
  driverAttrs: Attribute[];
  evidence: string;
};

export type Goal = {
  id: string;
  title: string;
  subtitle: string;
  pathLabel: string;
  steps: Step[];
  paths: Path[];
  basis: string[];
};
