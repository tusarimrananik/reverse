export type StepFactors = Record<string, number>;

export type Step = {
  id?: string;
  label: string;
  title: string;
  meaning: string;
  build: string[];
  factors: StepFactors;
};

export type Attribute = {
  id?: string;
  name: string;
  final: number;
  group: string;
  meaning: string;
  build: string[];
  current?: number;
};

export type Path = {
  id?: string;
  name: string;
  vehicleAttrs: Attribute[];
  driverAttrs: Attribute[];
  currentStepId?: string | null;
};

export type Goal = {
  id: string;
  title: string;
  steps: Step[];
  paths: Path[];
};
