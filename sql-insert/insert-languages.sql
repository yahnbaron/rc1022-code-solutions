insert into "languages" ("name")
values ('JavaScript'),
      ('HTML'),
      ('CSS')
  returning *;
