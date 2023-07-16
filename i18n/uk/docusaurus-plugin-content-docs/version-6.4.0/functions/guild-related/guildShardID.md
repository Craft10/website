---
title: '$guildShardID'
description: '$guildShardID поверне поточний фрагмент ID.'
id: guildShardID
---

`$guildShardID` поверне поточний фрагмент ID.

## Використання

```php
$guildShardID
```

**Зауважте, що це не працюватиме без фрагментів. Якщо ви не впевнені, перегляньте [гідність посібника](../../guides/Client/6sharding.md).**

## Приклад(и)

Це поверне поточний фрагмент ID:

```javascript
bot.command({
    name: 'guildShardID',
    код: `
  я зараз на шарі $guildShardID!
  `
});
```