export interface JobInterface {
  image_url: string;
  company_name: string;
  position: string;
  start: string;
  end: string;
  description: string;
  job_resume?: string;
  job_list?: string[];
  technologies?: string;
}
