import { getFormattedMessage } from './formattedMessages';
import RegexPatterns from './RegexConstants';

const FormRules = Object.freeze({
  required: (message = '') => ({
    required: true,
    message,
  }),
  phone: (message = getFormattedMessage('phone')) => ({
    pattern: RegexPatterns.phone,
    message,
  }),
  alphanumeric: (message = getFormattedMessage('alphanumeric')) => ({
    pattern: RegexPatterns.alphanumeric,
    message,
  }),
  name: (message = getFormattedMessage('name')) => ({
    pattern: RegexPatterns.alphabetic,
    message,
  }),
  address: (message = getFormattedMessage('address')) => ({
    pattern: RegexPatterns.address,
    message,
  }),
  whitespace: (message = getFormattedMessage('whitespace')) => ({
    whitespace: true,
    message,
  }),
  numeric: (message = getFormattedMessage('numeric')) => ({
    pattern: RegexPatterns.numeric,
    message,
  }),
});

export default FormRules;
