import axios from "axios";

import { ITask } from "../../types";
import { IProjects } from "../../types";

const api = axios.create();

const base_URL = "http://localhost:3001/api";

export const getAllTasks = async (): Promise<ITask[]> => {
  const response = await api.get(`${base_URL}/tasks`);
  return response.data;
};

export const getTaskById = async (id: number): Promise<ITask> => {
  const response = await api.get(`${base_URL}/tasks/${id}`);
  return response.data;
};

export const createTask = async (task: ITask): Promise<ITask> => {
  const response = await api.post(`${base_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id: number, updatedTask: any) => {
  const response = await api.put(`${base_URL}/tasks/${id}`, updatedTask);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await api.delete(`${base_URL}/tasks/${id}`);
};

export default api;

export const getAllProjects = async (): Promise<IProjects[]> => {
  const response = await api.get(`${base_URL}/projects`);
  return response.data;
};

export const getProjectById = async (id: number): Promise<IProjects> => {
  const response = await api.get(`${base_URL}/projects/${id}`);
  return response.data;
};

export const createProject = async (project: IProjects): Promise<IProjects> => {
  const response = await api.post(`${base_URL}/projects`, project);
  return response.data;
};

export const updateProject = async (id: number, updatedProject: IProjects) => {
  const response = await api.put(`${base_URL}/projects/${id}`, updatedProject);
  return response.data;
};

export const deleteProject = async (id: number) => {
  await api.delete(`${base_URL}/projects/${id}`);
};
