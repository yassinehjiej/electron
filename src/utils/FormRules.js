import RegexPatterns from './RegexConstants';

const FormRules = Object.freeze({
  required: (message = 'Ce champ est obligatoire.') => ({
    required: true,
    message,
  }),
  phone: (message = 'Ce champ doit contenir un numéro de téléphone valide (par exemple : +212700763900).') => ({
    pattern: RegexPatterns.phone,
    message,
  }),
  alphanumeric: (message = "Ce champ ne peut contenir qu'un mélange de caractères alphanumériques, de tirets et d'apostrophes.") => ({
    pattern: RegexPatterns.alphanumeric,
    message,
  }),
  name: (message = "Ce champ ne peut contenir qu'un mélange de caractères alphabétiques, de tirets et d'apostrophes.") => ({
    pattern: RegexPatterns.alphabetic,
    message,
  }),
  address: (message = "Ce champ peut uniquement contenir un mélange de caractères alphanumériques, de virgules, de tirets et d'apostrophes") => ({
    pattern: RegexPatterns.address,
    message,
  }),
  numeric: (message = 'Ce champ ne peut contenir que des caractères numériques.') => ({
    pattern: RegexPatterns.numeric,
    message,
  }),
});

export default FormRules;
