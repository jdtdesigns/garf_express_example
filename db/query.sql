USE garf_db;

SELECT 
  l.id AS lasagnas_id,
  pasta,
  cheese_type,
  sauce,
  character_name AS chef
FROM characters c
  JOIN lasagnas l
    ON l.chef_id = c.id
GROUP BY l.id;
