export interface SingleJob {
  title: Required<string>;
  description: string;
  addedTime: string;
  completionTime?: string;
  status: string;
}
