USE garf_db;

SELECT 
  pasta,
  cheese_type,
  sauce,
  character_name AS chef
FROM characters c
  JOIN lasagnas l
    ON l.chef_id = c.id
ORDER by chef;

SELECT 
  character_name,
  COUNT(l.id) AS total_lasagnas
FROM characters c
  JOIN lasagnas l
    ON l.chef_id = c.id
GROUP BY l.chef_id;