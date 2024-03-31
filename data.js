(name)
('Organization A'),
('Organization B'),
('Organization C');

 (type, description) 
('perishable', 'Item A1'),
('non-perishable', 'Item B1'),
('perishable', 'Item A2'),
('non-perishable', 'Item B2');

(organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) 
(1, 1, 'central', 5, 2, 10),
(1, 2, 'north', 5, 1, 10),
(2, 1, 'central', 5, 2, 13),
(2, 2, 'north', 5, 2, 15),
(3, 1, 'central', 5, 1, 16),
(3, 4, 'north', 5, 2, 10);

