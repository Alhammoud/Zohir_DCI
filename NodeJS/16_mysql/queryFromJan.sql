
-- customers

select * from customers;

select * from customers where city = 'Berlin';

select * from customers where city = 'Berlin' order by firstname asc;

select upper(firstname), upper(lastname) from customers;


-- orders
select * from orders;

select 
	customers.*,
    orders.*
from
	customers
join
	orders
on
	customers.id = orders.customer_id
order by 
	firstname
;

select * from orders where customer_id = 17;
 
 


-- Aufgabe :
--
-- 1 Finde alle Customers mit dem Anfangsbuchstaben 'K' , für den firstname.
select * from customers where  firstname like 'K%';



-- 2 Alle Custumers deren Nachname mit entweder 'A' oder 'N' endet.
select * from customers where lastname like '%A' or '%N';

select * from customers where lastname like '%A' or  lastname like '%N';




-- 3 Vorname, Nachname und Alter aller Customers die jünger sind als 35.

select * from customers where TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) > 35 ORDER BY firstname,lastname;

select * from customers where TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) = 35;

select * from customers where TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) < 35;

SELECT TIMESTAMPDIFF(YEAR, '1989-01-01', CURDATE()); -- output: 30

select firstname, lastname ,birthdate , TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) as age from customers where TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) < 35 ORDER BY birthdate asc;


select firstname, lastname ,birthdate , TIMESTAMPDIFF(YEAR, customers.birthdate, CURDATE()) as age from customers where TIMESTAMPDIFF(YEAR, customers.birthdate, current_date()) < 35 ORDER BY birthdate asc;
SELECT TIMESTAMPDIFF(DAY, '1989-06-14', CURDATE()); -- output: 11037

SELECT TIMESTAMPDIFF(DAY, '1993-10-31', CURDATE()); -- output: 9473



-- 4 Finde alle Customers, die sich nach 20 Uhr abends registriert haben.

select Month('2012-10-31 23:05:39'); -- output: 10
select DAY('2012-10-31 23:05:39'); -- output: 31
select HOUR('2012-10-31 23:05:39'); -- output: 23
select minute('2012-10-31 23:05:39'); -- output: 5
select second('2012-10-31 23:05:39'); -- output: 39

select firstname, lastname ,registered from customers where HOUR(customers.registered) > 20 ORDER BY registered asc;


-- 5 Alle Customers ,die einen Email-Acount bei googlemail haben.

select firstname, lastname ,email from customers where email like '%@gmail.com';



-- Lesen/Select
-- alle
select * from customers;
-- filtern
select * from customers where city = 'Berlin';
-- sortieren
select * from customers where lastname = 'Meier' order by firstname desc;

-- verändern/update
update customers set city = 'Bln' where city = 'Berlin';
update customers set firstname = upper(firstname);
-- select * from customers;

-- Einfügen(insert)

insert into customers (id, firstname, lastname, registered, birthdate, phone, city, street, postal, email)
values(2000,'Maxx','Mustermann',now(),'1988-01-10','4921424','Berlin','Main Street 5','14332','max@abc.com');
       
-- löschen/delete
delete from customers where city = 'köln';
    
    