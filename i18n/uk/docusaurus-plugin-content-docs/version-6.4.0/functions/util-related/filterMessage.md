---
title: '$filterMessage'
description: '$filterMessage will filter certain characters out of given text.'
id: filterMessage
---

`$filterMessage` will filter certain characters out of given text.

## Використання

```php
$filterMessage[text;...letters]
```

## Параметри

| Поле    | Тип   | Опис                                          | Обов'язковий |
| ------- | ----- | --------------------------------------------- |:------------:|
| text    | рядок | Text input which will be filtered.            |     так      |
| letters | рядок | Content you want to filter out of the `text`. |     так      |

## Приклад(и)

This will remove the `N` of `Never` and return `ever`:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```