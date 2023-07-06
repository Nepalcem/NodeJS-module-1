1. Получаем и выводим весь список контактов в виде таблицы (console.table)
   node index.js --action list
   https://prnt.sc/g1EYvdBVkeLm

2. Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.
   node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
   https://prnt.sc/v7lbhelA3wsn

3. Добавляем контакт и выводим в консоль созданный контакт
   node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
   https://prnt.sc/kURT_XeefHV0

4. Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.
   node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
   https://prnt.sc/9uwdff8T2i1z
