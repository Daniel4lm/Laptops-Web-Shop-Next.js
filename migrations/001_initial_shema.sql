-- Up
CREATE TABLE laptops (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  name TEXT NOT NULL,
  display TEXT NOT NULL,
  processor TEXT NOT NULL,
  memory INTEGER NOT NULL,
  memory_type TEXT NOT NULL,
  graphics TEXT NOT NULL,
  storage INTEGER NOT NULL,
  storage_unit TEXT NOT NULL,
  imgUrl TEXT
);

INSERT INTO laptops (brand, name, display, processor, memory, memory_type, graphics, storage, storage_unit, imgUrl) 
VALUES 
("Lenovo", "ThinkPad X240", "12.5 inch", "i5-4300U 1.9 GHz", 4, "DDR3L-SDRAM", "Intel HD Graphics 4400", 500, "GB HDD", "/laptops/X240/"),
("Lenovo", "ThinkPad X390", "13.3 inch", "i7-8665U 1.9 GHz", 16, "DDR4-SDRAM", "Intel UHD Graphics 620", 256, "GB SSD", "/laptops/X390/"),
("Lenovo", "ThinkPad X280", "12.5 inch", "i3-8130U 2.2 GHz", 4, "DDR4-SDRAM", "Intel UHD Graphics 620", 128, "GB SSD", "/laptops/X280/"),
("Lenovo", "ThinkPad X220", "12.5 inch", "i5-2540M 2.6 GHz", 4, "DDR3-SDRAM", "Intel HD Graphics 3000", 320, "GB HDD", "/laptops/X220/"),
("Lenovo", "ThinkPad X250", "12.5 inch", "i7-5600U 2.6 GHz", 8, "DDR3L-SDRAM", "Intel HD Graphics 5500", 500, "GB HDD", "/laptops/X250/"),
("Lenovo", "ThinkPad X260", "12.5 inch", "i5-6200U 2.3 GHz", 8, "DDR4-SDRAM", "Intel HD Graphics 520", 192, "GB SSD", "/laptops/X260/"),
("Lenovo", "ThinkPad T450", "14 inch", "i5-5200U 2.2 GHz", 4, "DDR3L-SDRAM", "Intel HD Graphics 5500", 500, "GB HDD", "/laptops/T450/"),
("Lenovo", "ThinkPad T480", "14 inch", "i5-8250U 1.60 GHz", 4, "DDR4-SDRAM", "Intel UHD Graphics 620", 500, "GB HDD", "/laptops/T480/"),
("Lenovo", "ThinkPad T540p", "15.6 inch", "Intel Core i7(4700MQ) 2.4GHz", 16, "DDR3L", "Intel HD Graphics 4600", 256, "GB SSD", "/laptops/T540p/"),
("Lenovo", "ThinkPad T540p", "15.6 inch", "Intel Core i5 4200M @ 2.50GHz", 8, "DDR3", "Intel HD Graphics 4600", 128, "GB SSD", "/laptops/T540p/")
;

-- Down
DROP TABLE laptops;