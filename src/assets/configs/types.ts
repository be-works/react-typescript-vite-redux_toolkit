import { ReactNode } from 'react';

export type TPagination = {
  page: number;
  pageSize: number;
  totalCount: number;
};

export interface TSelect {
  icon?: ReactNode;
  label: string;
  value: string;
  desc?: string;
}
export type TButton = 'fill' | 'outlined' | 'cancel';
