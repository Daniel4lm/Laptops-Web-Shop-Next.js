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
  imgUrl TEXT,
  price INTEGER
);

INSERT INTO laptops (brand, name, display, processor, memory, memory_type, graphics, storage, storage_unit, imgUrl, price) 
VALUES 
("Lenovo", "ThinkPad X240", "12.5 inch", "i5-4300U 1.9 GHz", 4, "DDR3L-SDRAM", "Intel HD Graphics 4400", 500, "GB HDD", "/laptops/X240/", 500),
("Lenovo", "ThinkPad X390", "13.3 inch", "i7-8665U 1.9 GHz", 16, "DDR4-SDRAM", "Intel UHD Graphics 620", 256, "GB SSD", "/laptops/X390/", 2500),
("Lenovo", "ThinkPad X280", "12.5 inch", "i3-8130U 2.2 GHz", 4, "DDR4-SDRAM", "Intel UHD Graphics 620", 128, "GB SSD", "/laptops/X280/", 900),
("Lenovo", "ThinkPad X220", "12.5 inch", "i5-2540M 2.6 GHz", 4, "DDR3-SDRAM", "Intel HD Graphics 3000", 320, "GB HDD", "/laptops/X220/", 300),
("Lenovo", "ThinkPad X250", "12.5 inch", "i7-5600U 2.6 GHz", 8, "DDR3L-SDRAM", "Intel HD Graphics 5500", 500, "GB HDD", "/laptops/X250/", 600),
("Lenovo", "ThinkPad X260", "12.5 inch", "i5-6200U 2.3 GHz", 8, "DDR4-SDRAM", "Intel HD Graphics 520", 192, "GB SSD", "/laptops/X260/", 530),
("Lenovo", "ThinkPad T450", "14 inch", "i5-5200U 2.2 GHz", 4, "DDR3L-SDRAM", "Intel HD Graphics 5500", 500, "GB HDD", "/laptops/T450/", 750),
("Lenovo", "ThinkPad T480", "14 inch", "i5-8250U 1.60 GHz", 4, "DDR4-SDRAM", "Intel UHD Graphics 620", 500, "GB HDD", "/laptops/T480/", 2500),
("Lenovo", "ThinkPad T540p", "15.6 inch", "Intel Core i7(4700MQ) 2.4GHz", 16, "DDR3L", "Intel HD Graphics 4600", 256, "GB SSD", "/laptops/T540p/", 950),
("Lenovo", "ThinkPad T540p", "15.6 inch", "Intel Core i5 4200M @ 2.50GHz", 8, "DDR3", "Intel HD Graphics 4600", 128, "GB SSD", "/laptops/T540p/", 750),
("Lenovo", "ThinkPad L570 - 20J80027HV", "15.6 inch", "i5-7200U 2.50 GHz", 8, "DDR4-SDRAM", "Intel HD Graphics 620", 1000 , "GB HDD", "/laptops/L570/", 2430),
("Lenovo", "ThinkPad P51s - 20HB000VSP", "15.6 inch", "i7-7500U 2.70 GHz", 8, "DDR4-SDRAM", "NVIDIA Quadro M520M", 256  , "GB SSD", "/laptops/P51s/", 4000)

;

-- Down
DROP TABLE laptops;