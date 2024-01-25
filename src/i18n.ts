import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Copied to clipboard': 'Copied to clipboard',
      'Add element': 'Add element',
      'Name edit in progress': 'Name edit in progress',
      'Label (not required)': 'Label (not required)',
      Value: 'Value',
      String: 'String',
      Link: 'Link',
      Password: 'Password',
      'Danger link': 'Danger link',
      Submit: 'Submit',
      Type: 'Type',
      Title: 'Title',
      'Edit in progress': 'Edit in progress',
      'Add group': 'Add group',
      'Add tab': 'Add tab',
      'Are you sure absolutely sure?': 'Are you sure absolutely sure?',
      'This action permanently.': 'This action permanently.',
      'Edit tab': 'Edit tab',
      'Edit element': 'Edit element',
      Delete: 'Delete',
      'Reset data': 'Reset data',
      'Import from file': 'Import from file',
      'Export to file': 'Export to file',
      Dark: 'Dark',
      Light: 'Light',
      English: '🇺🇸English',
      Ukrainian: '🇺🇦Ukrainian',
      Name: 'Name',
      Theme: 'Theme',
      Lang: 'Lang',
      Home: 'Home',
      Settings: 'Settings',
      'Select the tab or create': 'Select the tab or create',
      Confirm: 'Confirm',
    },
  },
  uk: {
    translation: {
      'Copied to clipboard': 'Скопійовано до буферу',
      'Add element': 'Додати елемент',
      'Name edit in progress': 'Редагування в розробці',
      'Label (not required)': 'Маска (не обовʼязково)',
      Value: 'Значення',
      String: 'Текст',
      Link: 'Посилання',
      Password: 'Пароль',
      'Danger link': 'Небезпечне посилання',
      Submit: 'Підтвердити',
      Type: 'Тип',
      Title: 'Заголовок',
      'Edit in progress': 'Редагування в процесі',
      'Add group': 'Додати групу',
      'Add tab': 'Додати підгрупу',
      'Are you sure absolutely sure?': 'Ви впевнені?',
      'This action permanently.': 'Цю дію не можна відмінити.',
      'Edit tab': 'Редагувати підгрупу',
      'Edit element': 'Редагувати елемент',
      Delete: 'Видалити',
      'Reset data': 'Очистити дані',
      'Import from file': 'Імпорт з файлу',
      'Export to file': 'Експорт до файлу',
      Dark: 'Темна',
      Light: 'Світла',
      English: '🇺🇸Англійська',
      Ukrainian: '🇺🇦Українська',
      Name: 'Назва',
      Theme: 'Тема',
      Lang: 'Мова',
      Home: 'Головна',
      Settings: 'Налаштування',
      'Select the tab or create': 'Натисність на плюс і додайте дані',
      Confirm: 'Підтвердити',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .then()

export default i18n
