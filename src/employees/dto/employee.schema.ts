import * as Joi from 'joi';

export const createEmployeeSchema = Joi.object({
  FirstName: Joi.string().min(3).max(20).required(),
  LastName: Joi.string().min(3).max(20).required(),
  AddressLine1: Joi.string().min(3).max(20).required(),
  City: Joi.string().min(3).max(20).required(),
  JobID: Joi.number().integer().min(1).max(99999).required(),
  NINumber: Joi.string().min(9).max(10).required(),
  PostCode: Joi.string().min(6).max(10),
});

export const updateEmployeeSchema = Joi.object({
  FirstName: Joi.string().min(3).max(20),
  LastName: Joi.string().min(3).max(20),
  AddressLine1: Joi.string().min(3).max(20),
  City: Joi.string().min(3).max(20),
  JobID: Joi.number().integer().min(1).max(99999),
  NINumber: Joi.string().min(9).max(10),
});
