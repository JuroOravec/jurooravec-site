import OrigJoi from 'joi';
import JoiDate from '@joi/date';

import { postValidationSchema } from '../post/postValidation';

const Joi = OrigJoi.extend(JoiDate);

export const projectValidationSchema = Joi.object({
  // Validation for fields that are custom to ProjectPost
})
  .required()
  .concat(postValidationSchema);
