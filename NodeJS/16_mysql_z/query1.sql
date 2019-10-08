select * from autos;

truncate table autos;


insert into autos (marke, baujahr, modell, ccm, farbe)
values('BMW',2007,'5er',1300,'schwarz');


insert into autos (marke, baujahr, modell, ccm, farbe)
values ('Audi', 2010,'3er', 1300,'blau'),
		('Porsche', 2012,'Cayenne', 1300,'schwarz'),
        ('BMW', 2007,'5er', 2000,'rot');
        
 -- alle auswählen
 select * from autos;
 
 -- alle blauen autos
 select * from autos where farbe='blau';
 
 -- alle autos, die nach 2010 gebaut wurden
 select * from autos where baujahr > 2010;
 
 --
 -- Erstelle eine Tabelle 'Person' mit den Spalten firstname, lastname und age.
 -- Firstname hat maximal 100 Zeichen ,age ist eine Ganzzahl.
 -- Füge folgende Personen hinzu:
 -- Max Muelleer 32
 -- Manfred Richter 42
 -- Manuela Winter 45
 -- Sandra Meier 25
 -- Robert Schulz 20
 -- Bob Smith 35
 
 SELECT * FROM person;

truncate table person;
-- Erstelle eine Tabelle 'Person' mit den Spalten firstname, lastname und age.
 -- Firstname hat maximal 100 Zeichen ,age ist eine Ganzzahl.
 -- Füge folgende Personen hinzu:
 -- Max Muelleer 32
 -- Manfred Richter 42
 -- Manuela Winter 45
 -- Sandra Meier 25
 -- Robert Schulz 20
 -- Bob Smith 35
 
insert into person (firstname, lastname,age)
values 	('Max','Muelleer', 32),
		('Manfred','Richter',42),
		('Manuela','Winter',45),
		('Sandra','Meier',25),
		('Robert','Schulz',20),
		('Bob','Smith',35);

select * from person;

-- älter als 40
Select * from person where age > 40;

-- 
-- i ist im firstname enthalten
select * from person where lastname like '%i%';

delete from person where id=4;

select * from person;
-- älter als 40
select * from person where age > 40;
-- firstname ist Max
select * from person where firstname = 'Max';

select firstname, age from person;
-- firstname fängt mit M an
select * from person where firstname like 'M%';
-- i ist im firtname enthalten
select * from person where lastname like '%i%';
-- firstname ändern
update person set firstname = 'Achmed' where firstname = 'Max';
-- achmed wird 36 jahre alt
update person set age = 36 where id = 1;
-- alle werden 10 jähre älter
update person set age = age + 10;
-- alle sollen den zusatz 'Junior' haben
update person set firstname = concat(firstname, ' Junior');





