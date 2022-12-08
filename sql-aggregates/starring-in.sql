select "genres"."name" as "genre",
  count("films") as "LisaMonroeFilms"
  from "genres"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actorId" = 178
group by "genres"."name";
