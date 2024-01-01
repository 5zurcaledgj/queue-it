import { Company } from "@/API";

export type CompanyType = Pick<Company, "name" | "status" | "createdAt">