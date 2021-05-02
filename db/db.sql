CREATE database if not exists company;

use company;

create table employees(
	id int(11) not null auto_increment,
    nombre varchar(64) default null, 
    salario int(11) default null,
    primary key (id)
);

describe employees;

insert into employees values 
(1, 'Bayron Gutierrez',2000),
(2, 'Pedro Perez',4000),
(3, 'John Carter',6000);

select * from employees;

