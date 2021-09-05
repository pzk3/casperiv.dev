import { ExprArg } from "faunadb";

export type Query<T = unknown> = { ref: ExprArg; data: T };

export interface Views {
  slug: string;
  views: number;
}
