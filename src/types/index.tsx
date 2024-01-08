import { HTMLAttributes } from "react";

export interface IProjects {
  id: number;
  name: string;
  isActive: boolean;
  createDate: Date;
  updateDate: Date;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  name: string;
  isActive: boolean;
  isDone: boolean;
  createDate: Date;
  updateDate: Date;
  projectId: number;
}

export interface IIcon {
  className: string;
  name: string;
  size: IconSizeType;
  onClick?: () => void;
  styles?: HTMLAttributes<HTMLElement>;
}

export type IconSizeType =
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48;
